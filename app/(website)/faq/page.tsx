import { siteMetadata } from "@/app/metadata/siteMetadata";
import FAQClient from "./client";

export const metadata = siteMetadata.faq
export default function FAQ() {

  return (
    <FAQClient />
  );
}
