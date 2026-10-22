import { getPackage, packages } from "@/content/packages";
import { renderOg, ogSize } from "@/lib/og";

export const alt = "Deventhous website package";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  return renderOg({ eyebrow: pkg ? `Package ${pkg.number}` : "Packages", title: pkg?.name ?? "Website packages" });
}
