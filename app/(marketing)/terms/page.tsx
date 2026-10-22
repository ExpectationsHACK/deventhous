import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { excludedFromAll } from "@/content/packages";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Payment terms, revisions, scope, ownership, and other terms that apply when you work with Deventhous.",
  alternates: { canonical: "/terms" },
};

// [LEGAL REVIEW] Have these terms reviewed by a lawyer before launch.
export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" path="/terms" updated="21 October 2026">
      <p>
        These terms apply to your use of this website and to projects you start with {site.name}, a{" "}
        {site.parent} company. Each project also has its own written scope document, which takes
        priority where the two differ.
      </p>

      <h2>Quotes and scope</h2>
      <p>
        Package prices on this site are ranges. Your exact price is set in a written quote after a brief.
        Every project gets a written scope document listing exactly what is included. Anything not listed
        is a change request with its own quote, agreed before we start it.
      </p>

      <h2>Payment</h2>
      <ul>
        <li>50% deposit to start the project</li>
        <li>30% on design approval</li>
        <li>20% before handover</li>
      </ul>
      <p>
        Projects above ₦2,000,000 are split into 4 milestones. Admin access and source code are handed
        over after the final payment. Monthly maintenance and retainers are billed in advance.
      </p>

      <h2>Revisions</h2>
      <p>
        Each phase (design and development) includes 2 rounds of revisions. Extra rounds are billed at our
        hourly rate.
      </p>

      <h2>Content</h2>
      <p>
        You supply text, images, and product data unless copywriting or data entry is part of your
        quote. You confirm you have the right to use any material you send us.
      </p>

      <h2>Delays</h2>
      <p>
        If we have not received content or feedback within 7 days of requesting it, the timeline pauses.
        If the pause lasts more than 30 days, the project is billed for work done to date.
      </p>

      <h2>Ownership</h2>
      <p>
        You own the final deliverables after full payment. We keep the right to show the work in our
        portfolio.
      </p>

      <h2>Third-party costs</h2>
      <p>
        The following are not included in any package and are paid by you directly to the provider:{" "}
        {excludedFromAll.join(", ")}. For AI services, usage is billed by the AI provider,
        and WhatsApp Business messaging fees are set by Meta.
      </p>

      <h2>Liability</h2>
      <p>
        We build and test carefully, but we cannot guarantee search rankings, sales, or uninterrupted
        third-party services. Our total liability is limited to the amount you paid for the project.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
