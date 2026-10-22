import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Deventhous collects, uses, and protects the information you share with us through this website.",
  alternates: { canonical: "/privacy" },
};

// [LEGAL REVIEW] Have this reviewed against the Nigeria Data Protection Act 2023 before launch.
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy" updated="21 October 2026">
      <p>
        This policy explains what information {site.name}, a {site.parent} company, collects
        through this website and how we use it.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Information you send us</strong>: your name, email, WhatsApp number, company, and
          project details when you submit the brief form or message us.
        </li>
        <li>
          <strong>Usage data</strong>: anonymous analytics about pages visited and how the site
          performs. We do not use advertising trackers.
        </li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To reply to your enquiry and prepare a proposal</li>
        <li>To deliver and support the project if you become a client</li>
        <li>To understand and improve how the website performs</li>
      </ul>
      <p>We do not sell your information or share it with third parties for marketing.</p>
      <h2>Service providers</h2>
      <p>
        We use trusted providers to run this site and handle enquiries, including hosting (Vercel),
        email delivery (Resend), and data storage (Supabase). They process data on our behalf and
        only as needed to provide their service.
      </p>
      <h2>How long we keep it</h2>
      <p>
        Enquiries are kept for as long as needed to respond and follow up, and client records for as
        long as required by law or our contract with you.
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask us to see, correct, or delete the information we hold about you. Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond promptly.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
