export type Collaboration = {
  name: string;
  src: string;
  // Optional visual nudge for a logo that still looks small after trimming.
  // 1 is normal, 1.2 is 20% larger. Keep it at or below about 1.3.
  scale?: number;
};

export const collaborations: Collaboration[] = [
  { name: "Filliate", src: "/client-trimmed/filiate-logo_240x.png" },
  { name: "Haus of Hetal", src: "/client-trimmed/Haus_of_hetal.png" },
  { name: "Housetalk Designs", src: "/client-trimmed/housetalk_designs.png" },
  { name: "iblossom", src: "/client-trimmed/iblossom2.png" },
  { name: "Koncept Kart", src: "/client-trimmed/Koncept.png" },
  { name: "Koncept Print", src: "/client-trimmed/Koncept_Print.png" },
  { name: "Mishthi Art", src: "/client-trimmed/Mishthi_Art_Logo.png" },
  { name: "Moon Glow", src: "/client-trimmed/Moon_Logo.png" },
  { name: "Jewels", src: "/client-trimmed/jewels_haus.png" },
  { name: "Jyoti Printerey", src: "/client-trimmed/jyoti_printerey.png" },
  { name: "Jyoti Printerey", src: "/client-trimmed/Demilumi.png" },
  { name: "Lofy Salon", src: "/client-trimmed/Lofy-Salon.png" },
];