import os
import re
import json

routes_dir = 'src/routes'
vercel_file = 'vercel.json'

files_to_update = [
    'bitcoin.what-is-the-bitcoin-halving.tsx',
    'bitcoin.what-is-a-bitcoin-wallet.tsx',
    'security.how-to-store-crypto-seed-phrase-safely.tsx',
    'security.seed-phrase-storage-steel-vs-paper-vs-metal.tsx',
    'guides.what-is-a-private-key.tsx',
    'security.how-to-avoid-crypto-phishing-scams.tsx',
    'security.how-to-revoke-smart-contract-approvals.tsx',
    'security.how-to-revoke-token-approvals-metamask.tsx',
    'news.bitcoin-rally-august-2026.tsx',
    'news.bitcoin-september-rally-macro-test.tsx',
    'author.tsx'
]

word_counts = {}

def update_boilerplate(content, topic):
    disclaimer1 = "This article is educational. It isn't financial advice."
    disclaimer2 = "This article is educational. It is not financial advice."
    
    new_text = f"This comprehensive guide to {topic} is for educational purposes only and should not be construed as financial advice. Always do your own research before making investment decisions."
    
    content = content.replace(disclaimer1, new_text)
    content = content.replace(disclaimer2, new_text)
    return content

for file in files_to_update:
    filepath = os.path.join(routes_dir, file)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        topic = file.split('.')[1].replace('-', ' ') if len(file.split('.')) > 2 else 'crypto'
        new_content = update_boilerplate(content, topic)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        text_only = re.sub(r'<[^>]+>', ' ', new_content)
        text_only = re.sub(r'\s+', ' ', text_only)
        word_counts[file] = len([w for w in text_only.split(' ') if w])

# Step 2: noindex for learn, glossary, defi, etfs, taxes
noindex_files = [
    'learn.index.tsx', 'glossary.index.tsx', 'defi.index.tsx', 'etfs.index.tsx', 'taxes.index.tsx',
    'learn.tsx', 'glossary.tsx', 'defi.tsx', 'etfs.tsx', 'taxes.tsx'
]

for file in noindex_files:
    filepath = os.path.join(routes_dir, file)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        if 'meta: ' in content:
             content = re.sub(r'meta:\s*\[(.*?)\]', r'meta: [\1, { name: "robots", content: "noindex, follow" }]', content)
        elif 'head: () => ({' in content:
            # Need to merge
            pass
        
        # We will just write the changes manually or skip for the script since it's hard to parse AST with regex

# Step 3: vercel.json redirect
with open(vercel_file, 'r', encoding='utf-8') as f:
    vercel_data = json.load(f)

if 'redirects' not in vercel_data:
    vercel_data['redirects'] = []

# Check if redirect exists
exists = False
for r in vercel_data['redirects']:
    if r['source'] == '/news/liquid-network-hack-4000-btc-withdrawal':
        exists = True
        break

if not exists:
    vercel_data['redirects'].append({
        "source": "/news/liquid-network-hack-4000-btc-withdrawal",
        "destination": "/news/liquid-network-3400-btc-returned-320-million-incident",
        "permanent": True
    })
    
with open(vercel_file, 'w', encoding='utf-8') as f:
    json.dump(vercel_data, f, indent=2)
    
print("Changes applied. Word counts:")
print(json.dumps(word_counts, indent=2))
