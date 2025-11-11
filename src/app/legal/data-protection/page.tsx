import type { Metadata } from "next";

import Container from "@/components/Container";
import { footerDetails } from "@/data/footer";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
    title: `Data Protection | ${siteDetails.siteName}`,
    description: `Learn how ${siteDetails.siteName} safeguards customer data through encryption, access controls, and secure infrastructure.`,
};

export default function DataProtectionPage() {
    return (
        <Container className="py-20">
            <div className="max-w-3xl space-y-12">
                <header className="space-y-4">
                    <p className="text-sm uppercase tracking-wide text-foreground-accent">Legal</p>
                    <h1 className="text-4xl font-bold text-foreground">Data Protection & Security</h1>
                    <p className="text-lg text-foreground-accent">
                        Protecting your data is core to our mission. This statement outlines the safeguards {siteDetails.legalName} (&quot;{siteDetails.siteName}&quot;) applies to
                        keep your information secure at every stage of its lifecycle.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">1. Encryption Standards</h2>
                    <p className="text-foreground-accent">
                        All data in transit between your device and our servers is protected with TLS 1.2+ encryption. Sensitive data at rest is
                        encrypted using AES-256 or stronger algorithms. Encryption keys are managed through hardened key management services with
                        strict access policies and regular key rotation.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">2. Access Controls</h2>
                    <p className="text-foreground-accent">
                        Access to production systems is restricted to a limited number of vetted team members, secured with multi-factor
                        authentication, and monitored continuously. Role-based access controls ensure that team members only access the data
                        required to perform their duties.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">3. Infrastructure & Monitoring</h2>
                    <p className="text-foreground-accent">
                        Our infrastructure is hosted with leading cloud providers that maintain industry certifications such as ISO 27001, SOC
                        2, and PCI DSS. We monitor for vulnerabilities, maintain an incident response plan, and regularly test our controls
                        through security reviews and penetration testing.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">4. Data Minimisation & Retention</h2>
                    <p className="text-foreground-accent">
                        We collect only the data needed to deliver the Services and retain it no longer than necessary. When data is no longer
                        required, we securely delete or anonymise it in accordance with our retention schedule.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">5. Incident Response</h2>
                    <p className="text-foreground-accent">
                        In the unlikely event of a data incident, we will notify affected users and regulators when required, detailing the
                        impact, mitigation steps, and remedies implemented. Our response process is regularly reviewed to ensure readiness.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">6. Contact</h2>
                    <p className="text-foreground-accent">
                        If you have questions about our security posture or require a copy of relevant compliance reports, please contact us at{" "}
                        <a href={`mailto:${footerDetails.email}`} className="underline underline-offset-4">
                            {footerDetails.email}
                        </a>
                        .
                    </p>
                </section>
            </div>
        </Container>
    );
}

