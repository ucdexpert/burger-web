import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact-page-content";

export const metadata: Metadata = {
  title: "Contact | The Burger House",
  description: "Get in touch with The Burger House for reservations, catering, or private events.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
