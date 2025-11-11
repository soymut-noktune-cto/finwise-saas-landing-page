import Link from "next/link";
import type { Metadata } from "next";

import Container from "@/components/Container";
import { footerDetails } from "@/data/footer";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
    title: `Legal Center | ${siteDetails.siteName}`,
    description: `Access legal documentation for ${siteDetails.siteName}, including Terms of Service, Privacy Policy, Refund Policy, and Data Protection statement.`,
};

export default function LegalCenterPage() {
    return (
        <Container className="py-20">
            <div className="max-w-3xl space-y-10">
                <header className="space-y-4">
                    <p className="text-sm uppercase tracking-wide text-foreground-accent">Legal</p>
                    <h1 className="text-4xl font-bold text-foreground">Legal Center</h1>
                    <p className="text-lg text-foreground-accent">
                        Transparency builds trust. Explore the policies that govern how {siteDetails.legalName} (&quot;{siteDetails.siteName}&quot;) delivers conscious
                        finance experiences, protects your privacy, and keeps your data safe.
                    </p>
                </header>

                <ul className="space-y-6">
                    {footerDetails.legalLinks.map(link => (
                        <li key={link.text} className="border border-foreground/10 rounded-lg p-6 hover:border-foreground/30 transition">
                            <Link href={link.url} className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-semibold text-foreground">{link.text}</h2>
                                    <p className="mt-2 text-foreground-accent">
                                        {getPageDescription(link.text)}
                                    </p>
                                </div>
                                <span className="text-sm font-medium text-foreground underline underline-offset-4">Read</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}

function getPageDescription(title: string): string {
    switch (title) {
        case "Terms of Service":
            return "Understand the rules for using our applications and services.";
        case "Privacy Policy":
            return "Learn how we collect, process, and protect your personal information.";
        case "Refund Policy":
            return "Review the guidelines for cancellations, credits, and refunds.";
        case "Data Protection":
            return "See the controls we use to secure data throughout its lifecycle.";
        default:
            return "Access the official policy for more details.";
    }
}

