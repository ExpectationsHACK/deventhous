import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/content/blog/posts";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/ui/json-ld";
import { LinkArrow } from "@/components/ui/link-arrow";
import { Section } from "@/components/ui/section";
import { site } from "@/lib/site";
import { absoluteUrl, formatDate } from "@/lib/utils";

// Every valid slug is prerendered below; only unknown slugs (404s) render on demand.
export const instant = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { default: Body } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
        title={post.title}
        description={post.description}
      >
        <p className="mt-6 font-mono text-label text-muted uppercase">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime} · {site.name}
        </p>
      </PageHero>
      <Section innerClassName="pt-12 md:pt-16 lg:pt-16">
        <article className="prose mx-auto max-w-2xl">
          <Body />
        </article>
        <aside className="mx-auto mt-16 max-w-2xl rounded-lg border border-border p-6">
          <h2 className="font-mono text-label text-muted uppercase">Related</h2>
          <ul className="mt-4 space-y-2">
            {post.related.map((r) => (
              <li key={r.href}>
                <LinkArrow href={r.href}>{r.label}</LinkArrow>
              </li>
            ))}
          </ul>
        </aside>
      </Section>
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          url: absoluteUrl(`/blog/${post.slug}`),
          author: { "@id": absoluteUrl("/#organization") },
          publisher: { "@id": absoluteUrl("/#organization") },
        }}
      />
    </>
  );
}
