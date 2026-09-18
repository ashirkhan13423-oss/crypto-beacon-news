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
            
            lines = content.split('\n')
            counts = defaultdict(int)
            for line in lines:
                cleaned = line.strip()
                if len(cleaned) > 50 and not cleaned.startswith('//') and not cleaned.startswith('import '):
                    counts[cleaned] += 1
                    
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
