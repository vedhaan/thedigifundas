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
      {/* oversized clipped wordmark — bleeds off the edge, deliberately not centered/contained */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-6 select-none bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text font-heading text-[7rem] font-bold leading-none text-transparent opacity-[0.07] sm:text-[10rem] lg:-bottom-16 lg:text-[14rem]"
      >
        DIGIFUNDAS
      </div>

      {/* diagonal line texture, single corner, faded via mask so it doesn't read as a flat pattern */}
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

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 text-left lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          {/* Brand column */}
          <div>
            <span className="font-heading text-xl font-bold text-text-primary">
              The Digi <span className="text-accent-primary">Fundas</span>
            </span>
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

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-left sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="font-body text-xs text-text-secondary">
            © {year} The Digi Fundas. All rights reserved.
          </p>
          <p className="font-body text-xs text-text-secondary">
            Designed & built with intent.
          </p>
        </div>
      </Container>
    </footer>
  );
}