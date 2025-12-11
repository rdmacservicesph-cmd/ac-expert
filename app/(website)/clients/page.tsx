import { siteMetadata } from "@/app/metadata/siteMetadata";
import ClientsClient from "./client";
export const metadata = siteMetadata.clients

export default function Client() {
  return <ClientsClient />;
}
