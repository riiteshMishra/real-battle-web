import { ImageResponse } from "next/og";

export const alt =
  "Real Battle — competitive Free Fire tournaments for Indian players";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const OgImage = () => {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-180px",
            left: "-60px",
            width: "620px",
            height: "620px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(229,72,77,0.32) 0%, rgba(229,72,77,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            right: "-80px",
            width: "620px",
            height: "620px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#CC3340",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F5F5F5",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            RB
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#F5F5F5",
                fontSize: "26px",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              REAL BATTLE
            </span>
            <span
              style={{
                color: "#B3B3B3",
                fontSize: "12px",
                letterSpacing: "0.32em",
                marginTop: "4px",
              }}
            >
              COMPETITIVE ARENA
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#E5484D",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.3em",
            }}
          >
            FREE FIRE · INDIA
          </span>

          <span
            style={{
              color: "#F5F5F5",
              fontSize: "86px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              marginTop: "18px",
            }}
          >
            Game Khelo.
          </span>

          <span
            style={{
              color: "#E5484D",
              fontSize: "86px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
            }}
          >
            Battle Jeeto.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            color: "#B3B3B3",
            fontSize: "18px",
            borderTop: "1px solid #333333",
            paddingTop: "28px",
          }}
        >
          <span>Solo</span>
          <span style={{ color: "#555555" }}>·</span>
          <span>Squad</span>
          <span style={{ color: "#555555" }}>·</span>
          <span>Clash Squad 4v4</span>
          <span style={{ color: "#555555" }}>·</span>
          <span>Free-entry scrims</span>
          <span style={{ marginLeft: "auto", color: "#22C55E" }}>
            realbattle.in
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
};

export default OgImage;
