import { ImageResponse } from "next/og";

import { BrandIcon, getBrandLogoDataUrl } from "@/lib/brand-icon";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default async function AppleIcon() {
  const logoDataUrl = await getBrandLogoDataUrl();

  return new ImageResponse(<BrandIcon logoDataUrl={logoDataUrl} innerPadding="10%" />, size);
}
