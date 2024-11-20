import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from 'next/server';
import prisma from '@/libs/db';

export async function GET() {
    console.log("Entra al endpoint de getUsers")

    const session = await getServerSession(authOptions);
  
    if (!session) {
        return NextResponse.redirect('/auth/register');
    }

    const userFound = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    return NextResponse.json({ user: userFound });
}