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
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d1424 0%, #05070d 100%)",
          borderRadius: "44px",
          border: "4px solid rgba(0, 217, 255, 0.7)",
          color: "#00d9ff",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "104px",
          letterSpacing: "-3px",
        }}
      >
        TM
      </div>
    ),
    {
      ...size,
    }
  );
}
