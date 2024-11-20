'use client'
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dataFullFilled = (email != "") && (password != "");

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

        console.log(res)
        if (res.ok) {
            alert("User logged in successfully");
            router.push("/dashboard");
        } else {
            alert("User not found");
        }
    };

    return (
        <div className="main-container gap-y-4">
            <h1 className="text-5xl font-semibold text-eq_green-100 mb-5">Inicia sesión</h1>
            <form action="" onSubmit={handleSubmit} className="form">
                <input className="input" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <a href="/auth/register" className="link my-3">¿Aún no tienes cuenta? <span className="font-semibold">Registrate aquí</span></a>
                <button className="btn-primary mt-2" type="submit" disabled={!dataFullFilled}>Iniciar Sesión</button>
            </form>
        </div>
    );
};
export default Login;