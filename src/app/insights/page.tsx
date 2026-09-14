import InsightsHero from "@/components/sections/InsightsHero";
import FeaturedInsights from "@/components/sections/FeaturedInsights";
import BlogCategories from "@/components/sections/BlogCategories";
import FeaturedResources from "@/components/sections/FeaturedResources";
import NewsletterSection from "@/components/sections/NewsletterSection";
import InsightsFinalCta from "@/components/sections/InsightsFinalCta";

export default function InsightsPage() {
  return (
    <main>
      <InsightsHero />
      <FeaturedInsights />
      <BlogCategories />
      <FeaturedResources />
      <NewsletterSection />
      <InsightsFinalCta />
    </main>
  );
}