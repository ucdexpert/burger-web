import type { Metadata } from "next";
import { GalleryPageContent } from "@/components/gallery-page-content";

export const metadata: Metadata = {
  title: "Gallery | The Burger House",
  description: "Browse a gallery of our signature burgers, atmosphere, and memorable moments.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
