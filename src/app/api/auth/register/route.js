import { NextResponse } from "next/server";
import prisma from "@/libs/db.js";
import bcrypt from "bcrypt";

export async function POST(request) {
    try {
        const data = await request.json();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const userIDFound = await prisma.User.findUnique({
            where: {
                email: (data.email).toString()
            }
        });

        const userEmailFound = await prisma.User.findUnique({
            where: {
                email: (data.email).toString()
            }
        });

        if (userEmailFound) {
            return NextResponse.json({ message: "Email already in use" });
        }

        if (userIDFound) {
            return NextResponse.json({ message: "User already exists" });
        }

        const newUser = await prisma.User.create({
            data: {
                id_type: (data.id_type).toString(),
                id_number: (data.id).toString(),
                name: (data.name).toString(),
                email: (data.email).toString(),
                phone: (data.phone).toString(),
                address: (data.address).toString(),
                city: (data.city).toString(),
                password: hashedPassword
            }
        });
        return NextResponse.json({ message: newUser });
    } catch (error) {
        console.log(error);
    }
}

export async function GET(request) {
    try {
        const data = await request.json();
        const userIDFound = await prisma.User.findUnique({
            where: {
                email: (data.email).toString()
            }
        });

        return NextResponse.json({ message: userIDFound });
    } catch (error) {
        console.log(error);
    }
}
