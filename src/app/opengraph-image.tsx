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
          background: "#08080D",
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
              "radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(139,92,246,0) 70%)",
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
              "radial-gradient(circle, rgba(53,231,239,0.3) 0%, rgba(53,231,239,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #8B5CF6 0%, #35E7EF 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#08080D",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            RB
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#F7F5FF",
                fontSize: "26px",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              REAL BATTLE
            </span>
            <span
              style={{
                color: "#A6A3B5",
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
              color: "#35E7EF",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.3em",
            }}
          >
            FREE FIRE · INDIA
          </span>

          <span
            style={{
              color: "#F7F5FF",
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
              color: "#8B5CF6",
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
            color: "#A6A3B5",
            fontSize: "18px",
            borderTop: "1px solid rgba(247,245,255,0.12)",
            paddingTop: "28px",
          }}
        >
          <span>Solo</span>
          <span style={{ color: "#3a3745" }}>·</span>
          <span>Squad</span>
          <span style={{ color: "#3a3745" }}>·</span>
          <span>Clash Squad 4v4</span>
          <span style={{ color: "#3a3745" }}>·</span>
          <span>Free-entry scrims</span>
          <span style={{ marginLeft: "auto", color: "#FFC857" }}>
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
