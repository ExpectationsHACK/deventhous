import { renderOg, ogSize } from "@/lib/og";

export const alt = "Deventhous: Websites that get found, get trusted, and get paid.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ title: "Websites that get found, get trusted, and get paid." });
}
