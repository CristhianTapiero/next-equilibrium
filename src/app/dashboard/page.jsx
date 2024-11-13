'use client'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Dashboard = () => {
    const { data: session } = useSession();
    console.log(session);
    return (
        <div>
            <h1>Dashboard</h1>
            {
                session ? (
                    <p>Welcome, {session.user.email}</p>
                ) : (
                    <p>Loading...</p>
                )
            }
            <button onClick={() => signOut({ callbackUrl: '/auth/login', redirect: true })}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
