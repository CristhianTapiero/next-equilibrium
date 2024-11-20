'use client'
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
    const { data: session } = useSession();
    return (
        <nav className="nav-bar">
            <Link href="/" className="text-2xl text-eq_green-100 font-semibold">EQUILIBRIUM</Link>
            {
                session ? (
                    <div className="flex gap-x-2 items-center">
                        <Link href="/dashboard" className="btn-nav-bar">Dashboard</Link>
                        <button onClick={() => signOut({ redirect: true, callbackUrl: '/auth/login' })} className="btn-nav-bar">Cerrar Sesión</button>
                    </div>
                ) : (
                    <ul className="flex gap-x-2">
                        <li>
                            <Link href="/auth/login" className="btn-nav-bar">Iniciar Sesión</Link>
                        </li>
                        <li>
                            <Link href="/auth/register" className="btn-nav-bar">Registrarse</Link>
                        </li>
                    </ul>

                )
            }
        </nav>
    )
}

export default Navbar;