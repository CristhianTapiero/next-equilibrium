'use client'
import { signOut } from "next-auth/react";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => signOut({ callbackUrl: '/auth/login', redirect: true })}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
