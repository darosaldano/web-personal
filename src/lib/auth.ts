import { NextRequest } from 'next/server';

/**
 * Validates the API key from the request headers.
 * n8n and other external services should include this key 
 * in the Authorization header as: Bearer <API_KEY>
 */
export function validateApiKey(request: NextRequest): boolean {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader) return false;

    const token = authHeader.replace('Bearer ', '');
    const apiKey = process.env.BLOG_API_KEY;

    if (!apiKey) {
        console.warn('BLOG_API_KEY not set in environment variables');
        return false;
    }

    return token === apiKey;
}

export function unauthorizedResponse() {
    return Response.json(
        { error: 'No autorizado. Incluí un API key válido en el header Authorization.' },
        { status: 401 }
    );
}
