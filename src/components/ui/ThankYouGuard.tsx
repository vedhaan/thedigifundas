"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Only shows the confirmation after a real submission in this browser session.
// Direct visits are sent to the contact page instead.
export default function ThankYouGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    let submitted = true; // if storage is blocked, don't lock the visitor out
    try {
      submitted = sessionStorage.getItem("enquiry-submitted") === "1";
    } catch {}

    if (submitted) {
      setAllowed(true);
    } else {
      router.replace("/contact");
    }
  }, [router]);

  return allowed ? <>{children}</> : null;
}