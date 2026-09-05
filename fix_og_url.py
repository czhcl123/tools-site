import os, re, glob

base = 'https://tools-site-production.up.railway.app'

# Fix tool pages
tool_dir = r'D:\SEO\tools-site\src\app'
fixed = 0
for page_file in glob.glob(os.path.join(tool_dir, '*/page.tsx')):
    slug = os.path.basename(os.path.dirname(page_file))
    # Skip blog, zh, about etc
    if slug in ('blog', 'zh', 'about', 'favicon.ico'):
        continue
    with open(page_file, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content
    
    # Add openGraph.url after alternates block in generateMetadata
    # Pattern: find "alternates: {" ... "}," and add openGraph after it
    # For pages with dynamic canonical based on lang
    og_block = f"""      openGraph: {{
        url: `${{lang === 'zh' ? '{base}/zh/{slug}' : '{base}/{slug}'}}`,
      }},"""
    
    # Try to insert after alternates block
    if 'openGraph' not in content:
        # Find the alternates closing and add openGraph after
        # Match pattern: alternates: { ... },
        pattern = r'(alternates:\s*\{[^}]*canonical:[^}]*\}[^}]*\},)'
        replacement = r'\1\n' + og_block
        new_content = re.sub(pattern, replacement, content, count=1)
        if new_content != content:
            with open(page_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            fixed += 1
            print(f"Tool: {slug}")

# Fix blog pages
blog_dir = r'D:\SEO\tools-site\src\app\blog'
for page_file in glob.glob(os.path.join(blog_dir, '*/page.tsx')):
    slug = os.path.basename(os.path.dirname(page_file))
    with open(page_file, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content
    
    if 'openGraph' not in content:
        og_block = f"""      openGraph: {{
        url: '{base}/blog/{slug}',
      }},"""
        pattern = r'(alternates:\s*\{[^}]*canonical:[^}]*\}[^}]*\},)'
        replacement = r'\1\n' + og_block
        new_content = re.sub(pattern, replacement, content, count=1)
        if new_content != content:
            with open(page_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            fixed += 1
            print(f"Blog: {slug}")

# Fix blog index page
blog_index = os.path.join(blog_dir, 'page.tsx')
with open(blog_index, 'r', encoding='utf-8') as f:
    content = f.read()
if 'openGraph' not in content:
    og_block = f"""      openGraph: {{
        url: '{base}/blog',
      }},"""
    pattern = r"(canonical:\s*'[^']+',)"
    replacement = r'\1\n' + og_block
    new_content = re.sub(pattern, replacement, content, count=1)
    if new_content != content:
        with open(blog_index, 'w', encoding='utf-8') as f:
            f.write(new_content)
        fixed += 1
        print("Blog index")

print(f"\nTotal fixed: {fixed} files")
