"use client";

import { registerAction } from "@/action/authActions";
import Link from "next/link";
import { useState } from "react";

export function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await registerAction(form.name, form.email, form.password);
      alert("Registrado con éxito, ahora puedes iniciar sesión");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      alert(err.message || "Error al registrar");
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
          <h2>Registrarse al sistema</h2>
        </div>
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Nombre"
          required
          className="p-2 border border-foreground/10 rounded-md focus:outline-0 text-foreground/75 placeholder:text-foreground/35"
        />
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
          {loading ? "Registrando..." : "Registrarse"}
        </button>
        <div className="flex justify-end gap-2 px-3">
          <p className="text-fluid">Ya tienes cuenta ?</p>
          <Link
            href={"/auth/login"}
            className="font-bold text-fluid text-primary hover:text-primary/75 transition-colors transition-discrete duration-300 hover:cursor-pointer"
          >
            Inicia session
          </Link>
        </div>
      </form>
    </div>
  );
}
