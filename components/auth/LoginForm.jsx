"use client";

import { loginAction } from "@/action/authActions";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await loginAction(form.email, form.password);
      window.location.href = "/admin/dashboard";
    } catch (err) {
      alert(err.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="group flex flex-col gap-4 bg-background shadow-2xl mx-auto p-4 border-2 border-secondary/20 hover:border-secondary/95 w-md max-w-lg transition-all transition-discrete duration-300"
      >
        <div className="flex justify-center">
          <h2>Entrar al sistema</h2>
        </div>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          required
          className="p-2 border border-foreground/10 rounded-md focus:outline-0 text-foreground/75 placeholder:text-foreground/35"
        />
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Contraseña"
          required
          className="p-2 border border-foreground/10 rounded-md focus:outline-0 text-foreground/75 placeholder:text-foreground/35"
        />
        <button
          disabled={loading}
          className="bg-transparent hover:bg-foreground/2 mt-2 px-3 py-2 border-1 border-primary/60 rounded-md font-bold text-secondary text-sm transition-colors transition-discrete duration-300 hover:cursor-pointer"
        >
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>
        <div className="flex justify-end gap-2 px-3">
          <p className="text-fluid">Aun no tienes cuenta ?</p>
          <Link
            href={"/auth/register"}
            className="font-bold text-fluid text-primary hover:text-primary/75 transition-colors transition-discrete duration-300 hover:cursor-pointer"
          >
            Crear cuenta
          </Link>
        </div>
      </form>
    </div>
  );
}
