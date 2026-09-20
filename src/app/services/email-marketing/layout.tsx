import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Marketing Services | Campaigns & Marketing Automation",
  description:
    "Email marketing services including newsletters, lead nurturing, automation, customer retention campaigns, and performance optimization.",
  keywords: ["Email Marketing Services", "Marketing Automation", "Email Campaign Management", "Lead Nurturing"],
  alternates: { canonical: "/services/email-marketing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}