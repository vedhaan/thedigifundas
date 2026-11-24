// Paste your Formspree endpoint URLs here. Each one looks like
// https://formspree.io/f/abcdwxyz and is created in the Formspree dashboard.
// These aren't secrets: they're visible in the browser's network requests anyway.
export const formEndpoints = {
  // application: "https://formspree.io/f/xyeegbae",
  // newsletter: "https://formspree.io/f/xgaawpbl",
  // contact: "https://formspree.io/f/xpppaoey",
  application: "https://formspree.io/f/xaeqrgaq",
  newsletter: "https://formspree.io/f/mljgqyab",
  contact: "https://formspree.io/f/myekrqlj",
} as const;

export type FormKey = keyof typeof formEndpoints;