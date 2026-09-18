import os
import re
import glob
from collections import defaultdict

def extract(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    url_match = re.search(r'const URL = "(.*?)";', content)
    url = url_match.group(1) if url_match else filepath
    
    # Let's also grab ANY text block that seems like a paragraph just in case it's not in a <P> tag
    # But usually it is in a P tag.
    paragraphs = re.findall(r'<[pP][^>]*>(.*?)</[pP]>', content, re.DOTALL)
    
    # Also find text in <div>, <span>, <li> just in case the repeating paragraphs are there
    other_elements = re.findall(r'<(div|span|li|td)[^>]*>(.*?)</\1>', content, re.DOTALL)
    for tag, inner in other_elements:
        paragraphs.append(inner)
        
    cleaned = []
    for p in paragraphs:
        # Remove JSX curly brace variables to avoid discrepancies
        p = re.sub(r'\{[^\}]+\}', ' ', p)
        text = re.sub(r'<[^>]+>', ' ', p)
        text = re.sub(r'\s+', ' ', text).strip()
        if len(text) > 50: 
            cleaned.append(text)
            
    return url, cleaned

def main():
    routes_dir = os.path.join('src', 'routes')
    files = glob.glob(os.path.join(routes_dir, '**', '*.tsx'), recursive=True)
    
    found = False
    for f in files:
        try:
            url, paras = extract(f)
            counts = defaultdict(int)
            for p in paras: 
                counts[p] += 1
                
            reps = {p: c for p, c in counts.items() if c >= 3}
            if reps:
                found = True
                print(f"URL: {url}")
                for p, c in reps.items():
                    print(f" - {c} times: {p[:150]}...")
        except Exception as e:
            pass

    if not found:
        print("No matches found.")

if __name__ == "__main__":
    main()
