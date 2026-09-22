import type { Metadata } from "next";
import Script from "next/script";

import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Title from "@/components/title";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Bahá’ís of Trinidad and Tobago — send a message or reach the National Bahá’í Centre in Port of Spain.",
};

export default function ContactPage() {
  return (
    <>
      <Hero img="/images/arc_01.jpg">
        <Banner title="Contact Us" blurb="" />
      </Hero>
      <Main>
        <section className="contact-form">
          <Title title="Email" subtitle="Us" />
          <div className="center">
            <div
              style={{ width: "100%", height: "500px" }}
              data-fillout-id="7eVU9vkaA3us"
              data-fillout-embed-type="standard"
              data-fillout-inherit-parameters
              data-fillout-dynamic-resize
            ></div>
            <Script src="https://server.fillout.com/embed/v1/" />
          </div>
        </section>
      </Main>
    </>
  );
}
