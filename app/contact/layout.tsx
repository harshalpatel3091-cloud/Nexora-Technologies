import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Nexora Technologies",
  description: "Contact Nexora Technologies regarding web development, software development, automation, AI, or related services.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
