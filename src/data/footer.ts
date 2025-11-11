import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    legalLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering businesses with cutting-edge financial technology solutions.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "Testimonials",
            url: "#testimonials"
        }
    ],
    legalLinks: [
        {
            text: "Terms of Service",
            url: "/legal/terms-of-service"
        },
        {
            text: "Privacy Policy",
            url: "/legal/privacy-policy"
        },
        {
            text: "Refund Policy",
            url: "/legal/refund-policy"
        },
        {
            text: "Data Protection",
            url: "/legal/data-protection"
        }
    ],
    email: 'info@soymut.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        x: 'https://x.com/Soymutbilinc',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        // linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/soymutbilinc/',
    }
}