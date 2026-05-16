"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      console.log("LOGIN SUCCESS:", res.data);

      alert("Login Successful 🚀");

      router.push("/dashboard");
    } catch (error) {
      console.log("LOGIN ERROR:", error);

      alert("Login Failed ❌");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            TaskMatrix
          </h1>

          <p className="mt-2 text-slate-400">
            Enterprise Project Management Platform
          </p>
        </div>

        <div className="space-y-4">
          
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none transition focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none transition focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={login}
            className="w-full rounded-xl bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </div>

        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">
            Demo Credentials:
          </p>

          <p className="mt-2 text-sm text-white">
            Email: admin@gmail.com
          </p>

          <p className="text-sm text-white">
            Password: 123456
          </p>
        </div>
      </div>
    </main>
  );
}