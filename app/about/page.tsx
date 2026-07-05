import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about-page-content";

export const metadata: Metadata = {
  title: "About | The Burger House",
  description: "Discover the story behind The Burger House, our culinary philosophy, and the crafting of our signature burgers.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
