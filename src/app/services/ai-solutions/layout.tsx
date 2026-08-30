import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions & Automation Services | Business Process Automation | The Digi Fundas",
  description:
    "AI-powered automation services for growing businesses. The Digi Fundas helps automate marketing, customer support, and operational workflows through practical AI solutions built for measurable efficiency gains.",
  keywords: [
    "AI Solutions For Businesses",
    "AI Automation Services",
    "Marketing Automation Services",
    "Business Process Automation",
    "AI Consulting Services",
    "Workflow Automation Solutions",
    "AI Business Solutions",
    "Artificial Intelligence Services",
  ],
  openGraph: {
    title: "AI Solutions & Automation Services | The Digi Fundas",
    description:
      "AI-powered solutions designed to improve efficiency and accelerate business growth through workflow automation, marketing automation, and AI-driven customer support.",
    url: "https://thedigifundas.vercel.app/services/ai-solutions",
    siteName: "The Digi Fundas",
    type: "website",
  },
  alternates: {
    canonical: "https://thedigifundas.vercel.app/services/ai-solutions",
  },
};

export default function AiSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}