"use server";

import { createSession, deleteSession } from "@/lib/session";
import { fetchAction } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

// Registro
export async function registerAction(name, email, password) {
  return await fetchAction(api.mutations.users.registerUser, {
    name,
    email,
    password,
  });
}

// Login
export async function loginAction(email, password) {
  const { userId, role, name, username } = await fetchAction(
    api.mutations.users.loginUser,
    {
      email,
      password,
    }
  );

  // Aquí sí tenemos cookies() disponible
  await createSession(userId, role, name, username);

  return { success: true };
}

export async function logoutAction() {
  return await deleteSession();
}
