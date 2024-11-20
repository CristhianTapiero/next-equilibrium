'use client'
import React from "react";
import { useSession, getCsrfToken } from "next-auth/react";

const Dashboard = () => {
    React.useEffect(() => {
        const getToken = async () => {
            const csrfToken = await getCsrfToken();
            console.log(typeof csrfToken);
            localStorage.setItem('csrfToken', csrfToken);
        }
        getToken();
    }, []);
    const {data: session} = useSession();

    return (
        <div className="main-container">
            <h1>Dashboard</h1>
            {
                session ? (
                    <div>
                        <p>Welcome, {session.user.email}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
};

export default Dashboard;
