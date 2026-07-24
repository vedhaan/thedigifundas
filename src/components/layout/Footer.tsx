import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Container from "@/components/ui/Container";
import { footerNavColumns, socialLinks, contactInfo } from "@/lib/constants/footer";

const socialIconMap = {
  instagram: faInstagram,
  linkedin: faLinkedin,
  facebook: faFacebook,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg-secondary">
      {/* ambient gradient wash — replaces flat bg-bg-secondary with actual depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-secondary" />
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-accent-primary/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/[0.06] blur-[120px]" />

      {/* diagonal line texture, single corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-72 w-72 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-accent-primary) 0px, var(--color-accent-primary) 1px, transparent 1px, transparent 14px)",
          maskImage: "radial-gradient(circle at 0% 0%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 0% 0%, black 0%, transparent 70%)",
        }}
      />

      {/* oversized wordmark — desktop/tablet only, hidden on mobile where it can't fit without clipping */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-4 -right-2 hidden max-w-full select-none overflow-hidden bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text font-heading font-bold leading-none text-transparent opacity-[0.08] sm:block"
        style={{ fontSize: "clamp(2.5rem, 12vw, 8rem)", whiteSpace: "nowrap" }}
      >
        THEDIGIFUNDAS
      </div>

      <Container className="relative z-10 !max-w-[1280px] 2xl:!max-w-[1600px] py-16 sm:py-20">
        <div className="grid gap-12 text-left lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand column */}
          <div>
            {/* Replace src with your actual logo path — same one used in Navbar.tsx */}
            <Image
              src="/icon.png"
              alt="The Digi Fundas"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 max-w-xs font-body text-sm text-text-secondary">
              Helping businesses build stronger brands, sharper marketing, and
              digital experiences designed for long-term growth.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-text-secondary">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 transition-colors hover:text-accent-primary">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 shrink-0 text-accent-primary" />
                {contactInfo.email}
              </a>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 transition-colors hover:text-accent-primary">
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4 shrink-0 text-accent-primary" />
                {contactInfo.phone}
              </a>
              <span className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4 shrink-0 text-accent-primary" />
                {contactInfo.address}
              </span>
            </div>

            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent-primary hover:text-accent-primary"
                >
                  <FontAwesomeIcon icon={socialIconMap[social.icon as keyof typeof socialIconMap]} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNavColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-primary">
                {col.heading}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-text-secondary transition-colors hover:text-accent-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar — now includes legal links */}
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-left sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-text-secondary">
            © {year} The Digi Fundas. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/terms" className="font-body text-xs text-text-secondary transition-colors hover:text-accent-primary">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="font-body text-xs text-text-secondary transition-colors hover:text-accent-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}