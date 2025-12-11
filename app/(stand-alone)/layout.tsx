import React from "react";
import Footer from "../(website)/components/Footer";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    {children}
    <Footer />

  </>;
}
