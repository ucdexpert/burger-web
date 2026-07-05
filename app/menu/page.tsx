import type { Metadata } from "next";
import { MenuPageContent } from "@/components/menu-page-content";

export const metadata: Metadata = {
  title: "Full Menu | The Burger House",
  description: "Browse the full gourmet burger menu with premium ingredients and chef-crafted favorites.",
};

export default function MenuPage() {
  return <MenuPageContent />;
}
