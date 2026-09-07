export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
      <h1 style={{ color: "#ff0055", letterSpacing: "2px" }}>PAULO_ROBERTO_OS // API_SERVER</h1>
      <p style={{ color: "#00f0ff" }}>&gt; STATUS: ONLINE</p>
      <p style={{ color: "#8a8f9e", fontSize: "14px" }}>
        SVG Route: <a href="/api/hud-banner" style={{ color: "#ff0055" }}>/api/hud-banner</a>
      </p>
    </div>
  );
}