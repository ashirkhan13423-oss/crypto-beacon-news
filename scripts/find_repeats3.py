import os
import re
import glob
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
            
            # Remove script/style if they exist (rare in these TSX but just in case)
            content = re.sub(r'<script.*?</script>', '', content, flags=re.DOTALL)
            content = re.sub(r'<style.*?</style>', '', content, flags=re.DOTALL)
            
            # Remove JSX curly brace blocks to avoid variables
            content = re.sub(r'\{[^\}]+\}', ' ', content)
            
            # Replace tags with newlines
            text_only = re.sub(r'<[^>]+>', '\n', content)
            
            # Split by newlines
            lines = text_only.split('\n')
            
            counts = defaultdict(int)
            for line in lines:
                cleaned = re.sub(r'\s+', ' ', line).strip()
                # Ignore very short lines which might be just punctuation, navigation names, or generic ui text
                if len(cleaned) > 40: 
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
