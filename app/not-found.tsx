import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-4 py-32 text-center md:px-6 lg:border-x lg:border-border">
        <p className="font-mono text-label text-muted uppercase">404</p>
        <h1 className="mt-4 text-h1">This page doesn&apos;t exist.</h1>
        <p className="mt-4 max-w-md text-body-lg text-muted">It may have moved, or the link may be wrong.</p>
        <div className="mt-8 flex gap-3">
          <ButtonLink href="/">Go home</ButtonLink>
          <ButtonLink href="/packages" variant="secondary">
            View packages
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
