import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #eef2f7, #d7dde6)",
          color: "#1f252b",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 132,
            width: 132,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 34,
            background: "linear-gradient(145deg, #fb923c, #ea580c)",
            boxShadow: "0 10px 24px rgba(154, 52, 18, 0.28)",
            color: "#ffffff",
            fontSize: 60,
            fontWeight: 800,
            letterSpacing: "-0.08em",
          }}
        >
          JR
        </div>
      </div>
    ),
    size,
  );
}
