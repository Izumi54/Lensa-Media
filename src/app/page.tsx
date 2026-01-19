import { HeroSection } from "@/presentation/components/features/HeroSection";
import { MagazineSection } from "@/presentation/components/features/MagazineSection";
import { OrganizationSection } from "@/presentation/components/features/OrganizationSection";
// import { GallerySection } from "@/presentation/components/features/GallerySection";
import { PartnershipSection } from "@/presentation/components/features/PartnershipSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MagazineSection />
      <OrganizationSection />
      {/* <GallerySection /> */}
      <PartnershipSection />
    </main>
  );
}
