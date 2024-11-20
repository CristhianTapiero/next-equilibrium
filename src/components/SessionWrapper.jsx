'use client'
import { SessionProvider } from "next-auth/react";



export const SessionWrapper = ({ children }) => {
    return (
        <SessionProvider refetchInterval={600}>
            {children}
        </SessionProvider>
    );
}