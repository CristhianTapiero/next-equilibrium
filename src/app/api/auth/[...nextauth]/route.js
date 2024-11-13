import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/libs/db';
import bcrypt from 'bcrypt';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials)
                const userFound = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!userFound) throw new Error('User not found');
                
                const matchPass = await bcrypt.compare(credentials.password, userFound.password);
                if (!matchPass) throw new Error('Password does not match');
                return {
                    id: userFound.id,
                    email: userFound.email,
                    name: userFound.name
                }

            }
        })
    ],
    pages: {
        signIn: '/auth/register',
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};

