import { businessInfo, siteConfig } from "@/lib/site";

type SocialImageProps = {
  eyebrow: string;
  footer: string;
};

export function SocialImage({ eyebrow, footer }: SocialImageProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px",
        background:
          "radial-gradient(circle at top left, rgba(255,255,255,0.14), transparent 34%), linear-gradient(145deg, #303840, #1c2127)",
        color: "#f8fafc",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "78px",
              width: "78px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "22px",
              background: "linear-gradient(145deg, #fb923c, #ea580c)",
              color: "#ffffff",
              fontSize: "34px",
              fontWeight: 800,
              letterSpacing: "0.08em",
            }}
          >
            JR
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#fed7aa",
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              {siteConfig.name}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            padding: "14px 24px",
            fontSize: "22px",
            color: "#e2e8f0",
          }}
        >
          Free pickup within {businessInfo.pickupRadiusMiles} miles
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          maxWidth: "920px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-0.05em",
          }}
        >
          Repairing your ride, reviving your adventure.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "30px",
            lineHeight: 1.4,
            color: "#cbd5e1",
          }}
        >
          Service, repair, and upgrades for recreational and sport vehicles across
          Florence, Coolidge, and San Tan Valley.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          {["UTVs", "ATVs", "Golf carts", "PWCs"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "12px 20px",
                fontSize: "22px",
                color: "#f8fafc",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "6px",
            textAlign: "right",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#fdba74",
            }}
          >
            {footer}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            {businessInfo.phoneDisplay} • {businessInfo.email}
          </div>
        </div>
      </div>
    </div>
  );
}
