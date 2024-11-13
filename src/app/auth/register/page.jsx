'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

const Register = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [id_type, setIdType] = useState("CC");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { setUser } = useUser();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!name || !id || !phone || !address || !city || !email || !password) {
            alert("All fields are required");
            return;
        }
        if (!/^\d+$/.test(id)) {
            alert("ID must be numeric");
            return;
        }
        if (!/^\d{10}$/.test(phone)) {
            alert("Phone must be a 10-digit number");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Email is invalid");
            return;
        }

        const formData = {
            "name": name,
            "id_type": id_type,
            "id": id,
            "phone": phone,
            "address": address,
            "city": city,
            "email": email,
            "password": password
        };

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData
            })
        });

        if (res.ok) {
            const resJSON = await res.json();
            setUser(resJSON);
            alert("User registered successfully");
            router.push("/auth/login");
        } else {
            alert("An error occurred");
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <div>
                    <select name="" id="" defaultValue={"CC"} onChange={(e)=> setIdType(e.target.value)}>
                        <option value="CC">CC</option>
                        <option value="NIT">NIT</option>
                        <option value="PP">PP</option>
                    </select>
                    <input type="text" placeholder="ID" onChange={(e) => setId(e.target.value)} />
                </div>
                <input type="tel" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;