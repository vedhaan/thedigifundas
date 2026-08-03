import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Marketing Services | Blog & SEO Content Agency | The Digi Fundas",
  description:
    "Strategic content marketing services to build authority and drive growth. The Digi Fundas creates SEO content, blog writing, lead magnets, and content distribution strategies designed to improve visibility and generate qualified traffic.",
  keywords: [
    "Content Marketing Services",
    "Content Marketing Agency",
    "SEO Content Writing",
    "Blog Writing Services",
    "Content Strategy Agency",
    "Lead Magnet Creation",
    "Content Distribution Services",
    "Content Marketing Expert",
  ],
  openGraph: {
    title: "Content Marketing Services | The Digi Fundas",
    description:
      "Strategic content marketing designed to build authority and drive growth — content strategy, SEO content, blog writing, and distribution.",
    url: "https://thedigifundas.vercel.app/services/content-marketing",
    siteName: "The Digi Fundas",
    type: "website",
  },
  alternates: {
    canonical: "https://thedigifundas.vercel.app/services/content-marketing",
  },
};

export default function ContentMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}