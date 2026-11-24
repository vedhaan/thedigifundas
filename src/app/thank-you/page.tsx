import ThankYou from "@/components/sections/ThankYou";
import ThankYouGuard from "@/components/ui/ThankYouGuard";

export default function ThankYouPage() {
  return (
    <main>
      <ThankYouGuard>
        <ThankYou />
      </ThankYouGuard>
    </main>
  );
}