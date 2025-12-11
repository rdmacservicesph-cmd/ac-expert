import { siteMetadata } from "../metadata/siteMetadata";
import HomeClient from "./home-page-client";

export const metadata = siteMetadata.home

export default function HomePage() {
  return <HomeClient />;
}
