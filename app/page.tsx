export default function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        TEST SEARCH BAR
      </h1>

      <input
        type="text"
        placeholder="If you can see this, the page.tsx is rendering"
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "12px",
          fontSize: "16px",
          border: "2px solid black",
        }}
      />
    </div>
  );
}
