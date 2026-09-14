"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#0d0f11", color: "#f8f7f4", margin: 0, padding: "40px 20px", fontFamily: "sans-serif", textAlign: "center" }}>
        <div style={{ maxWidth: 480, margin: "60px auto", padding: 32, background: "#16181b", borderRadius: 12, border: "1px solid #333" }}>
          <h2 style={{ color: "#d4af37", marginBottom: 12 }}>Application Error</h2>
          <p style={{ color: "#9ca3af", fontSize: 14, marginBottom: 24 }}>
            {error?.message || "An unexpected error occurred."}
          </p>
          <button
            onClick={() => reset()}
            style={{ padding: "10px 20px", background: "#d4af37", color: "#000", border: "none", borderRadius: 6, fontWeight: "bold", cursor: "pointer" }}
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
