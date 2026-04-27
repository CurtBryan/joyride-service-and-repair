import { ImageResponse } from "next/og";

import { SocialImage } from "@/lib/social-image";

export const alt = "Joyride Sport Machines social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <SocialImage eyebrow="Local service shop" footer="Schedule local service" />,
    size,
  );
}
