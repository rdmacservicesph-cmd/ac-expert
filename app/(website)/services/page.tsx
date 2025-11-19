import { siteMetadata } from "@/app/metadata/siteMetadata";
import ServicesClient from "./client";

export const metadata = siteMetadata.services


export default function Services() {
  return <ServicesClient />;
}
