"use client";

import { logoutAction } from "@/action/authActions";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  async function handleLogout() {
    await logoutAction();
    // Opcional: redirigir al login o home
    window.location.href = "/auth/login";
  }

  return (
    <button
      onClick={handleLogout}
      className="text-primary hover:text-primary/75 transition-colors transition-discrete duration-300 hover:cursor-pointer"
    >
      <LogOut className="w-4" />
    </button>
  );
}
