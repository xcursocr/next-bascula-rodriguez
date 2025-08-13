import { cookies } from "next/headers";
import { decrypt } from "./session";

export async function getSession() {
  const cookieStore = cookies();
  const token = cookieStore.get("session")?.value;

  if (!token) return null;

  const session = await decrypt(token);
  return session;
}

/**
 * Luego en cualquier server component:
 * 
 * import { getSession } from "@/lib/getSession";

export default async function Profile() {
  const session = await getSession();

  if (!session) return <p>No estás logueado</p>;

  return (
    <>
      <h1>Hola, {session.name}</h1>
      <p>Rol: {session.role}</p>
      <p>Usuario: {session.username}</p>
    </>
  );
}

 */
