import os, glob

base = 'https://tools-site-production.up.railway.app'

def add_og_url(page_file, slug, is_blog=False):
    with open(page_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Find the alternates closing "}," line
    in_alternates = False
    brace_depth = 0
    insert_idx = None
    for i, line in enumerate(lines):
        if 'alternates:' in line and '{' in line:
            in_alternates = True
            brace_depth = line.count('{') - line.count('}')
            continue
        if in_alternates:
            brace_depth += line.count('{') - line.count('}')
            if brace_depth <= 0:
                insert_idx = i + 1
                break
    
    if insert_idx is None:
        return False
    
    # Check if openGraph already exists nearby
    for i in range(max(0, insert_idx - 2), min(len(lines), insert_idx + 5)):
        if 'openGraph' in lines[i]:
            return False
    
    # Determine og:url
    if is_blog:
        og_url = f'{base}/blog/{slug}'
        indent = '      '
        og_line = f"{indent}openGraph: {{ url: '{og_url}' }},\n"
    else:
        og_url_template = f"${{lang === 'zh' ? '{base}/zh/{slug}' : '{base}/{slug}'}}"
        indent = '      '
        og_line = f"{indent}openGraph: {{ url: `{og_url_template}` }},\n"
    
    lines.insert(insert_idx, og_line)
    
    with open(page_file, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    return True

# Tool pages
fixed = 0
for page_file in glob.glob(os.path.join(r'D:\SEO\tools-site\src\app', '*/page.tsx')):
    slug = os.path.basename(os.path.dirname(page_file))
    if slug in ('blog', 'zh', 'about'):
        continue
    if add_og_url(page_file, slug, is_blog=False):
        fixed += 1
        print(f"Tool: {slug}")

# Blog pages
for page_file in glob.glob(os.path.join(r'D:\SEO\tools-site\src\app\blog', '*/page.tsx')):
    slug = os.path.basename(os.path.dirname(page_file))
    if add_og_url(page_file, slug, is_blog=True):
        fixed += 1
        print(f"Blog: {slug}")

# Blog index
blog_index = r'D:\SEO\tools-site\src\app\blog\page.tsx'
with open(blog_index, 'r', encoding='utf-8') as f:
    content = f.read()
if 'openGraph' not in content:
    # Add after canonical line
    content = content.replace(
        "canonical: 'https://tools-site-production.up.railway.app/blog',",
        "canonical: 'https://tools-site-production.up.railway.app/blog',\n      openGraph: { url: 'https://tools-site-production.up.railway.app/blog' },"
    )
    with open(blog_index, 'w', encoding='utf-8') as f:
        f.write(content)
    fixed += 1
    print("Blog index")

print(f"\nTotal fixed: {fixed}")
