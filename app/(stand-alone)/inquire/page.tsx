import { siteMetadata } from "@/app/metadata/siteMetadata";
import InquireClient from "./client";

export const metadata = siteMetadata.inquiry

export default function Inquire() {
  return <InquireClient />;
}
