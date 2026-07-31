import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | The Digi Fundas",
  description:
    "Social media marketing agency helping businesses build brand presence, drive engagement, and grow through strategic content, management, and Instagram marketing services.",
  keywords: [
    "Social Media Marketing Services",
    "Social Media Marketing Agency",
    "Social Media Management Services",
    "Instagram Marketing Agency",
    "Social Media Marketing Company",
    "Social Media Strategy Services",
    "Content Creation Services",
    "Social Media Marketing For Small Businesses",
  ],
};

export default function SocialMediaMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}