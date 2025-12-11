import { siteMetadata } from "@/app/metadata/siteMetadata";
import ContactClient from "./client";

export const metadata = siteMetadata.contact

export default function Contact() {
  return <ContactClient />;
}
