import os
import re
from collections import defaultdict
import glob

def get_text_chunks(content):
    # Remove all JSX/HTML tags, keeping their content if not a script/style
    # A simpler way: split by tags
    chunks = re.split(r'<[^>]+>', content)
    
    # Clean up chunks
    cleaned_chunks = []
    for chunk in chunks:
        # Remove JSX expressions like {variable}
        chunk = re.sub(r'\{[^\}]+\}', ' ', chunk)
        
        # Remove extra whitespace and newlines
        chunk = re.sub(r'\s+', ' ', chunk).strip()
        
        if len(chunk) > 50: # Only consider substantial paragraphs (e.g. > 50 chars)
            cleaned_chunks.append(chunk)
            
    return cleaned_chunks

def main():
    routes_dir = os.path.join('src', 'routes')
    files = glob.glob(os.path.join(routes_dir, '**', '*.tsx'), recursive=True)
    
    results = {}
    
    for filepath in files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            chunks = get_text_chunks(content)
            
            # Count frequencies
            counts = defaultdict(int)
            for c in chunks:
                counts[c] += 1
                
            repeats = {c: count for c, count in counts.items() if count >= 3}
            
            if repeats:
                url_match = re.search(r'const URL = "(.*?)";', content)
                url = url_match.group(1) if url_match else filepath
                results[url] = repeats
        except Exception as e:
            print(f"Error reading {filepath}: {e}")

    for url, repeats in results.items():
        print(f"Article: {url}")
        for text, count in repeats.items():
            print(f"  - Repeated {count} times: \"{text[:100]}...\"")
            print(f"    (Full text: {text})")
            
    if not results:
        print("No articles with 3+ repeated paragraphs found.")

if __name__ == "__main__":
    main()
