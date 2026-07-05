import type { Metadata } from "next";
import { TestimonialsPageContent } from "@/components/testimonials-page-content";

export const metadata: Metadata = {
  title: "Testimonials | The Burger House",
  description: "Read testimonials from guests who love the premium burgers and atmosphere at The Burger House.",
};

export default function TestimonialsPage() {
  return <TestimonialsPageContent />;
}
