import type { Metadata } from "next";

import Container from "@/components/Container";
import { footerDetails } from "@/data/footer";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
    title: `Privacy Policy | ${siteDetails.siteName}`,
    description: `Understand how ${siteDetails.siteName} collects, uses, and safeguards your personal information.`,
};

export default function PrivacyPolicyPage() {
    return (
        <Container className="py-20">
            <div className="max-w-3xl space-y-12">
                <header className="space-y-4">
                    <p className="text-sm uppercase tracking-wide text-foreground-accent">Legal</p>
                    <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
                    <p className="text-lg text-foreground-accent">
                        This Privacy Policy explains how {siteDetails.legalName} (&quot;{siteDetails.siteName}&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects the
                        information you share with us. We adhere to industry best practices to respect your privacy and comply with relevant regulations,
                        including the GDPR and CCPA where applicable.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
                    <p className="text-foreground-accent">
                        We collect information that you provide directly, such as contact details, profile information, and communications sent
                        to our team. We also collect usage data, including device information, log data, cookies, and analytics metrics to
                        improve the Services and ensure security.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                    <p className="text-foreground-accent">
                        We process personal data to deliver and optimise the Services, respond to support requests, personalise experiences,
                        monitor platform integrity, and comply with legal obligations. We never sell your personal data to third parties. Any
                        communication we send will include an option to opt out.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">3. Sharing & Disclosure</h2>
                    <p className="text-foreground-accent">
                        We share data with trusted service providers (such as Stripe for payments and analytics vendors) under strict data
                        protection agreements. We may also disclose information if required by law, to enforce our agreements, or to protect the
                        rights and safety of our users.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">4. Data Retention</h2>
                    <p className="text-foreground-accent">
                        We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy, to comply
                        with legal obligations, or to resolve disputes. When information is no longer required, we securely delete or anonymise
                        it.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">5. Your Rights</h2>
                    <p className="text-foreground-accent">
                        Depending on your region, you may have rights to access, correct, delete, or restrict the processing of your personal
                        data. To exercise any of these rights, please contact us and we will respond within 30 days or the timeframe required by
                        applicable law.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">6. International Data Transfers</h2>
                    <p className="text-foreground-accent">
                        When transferring personal data across borders, we implement safeguards such as Standard Contractual Clauses approved by
                        the European Commission or rely on jurisdictions recognised as providing adequate data protection.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">7. Contact</h2>
                    <p className="text-foreground-accent">
                        For privacy-related questions or requests, contact us at{" "}
                        <a href={`mailto:${footerDetails.email}`} className="underline underline-offset-4">
                            {footerDetails.email}
                        </a>
                        . We will respond promptly and in accordance with applicable laws.
                    </p>
                </section>
            </div>
        </Container>
    );
}

