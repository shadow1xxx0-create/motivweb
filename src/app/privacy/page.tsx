import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Ilham",
  description: "Privacy policy for the Ilham app.",
  alternates: { canonical: "https://privacy.getilham.com" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px", color: "#fff" }}>
        {title}
      </h2>
      <div style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "15px" }}>
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "20px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontSize: "22px", fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "0.02em" }}>
            Ilham
          </Link>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>Privacy Policy</span>
        </div>
      </header>

      <main style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px 100px" }}>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 700, marginBottom: "12px", lineHeight: 1.2 }}>
          Privacy Policy
        </h1>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", marginBottom: "48px" }}>
          Last updated: March 2026
        </p>

        <Section title="Overview">
          Ilham (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the app&rdquo;) is committed to protecting your privacy.
          This policy explains what information we collect, how we use it, and your rights regarding your data.
        </Section>

        <Section title="Information We Collect">
          <p style={{ margin: "0 0 12px" }}>
            <strong style={{ color: "#fff" }}>We do not collect any personally identifiable information.</strong> The
            Ilham app does not require you to create an account or provide your name, email address, or any other
            personal details.
          </p>
          <p style={{ margin: 0 }}>
            We may collect anonymous, aggregated usage data (such as which features are used most) through
            third-party analytics tools to help us improve the app. This data cannot be used to identify you personally.
          </p>
        </Section>

        <Section title="Data Storage">
          All your preferences (such as notification times and favourite quotes) are stored locally on your device.
          We do not transmit or store this data on any external server.
        </Section>

        <Section title="Third-Party Services">
          <p style={{ margin: "0 0 12px" }}>
            The app may use the following third-party services, each governed by their own privacy policies:
          </p>
          <ul style={{ paddingLeft: "20px", lineHeight: 2, margin: 0 }}>
            <li>Google Play Services</li>
            <li>Firebase Analytics (anonymous usage statistics only)</li>
          </ul>
        </Section>

        <Section title="Notifications">
          If you enable daily reminders, the app will send local push notifications at your chosen time.
          This is handled entirely on your device — we do not collect or store your notification preferences on any server.
        </Section>

        <Section title="Children's Privacy">
          Ilham does not knowingly collect any information from children under the age of 13. The app contains
          no user-generated content and no social features.
        </Section>

        <Section title="Changes to This Policy">
          We may update this privacy policy from time to time. Any changes will be reflected on this page with
          an updated date. Continued use of the app after any changes constitutes your acceptance of the new policy.
        </Section>

        <Section title="Contact">
          If you have any questions about this privacy policy, please contact us at:{" "}
          <a href="mailto:support@getilham.com" style={{ color: "#00FF87", textDecoration: "none" }}>
            support@getilham.com
          </a>
        </Section>
      </main>
    </div>
  );
}
