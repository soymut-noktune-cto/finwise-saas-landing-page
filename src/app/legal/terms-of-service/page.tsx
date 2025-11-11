import type { Metadata } from "next";

import Container from "@/components/Container";
import { footerDetails } from "@/data/footer";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
    title: `Terms of Service | ${siteDetails.siteName}`,
    description: `Read the Terms of Service for ${siteDetails.siteName} to understand how we deliver and maintain our conscious finance solutions.`,
};

export default function TermsOfServicePage() {
    return (
        <Container className="py-20">
            <div className="max-w-3xl space-y-12">
                <header className="space-y-4">
                    <p className="text-sm uppercase tracking-wide text-foreground-accent">Legal</p>
                    <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
                    <p className="text-lg text-foreground-accent">
                        These Terms of Service (the &quot;Terms&quot;) govern your access to and use of {siteDetails.legalName} (&quot;{siteDetails.siteName}&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
                        products, applications, and services (collectively, the &quot;Services&quot;). By accessing or using the Services, you agree to these Terms.
                        If you do not agree, please discontinue use immediately.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">1. Eligibility & Account Registration</h2>
                    <p className="text-foreground-accent">
                        You must be at least 18 years old and have the legal authority to enter into these Terms. You are responsible for
                        maintaining accurate account information and safeguarding your login credentials. Any activity conducted through your
                        account is your responsibility. Please notify us immediately if you suspect unauthorized use.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">2. Use of the Services</h2>
                    <p className="text-foreground-accent">
                        We grant you a non-transferable, non-exclusive, revocable license to use the Services for lawful purposes in accordance
                        with these Terms. You agree not to copy, modify, reverse engineer, or resell any part of the Services. We reserve the
                        right to suspend or terminate access if we detect misuse, security risks, or violations of these Terms.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">3. Paid Features & Billing</h2>
                    <p className="text-foreground-accent">
                        Certain features may require payment. By providing payment information, you authorize us or our payment processors
                        (including Stripe) to process transactions in accordance with the plan selected. Fees are displayed before purchase and
                        are due immediately. Taxes may apply depending on your location and will be added where required by law.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">4. Intellectual Property</h2>
                    <p className="text-foreground-accent">
                        All content, trademarks, and technology made available through the Services are the property of {siteDetails.legalName} or
                        its licensors. You retain ownership of the information you upload, but grant us a limited license to use that content
                        solely for operating and improving the Services.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">5. Disclaimers & Limitation of Liability</h2>
                    <p className="text-foreground-accent">
                        The Services are provided “as is” without warranties of any kind. To the fullest extent permitted by law, we disclaim any
                        implied warranties and are not liable for indirect, incidental, or consequential damages. Our aggregate liability shall
                        not exceed the greater of USD $100 or the total fees paid to us in the twelve months preceding the claim.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">6. Changes & Termination</h2>
                    <p className="text-foreground-accent">
                        We may modify these Terms at any time. If changes materially affect your rights, we will provide notice through the
                        Services or via email. Continued use after the effective date of the updated Terms constitutes acceptance. You may
                        terminate your account at any time by contacting us; however, sections relating to intellectual property, disclaimers,
                        and liabilities will survive termination.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">7. Contact</h2>
                    <p className="text-foreground-accent">
                        Questions about these Terms? Reach out at{" "}
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

