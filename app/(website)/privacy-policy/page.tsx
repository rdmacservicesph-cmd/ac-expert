import { siteMetadata } from "@/app/metadata/siteMetadata";
import PrivacyPolicyClient from "./client";

export const metadata = siteMetadata.privacy


export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />;
}
