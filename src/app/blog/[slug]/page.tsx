import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: 'Post no encontrado' };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            ...(post.image && { images: [post.image] }),
        },
        twitter: {
            card: post.image ? 'summary_large_image' : 'summary',
            title: post.title,
            description: post.excerpt,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.date).toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Simple markdown to HTML conversion
    const htmlContent = post.content
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/^\> (.*$)/gm, '<blockquote><p>$1</p></blockquote>')
        .replace(/^- (.*$)/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(?!<[h|u|b|l|p])/gm, function (match) {
            return match ? '<p>' + match : match;
        });

    return (
        <article className="blog-post">
            <div className="blog-post-header">
                <Link href="/blog" className="blog-post-back">
                    ← Volver al blog
                </Link>

                <div className="blg-card-cat" style={{ marginBottom: '1rem' }}>
                    {post.category}
                </div>

                <h1 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 700,
                    color: 'var(--white)',
                    lineHeight: 1.15,
                    marginBottom: '1rem',
                    letterSpacing: '-.02em',
                }}>
                    {post.title}
                </h1>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'var(--gray-2)',
                    fontSize: '.82rem',
                    marginBottom: '2rem',
                }}>
                    <div className="blg-card-author">
                        <div className="blg-card-avatar">DS</div>
                        <span className="blg-card-author-name">{post.author}</span>
                    </div>
                    <span>·</span>
                    <span>{formattedDate}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                </div>

                {post.image && (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="blog-post-image"
                    />
                )}
            </div>

            <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            <div style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--ink-3)',
                textAlign: 'center',
            }}>
                <p style={{ color: 'var(--gray-2)', fontSize: '.88rem', marginBottom: '1.5rem' }}>
                    ¿Este artículo te resultó útil? Conversemos sobre cómo aplicar estas ideas en tu equipo.
                </p>
                <Link href="/contacto" className="btn btn-p">
                    Hablemos →
                </Link>
            </div>
        </article>
    );
}
