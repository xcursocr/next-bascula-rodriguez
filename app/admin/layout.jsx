import { redirect } from "next/navigation";

export default function AdminLayout({ children }) {
  const isAuthenticated = true; // Reemplazar por verificación real

  if (!isAuthenticated) {
    redirect("/auth/login");
  }

  return (
    <div className="admin-layout">
      <aside>Sidebar Admin</aside>
      <main>{children}</main>
    </div>
  );
}
