import { siteMetadata } from "@/app/metadata/siteMetadata";
import AboutUsClient from "./client";

export const metadata = siteMetadata.about

export default function page() {
  return <AboutUsClient />;
}
