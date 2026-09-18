import os
import glob
import re
from collections import defaultdict

def main():
    routes_dir = os.path.join('src', 'routes')
    files = glob.glob(os.path.join(routes_dir, '**', '*.tsx'), recursive=True)
    
    found = False
    for filepath in files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            url_match = re.search(r'const URL = "(.*?)";', content)
            url = url_match.group(1) if url_match else filepath
            
            # strip all tags completely and replace with newline
            text = re.sub(r'<[^>]+>', '\n', content)
            
            # split by newlines
            chunks = text.split('\n')
            
            counts = defaultdict(int)
            for c in chunks:
                c = re.sub(r'\s+', ' ', c).strip()
                # Ignore UI elements like "Bitcoin", "Ethereum", "Home", dates, etc.
                if len(c) > 100:
                    counts[c] += 1
                    
            reps = {p: c for p, c in counts.items() if c >= 3}
            if reps:
                found = True
                print(f"URL: {url}")
                for p, c in reps.items():
                    print(f" - {c} times: {p}")
        except Exception as e:
            pass

    if not found:
        print("No matches found.")

if __name__ == "__main__":
    main()
