import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/blog/posts";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Section } from "@/components/ui/section";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog: Websites, SEO and Automation",
  description:
    "Plain guides for Nigerian and African businesses on website costs, getting customers from Google, and WhatsApp automation.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Blog", path: "/blog" }]}
        eyebrow="Blog"
        title="Notes on getting customers online."
        description="Plain guides on websites, search, and automation for businesses in Nigeria and across Africa."
      />
      <Section innerClassName="pt-4 md:pt-8 lg:pt-8">
        <ul className="border-t border-border">
          {posts.map((post) => (
            <li key={post.slug} data-reveal className="border-b border-border">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-2 py-8 md:grid-cols-[160px_1fr_auto] md:gap-8"
              >
                <time dateTime={post.date} className="font-mono text-label text-muted uppercase md:pt-1.5">
                  {formatDate(post.date)}
                </time>
                <span>
                  <span className="block text-h3 text-balance group-hover:underline group-hover:decoration-border-strong group-hover:underline-offset-4">
                    {post.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-muted">{post.description}</span>
                </span>
                <span aria-hidden className="hidden pt-1.5 text-muted transition-transform group-hover:translate-x-0.5 md:block">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
