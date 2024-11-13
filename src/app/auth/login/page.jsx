'use client'
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("All fields are required");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Email is invalid");
            return;
        }

        const res = await signIn("credentials", {
            redirect: false,
            email: email,
            password: password
        });

        if (res.ok) {
            alert("User logged in successfully");
            router.push("/dashboard");
        } else {
                alert("User not found");
            }
        };
    
        return (
            <div>
                <h1>Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    };
    export default Login;