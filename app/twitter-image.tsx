import { ImageResponse } from "next/og";

import { SocialImage } from "@/lib/social-image";

export const alt = "Joyride Sport Machines social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <SocialImage eyebrow="Recreational vehicle repair" footer="Florence • Coolidge • San Tan Valley" />,
    size,
  );
}
