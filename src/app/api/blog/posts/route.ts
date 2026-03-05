import { NextRequest } from 'next/server';
import { getAllPosts, getPostBySlug, createPost, updatePost, deletePost } from '@/lib/blog';
import { validateApiKey, unauthorizedResponse } from '@/lib/auth';

// GET /api/blog/posts — Listar todos los posts
export async function GET() {
    try {
        const posts = getAllPosts();
        return Response.json({ posts, total: posts.length });
    } catch (error) {
        return Response.json(
            { error: 'Error al obtener los posts', details: String(error) },
            { status: 500 }
        );
    }
}

// POST /api/blog/posts — Crear un nuevo post (protegido con API key)
export async function POST(request: NextRequest) {
    if (!validateApiKey(request)) {
        return unauthorizedResponse();
    }

    try {
        const body = await request.json();

        // Validación
        if (!body.slug || !body.title || !body.content) {
            return Response.json(
                { error: 'Campos requeridos: slug, title, content' },
                { status: 400 }
            );
        }

        // Verificar si ya existe
        const existing = getPostBySlug(body.slug);
        if (existing) {
            return Response.json(
                { error: `Ya existe un post con slug "${body.slug}"` },
                { status: 409 }
            );
        }

        const post = createPost({
            slug: body.slug,
            title: body.title,
            excerpt: body.excerpt || '',
            category: body.category || 'General',
            content: body.content,
            author: body.author,
            readTime: body.readTime,
            image: body.image,
            published: body.published,
        });

        return Response.json({ post, message: 'Post creado exitosamente' }, { status: 201 });
    } catch (error) {
        return Response.json(
            { error: 'Error al crear el post', details: String(error) },
            { status: 500 }
        );
    }
}

// PUT /api/blog/posts — Actualizar un post existente (protegido con API key)
export async function PUT(request: NextRequest) {
    if (!validateApiKey(request)) {
        return unauthorizedResponse();
    }

    try {
        const body = await request.json();

        if (!body.slug) {
            return Response.json(
                { error: 'Campo requerido: slug' },
                { status: 400 }
            );
        }

        const updated = updatePost(body.slug, body);

        if (!updated) {
            return Response.json(
                { error: `Post con slug "${body.slug}" no encontrado` },
                { status: 404 }
            );
        }

        return Response.json({ post: updated, message: 'Post actualizado exitosamente' });
    } catch (error) {
        return Response.json(
            { error: 'Error al actualizar el post', details: String(error) },
            { status: 500 }
        );
    }
}

// DELETE /api/blog/posts — Eliminar un post (protegido con API key)
export async function DELETE(request: NextRequest) {
    if (!validateApiKey(request)) {
        return unauthorizedResponse();
    }

    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get('slug');

        if (!slug) {
            return Response.json(
                { error: 'Parámetro requerido: slug' },
                { status: 400 }
            );
        }

        const deleted = deletePost(slug);

        if (!deleted) {
            return Response.json(
                { error: `Post con slug "${slug}" no encontrado` },
                { status: 404 }
            );
        }

        return Response.json({ message: 'Post eliminado exitosamente' });
    } catch (error) {
        return Response.json(
            { error: 'Error al eliminar el post', details: String(error) },
            { status: 500 }
        );
    }
}
