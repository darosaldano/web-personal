import Link from 'next/link';
import { BlogPostMeta } from '@/lib/blog';

interface BlogCardProps {
    post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
    const formattedDate = new Date(post.date).toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'short',
    });

    return (
        <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <article className="blg-card">
                {post.image && (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="blg-card-image"
                        loading="lazy"
                    />
                )}
                <div className="blg-card-content">
                    <div className="blg-card-cat">{post.category}</div>
                    <h3 className="blg-card-title">{post.title}</h3>
                    <p className="blg-card-excerpt">{post.excerpt}</p>
                </div>
                <div className="blg-card-footer">
                    <div className="blg-card-author">
                        <div className="blg-card-avatar">DS</div>
                        <span className="blg-card-author-name">{post.author}</span>
                    </div>
                    <div className="blg-card-meta">
                        <div>{post.readTime}</div>
                        <div>{formattedDate}</div>
                    </div>
                </div>
            </article>
        </Link>
    );
}
