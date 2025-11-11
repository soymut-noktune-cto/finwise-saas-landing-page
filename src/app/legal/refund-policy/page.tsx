import type { Metadata } from "next";

import Container from "@/components/Container";
import { footerDetails } from "@/data/footer";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
    title: `Refund Policy | ${siteDetails.siteName}`,
    description: `Review the refund policy for ${siteDetails.siteName} subscriptions and purchases.`,
};

export default function RefundPolicyPage() {
    return (
        <Container className="py-20">
            <div className="max-w-3xl space-y-12">
                <header className="space-y-4">
                    <p className="text-sm uppercase tracking-wide text-foreground-accent">Legal</p>
                    <h1 className="text-4xl font-bold text-foreground">Refund Policy</h1>
                    <p className="text-lg text-foreground-accent">
                        We value transparency and fairness in every transaction. This Refund Policy explains how refunds are handled for
                        purchases made through {siteDetails.legalName} (&quot;{siteDetails.siteName}&quot;).
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">1. Subscription-Based Services</h2>
                    <p className="text-foreground-accent">
                        Subscription charges are billed in advance and are non-refundable for the billing period in which they are charged.
                        You may cancel at any time, and your access will continue until the end of the current billing cycle. We encourage you
                        to explore available trial periods before committing to a paid subscription.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">2. Exceptional Circumstances</h2>
                    <p className="text-foreground-accent">
                        If you believe a charge was made in error or you experienced service disruptions that prevented you from using the
                        platform, please contact us within 14 days of the billing date. We will review requests case-by-case and may offer a
                        prorated credit or refund at our discretion.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">3. Third-Party Marketplaces</h2>
                    <p className="text-foreground-accent">
                        Purchases completed through third-party marketplaces (such as Apple App Store or Google Play) are subject to the refund
                        terms of those platforms. Please contact the marketplace directly to request a refund in accordance with their
                        policies.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">4. How to Request a Refund</h2>
                    <p className="text-foreground-accent">
                        Email our support team with your account information, transaction details, and a brief description of the issue. We aim
                        to respond within two business days. All approved refunds will be processed back to the original payment method.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">5. Contact</h2>
                    <p className="text-foreground-accent">
                        Reach out to our support team at{" "}
                        <a href={`mailto:${footerDetails.email}`} className="underline underline-offset-4">
                            {footerDetails.email}
                        </a>{" "}
                        with any refund-related questions.
                    </p>
                </section>
            </div>
        </Container>
    );
}

