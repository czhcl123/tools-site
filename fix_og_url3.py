import os, glob

base = 'https://tools-site-production.up.railway.app'

def fix_file(page_file, slug, is_blog=False):
    with open(page_file, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content

    if is_blog:
        og_url = f"'{base}/blog/{slug}'"
    else:
        # Dynamic URL based on lang
        og_url = f"`${{lang === 'zh' ? '{base}/zh/{slug}' : '{base}/{slug}'}}`"

    if 'openGraph' in content:
        # Find "openGraph: {" and add url right after the opening brace
        # Handle both single-line and multi-line formats
        import re
        # Match openGraph: { (possibly with content on same line)
        pattern = r'(openGraph:\s*\{)'
        match = re.search(pattern, content)
        if match:
            insert_pos = match.end()
            url_prop = f"\n        url: {og_url},"
            content = content[:insert_pos] + url_prop + content[insert_pos:]
    else:
        # No openGraph - add after alternates block
        lines = content.split('\n')
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
        
        if insert_idx is not None:
            og_line = f"      openGraph: {{ url: {og_url} }},"
            lines.insert(insert_idx, og_line)
            content = '\n'.join(lines)

    if content != original:
        with open(page_file, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

fixed = 0

# Tool pages
for page_file in glob.glob(os.path.join(r'D:\SEO\tools-site\src\app', '*/page.tsx')):
    slug = os.path.basename(os.path.dirname(page_file))
    if slug in ('blog', 'zh', 'about'):
        continue
    if fix_file(page_file, slug, is_blog=False):
        fixed += 1
        print(f"Tool: {slug}")

# Blog pages
for page_file in glob.glob(os.path.join(r'D:\SEO\tools-site\src\app\blog', '*/page.tsx')):
    slug = os.path.basename(os.path.dirname(page_file))
    if fix_file(page_file, slug, is_blog=True):
        fixed += 1
        print(f"Blog: {slug}")

# Blog index
blog_index = r'D:\SEO\tools-site\src\app\blog\page.tsx'
with open(blog_index, 'r', encoding='utf-8') as f:
    content = f.read()
if 'openGraph' not in content:
    content = content.replace(
        "canonical: 'https://tools-site-production.up.railway.app/blog',",
        "canonical: 'https://tools-site-production.up.railway.app/blog',\n      openGraph: { url: 'https://tools-site-production.up.railway.app/blog' },"
    )
    with open(blog_index, 'w', encoding='utf-8') as f:
        f.write(content)
    fixed += 1
    print("Blog index")

print(f"\nTotal: {fixed}")
