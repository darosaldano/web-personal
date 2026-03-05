import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Artículos sobre consultoría IT, SDD (Specs Driven Development), liderazgo de equipos técnicos e inteligencia artificial aplicada. Por Darío Saldaño.',
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="blog-listing">
            <div className="container">
                <div className="blog-listing-header">
                    <div className="section-label">Blog</div>
                    <h1 className="section-title">Ideas que <span>construyen</span></h1>
                    <p className="section-subtitle">
                        Artículos sobre tecnología, liderazgo, SDD y cómo escalar equipos IT en LATAM.
                        Escritos con la experiencia de más de 15 años en la industria.
                    </p>
                </div>

                {posts.length > 0 ? (
                    <div className="blog-grid">
                        {posts.map(post => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div style={{
                        textAlign: 'center',
                        padding: '5rem 1rem',
                        color: 'var(--gray-3)',
                    }}>
                        <div style={{
                            fontSize: '3rem',
                            marginBottom: '1rem',
                        }}>
                            📝
                        </div>
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.2rem',
                            color: 'var(--white)',
                            marginBottom: '.5rem',
                        }}>
                            Próximamente
                        </h3>
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '.88rem',
                            maxWidth: '400px',
                            margin: '0 auto',
                        }}>
                            Los artículos sobre SDD, liderazgo IT e IA aplicada están en camino.
                            Volvé pronto.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
