import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image?: string;
    content: string;
    published: boolean;
}

export interface BlogPostMeta {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image?: string;
    published: boolean;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function ensureBlogDir() {
    if (!fs.existsSync(BLOG_DIR)) {
        fs.mkdirSync(BLOG_DIR, { recursive: true });
    }
}

export function getAllPosts(): BlogPostMeta[] {
    ensureBlogDir();
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));

    const posts = files.map(filename => {
        const slug = filename.replace('.md', '');
        const filePath = path.join(BLOG_DIR, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        return {
            slug,
            title: data.title || 'Sin título',
            excerpt: data.excerpt || '',
            category: data.category || 'General',
            author: data.author || 'Darío Saldaño',
            date: data.date || new Date().toISOString(),
            readTime: data.readTime || '5 min lectura',
            image: data.image || undefined,
            published: data.published !== false,
        };
    });

    return posts
        .filter(p => p.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
    ensureBlogDir();
    const filePath = path.join(BLOG_DIR, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
        slug,
        title: data.title || 'Sin título',
        excerpt: data.excerpt || '',
        category: data.category || 'General',
        author: data.author || 'Darío Saldaño',
        date: data.date || new Date().toISOString(),
        readTime: data.readTime || '5 min lectura',
        image: data.image || undefined,
        content,
        published: data.published !== false,
    };
}

export function createPost(postData: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    content: string;
    author?: string;
    readTime?: string;
    image?: string;
    published?: boolean;
}): BlogPost {
    ensureBlogDir();

    const frontmatter = {
        title: postData.title,
        excerpt: postData.excerpt,
        category: postData.category,
        author: postData.author || 'Darío Saldaño',
        date: new Date().toISOString(),
        readTime: postData.readTime || '5 min lectura',
        image: postData.image || null,
        published: postData.published !== false,
    };

    const fileContent = matter.stringify(postData.content, frontmatter);
    const filePath = path.join(BLOG_DIR, `${postData.slug}.md`);
    fs.writeFileSync(filePath, fileContent, 'utf-8');

    return {
        slug: postData.slug,
        ...frontmatter,
        image: frontmatter.image || undefined,
        content: postData.content,
    };
}

export function updatePost(slug: string, updates: Partial<{
    title: string;
    excerpt: string;
    category: string;
    content: string;
    author: string;
    readTime: string;
    image: string;
    published: boolean;
}>): BlogPost | null {
    const existing = getPostBySlug(slug);
    if (!existing) return null;

    const updated = { ...existing, ...updates };
    const frontmatter = {
        title: updated.title,
        excerpt: updated.excerpt,
        category: updated.category,
        author: updated.author,
        date: existing.date,
        readTime: updated.readTime,
        image: updated.image || null,
        published: updated.published,
    };

    const fileContent = matter.stringify(updated.content, frontmatter);
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    fs.writeFileSync(filePath, fileContent, 'utf-8');

    return updated;
}

export function deletePost(slug: string): boolean {
    ensureBlogDir();
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) return false;
    fs.unlinkSync(filePath);
    return true;
}
