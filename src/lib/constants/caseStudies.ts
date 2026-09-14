// Case study content sourced from client-provided documents:
// "The Digi Fundas — Mishthi Art Case Study.docx" and
// "The Digi Fundas — Moon Glow Case Study.docx"
//
// IMPORTANT — per the source documents' own "Website Team Notes":
// - Use real Mishthi Art / Moon Glow creative & product visuals wherever
//   possible; avoid generic stock imagery once real assets are provided.
// - Do NOT publish confidential ad-account info, customer data, spend
//   limits, or screenshots containing sensitive information.
// - Review and approve all performance figures internally before publish.
// - Mishthi Art's stats include real numbers (17X, 4 Months). Moon Glow's
//   headline stats are qualitative outcomes only — the source document
//   does not provide numeric KPIs for Moon Glow. Do not invent numbers
//   for Moon Glow to make it visually match Mishthi Art.

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudyTransformationRow = {
  before: string;
  after: string;
};

export type CaseStudy = {
  slug: string;
  clientName: string;
  category: string; // e.g. "Jewellery Brand • Performance Marketing + Social Media Management"
  homepageTitle: string;
  homepageSummary: string;
  homepageTags: string[]; // short badges shown on the homepage card, e.g. "17X ROAS"
  detailHeroTitle: string;
  detailHeroSubtitle: string;
  detailHeroIntro: string;
  stats: CaseStudyStat[];
  overview: string;
  challenges: string[];
  objectives: string[];
  approach: { title: string; description: string }[];
  transformation: CaseStudyTransformationRow[];
  results: string[];
  // Optional — only Mishthi Art's source doc includes this section.
  performanceInsights?: {
    label: string;
    dataPoint: string;
    interpretation: string;
  }[];
  // Optional — only Moon Glow's source doc includes this section.
  businessImpact?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mishthi-art",
    clientName: "Mishthi Art",
    category: "Jewellery Brand • Performance Marketing + Social Media Management",
    homepageTitle: "Mishthi Art",
    homepageSummary:
      "From inconsistent orders to a more consistent daily sales engine through performance marketing, creative optimisation, and data-driven campaign strategy.",
    homepageTags: ["17X ROAS", "Consistent Daily Orders", "Stronger Social Engagement"],
    detailHeroTitle: "Turning Inconsistent Orders Into Consistent Growth.",
    detailHeroSubtitle: "Mishthi Art · Jewellery · Performance Marketing",
    detailHeroIntro:
      "A four-month performance marketing and social media engagement focused on improving campaign efficiency, creative diversity, and consistency of results.",
    stats: [
      { value: "17X", label: "Peak ROAS" },
      { value: "4 Months", label: "Performance Period" },
      { value: "Daily Orders", label: "More Consistent" },
      { value: "Social", label: "Stronger Engagement" },
    ],
    overview:
      "Mishthi Art is a jewellery brand that partnered with The Digi Fundas for performance marketing and social media management. The engagement focused on improving campaign efficiency, strengthening creative strategy, increasing social media engagement, and creating a more consistent flow of daily orders.",
    challenges: [
      "Inconsistent orders despite having a strong jewellery product range.",
      "Uneven campaign performance and difficulty maintaining predictable results.",
      "Limited creative and ad-format diversity affecting delivery and optimisation opportunities.",
      "Some ad sets were operating significantly above relevant industry cost benchmarks.",
      "A need to strengthen social media visibility and engagement alongside paid acquisition.",
    ],
    objectives: [
      "Create a more consistent flow of daily orders.",
      "Improve paid campaign efficiency and return on ad spend.",
      "Identify high-performing products, audiences, creatives, and campaigns.",
      "Strengthen the brand's social media presence and engagement.",
      "Build a more adaptable creative and campaign optimisation system.",
    ],
    approach: [
      {
        title: "Performance Marketing",
        description:
          "Campaign and ad-set performance was reviewed continuously to identify high-performing products, costly ad sets, ROAS opportunities, audience efficiency, and budget-allocation opportunities. Optimisation decisions were driven by performance data rather than assumptions.",
      },
      {
        title: "Creative & Format Strategy",
        description:
          "The account showed an opportunity to broaden creative diversity. We identified opportunities to use a wider mix of video, static, carousel, collection, and A/B-tested creative variations to give campaigns more options for delivery and conversion.",
      },
      {
        title: "Continuous Optimisation",
        description:
          "Performance insights were used to identify underperforming ad sets and opportunities for improvement. Budget, creative, audience, and optimisation choices were adjusted based on actual campaign behaviour.",
      },
    ],
    performanceInsights: [
      {
        label: "Retargeting",
        dataPoint: "₹486.61 cost per result",
        interpretation: "Identified as a top performer in the analysed period.",
      },
      {
        label: "Jewellery",
        dataPoint: "₹676.86 cost per result",
        interpretation: "20.43% above the referenced industry benchmark; flagged for optimisation.",
      },
      {
        label: "Jewellery",
        dataPoint: "126.72% above benchmark",
        interpretation: "Identified as a significant cost-efficiency gap.",
      },
      {
        label: "Creative format mix",
        dataPoint: "6.8% potential conversion uplift",
        interpretation: "Analysis indicated an opportunity from broader media-format diversification.",
      },
    ],
    transformation: [
      { before: "Inconsistent orders", after: "More consistent daily orders" },
      { before: "Limited creative diversity", after: "Broader creative mix" },
      { before: "Uneven campaign efficiency", after: "Continuous performance optimisation" },
      { before: "Unpredictable performance", after: "Up to 17X ROAS" },
    ],
    results: [
      "Achieved performance of up to 17X ROAS.",
      "Moved the account from inconsistent order flow toward more consistent daily orders.",
      "Strengthened social media engagement and overall digital presence.",
      "Created a more structured optimisation process across campaigns, creatives, audiences, and formats.",
    ],
  },
  {
    slug: "moon-glow-beauty-studio-academy",
    clientName: "Moon Glow Beauty Studio & Academy",
    category: "Salon & Beauty Academy • Google Business Profile + Social Media Marketing",
    homepageTitle: "Moon Glow Beauty Studio & Academy",
    homepageSummary:
      "From struggling to attract new clients to generating salon walk-ins and student enquiries through a stronger local presence, social media marketing, and Meta Ads.",
    homepageTags: ["New Client Walk-ins", "Google Profile Optimisation", "Academy Student Acquisition"],
    detailHeroTitle: "From Local Visibility To Real-World Growth.",
    detailHeroSubtitle: "Moon Glow Beauty Studio & Academy · Salon · Local Marketing + Meta Ads",
    detailHeroIntro:
      "Strengthening the salon's digital presence to attract new walk-ins while building a paid acquisition channel for the academy.",
    // No numeric KPIs in the source document — these are qualitative
    // outcome badges, not measured figures. Do not add fabricated numbers.
    stats: [
      { value: "New Walk-ins", label: "Acquired" },
      { value: "Google Profile", label: "Optimised" },
      { value: "Meta Ads", label: "Academy Leads" },
      { value: "Academy", label: "Student Acquisition" },
    ],
    overview:
      "Moon Glow Beauty Studio & Academy partnered with The Digi Fundas to strengthen its local digital presence and attract new customers. The engagement focused on optimising the brand's Google Business Profile, strengthening social media marketing, and using Meta Ads to support student acquisition for the academy.",
    challenges: [
      "New clients were not coming consistently to the salon.",
      "The business needed stronger local visibility and discoverability.",
      "The salon needed a more effective digital presence to attract potential customers.",
      "The academy also needed a reliable way to reach prospective students and generate interest.",
    ],
    objectives: [
      "Increase visibility among potential local salon customers.",
      "Improve the Google Business Profile so customers could discover and evaluate the business more effectively.",
      "Strengthen social media presence and engagement.",
      "Generate new salon walk-ins.",
      "Use paid advertising to attract prospective students for the academy.",
    ],
    approach: [
      {
        title: "Google Business Profile Optimisation",
        description:
          "We optimised the Google Business Profile to improve the business's local digital presence and make it easier for potential customers searching for salon and beauty services to discover and engage with Moon Glow Beauty Studio.",
      },
      {
        title: "Social Media Marketing",
        description:
          "We strengthened the salon's social media marketing to communicate its services, showcase the brand, build visibility, and create more opportunities for potential customers to connect with the business.",
      },
      {
        title: "Meta Ads For Academy",
        description:
          "For the academy, we used Meta Ads to reach relevant prospective students and generate interest in the training programs. This created a separate acquisition channel beyond the salon's walk-in business.",
      },
    ],
    transformation: [
      { before: "Low new-client flow", after: "New client walk-ins started" },
      { before: "Limited local digital visibility", after: "Google profile optimised" },
      { before: "Need for stronger social media presence", after: "Stronger social media marketing" },
      { before: "Academy needed student acquisition", after: "Students acquired through Meta Ads" },
    ],
    results: [
      "New client walk-ins started coming to the salon.",
      "The business developed a stronger and more structured local digital presence.",
      "The Google Business Profile was optimised to improve local discoverability.",
      "Meta Ads helped the academy reach prospective students and begin acquiring students through paid social campaigns.",
    ],
    businessImpact:
      "The engagement helped Moon Glow expand beyond relying on existing customers by creating two clear digital acquisition paths: local visibility and discovery for salon walk-ins, and paid social acquisition for the academy.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
