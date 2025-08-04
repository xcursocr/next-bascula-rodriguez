export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <header>Navbar Auth</header>
      <main>{children}</main>
    </div>
  );
}
