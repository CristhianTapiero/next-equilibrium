'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [id_type, setIdType] = useState("CC");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [terms, setTerms] = useState(false);
    const router = useRouter();

    const dataFullFilled = name && id && phone && address && city && email && password;

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
            alert("User registered successfully");
            router.push("/auth/login");
        } else {
            alert("An error occurred");
        }
    }

    return (
        <div className="main-container gap-y-4">
            <h1 className="text-5xl font-semibold text-eq_green-100">Registrate</h1>
            <form onSubmit={handleSubmit} className="form">
                <input className="input" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <div className="w-11/12 flex gap-x-2">
                    <select className="input w-max border-2 border-eq_neutral-500" defaultValue={"CC"} onChange={(e)=> setIdType(e.target.value)}>
                        <option value="CC">CC</option>
                        <option value="NIT">NIT</option>
                        <option value="PP">PP</option>
                    </select>
                    <input className="flex-grow input" type="text" placeholder="ID" onChange={(e) => setId(e.target.value)} />
                </div>
                <input className="input" type="tel" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                <input className="input" type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                <input className="input" type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
                <input className="input" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <div className="flex gap-x-2 justify-center items-center">
                    <input className="accent-eq_green-100 size-4" type="checkbox" name="" id="" defaultChecked={terms} onChange={()=>setTerms(!terms)} />
                    <label htmlFor="">Acepto los términos y condiciones</label>
                </div>
                <a href="/auth/login" className="link my-3">¿Ya tienes una cuenta? <span className="font-semibold">Inicia sesión aquí</span></a>
                <button className="btn-primary" type="submit" disabled={dataFullFilled && !terms ? false : true}>Registrarme</button>
            </form>
        </div>
    )
}

export default Register;