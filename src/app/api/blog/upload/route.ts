import { NextRequest } from 'next/server';
import { validateApiKey, unauthorizedResponse } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

function ensureUploadDir() {
    if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    }
}

// POST /api/blog/upload — Subir una imagen para un blog post (protegido)
export async function POST(request: NextRequest) {
    if (!validateApiKey(request)) {
        return unauthorizedResponse();
    }

    try {
        ensureUploadDir();

        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return Response.json(
                { error: 'No se encontró archivo. Enviá el archivo como form-data con key "file".' },
                { status: 400 }
            );
        }

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            return Response.json(
                { error: `Tipo de archivo no permitido: ${file.type}. Permitidos: ${allowedTypes.join(', ')}` },
                { status: 400 }
            );
        }

        // Max 5MB
        const MAX_SIZE = 5 * 1024 * 1024;
        if (file.size > MAX_SIZE) {
            return Response.json(
                { error: 'El archivo supera el máximo de 5MB.' },
                { status: 400 }
            );
        }

        // Generate unique filename
        const ext = file.name.split('.').pop() || 'jpg';
        const timestamp = Date.now();
        const safeName = file.name
            .replace(/\.[^/.]+$/, '')
            .replace(/[^a-zA-Z0-9-_]/g, '-')
            .slice(0, 50);
        const filename = `${timestamp}-${safeName}.${ext}`;

        // Write file
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = path.join(UPLOAD_DIR, filename);
        fs.writeFileSync(filePath, buffer);

        const url = `/uploads/${filename}`;

        return Response.json({
            url,
            filename,
            message: 'Imagen subida exitosamente. Usá la URL en el campo "image" al crear un post.',
        }, { status: 201 });
    } catch (error) {
        return Response.json(
            { error: 'Error al subir la imagen', details: String(error) },
            { status: 500 }
        );
    }
}
