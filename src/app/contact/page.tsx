import type { Metadata } from "next";

import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Title from "@/components/title";

export const metadata: Metadata = {
  title: "Contact",
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
            <form
              className="form"
              action="https://formspree.io/f/nsabahaitt@gmail.com"
              method="POST"
            >
              <div>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="formControl"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="formControl"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={10}
                  className="formControl"
                  placeholder="Hi!"
                />
              </div>
              <div>
                <input type="submit" value="Send" className="submit" />
              </div>
            </form>
          </div>
        </section>
      </Main>
    </>
  );
}
