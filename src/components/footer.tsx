import Link from "next/link";
import { MdMailOutline, MdPhone } from "react-icons/md";

import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer_top">
        <div className="identity">
          <Logo />
          <div className="bahai">The Bahá’í Faith</div>
          <address>
            <div className="email">
              <MdMailOutline /> nsabahaitt@gmail.com
            </div>
            <div className="phone">
              <MdPhone /> 1 (868) 625-5196
            </div>
            <div className="address">
              National Bahá’í Centre <br />
              3 Petra Street <br />
              Woodbrook <br />
              Port of Spain
            </div>
          </address>
        </div>
        <div className="footer-links">
          <div className="international">
            <a href="https://bahai.org" className="international_link">
              Bahai.org - The website of the worldwide Baha&apos;i community
            </a>
          </div>
          <div className="links">
            <Link href="/bicentenary" className="footer-link-main">
              bicentenary
            </Link>
            <Link href="/bahaullah" className="footer-link-main">
              Bahá’u’lláh
            </Link>
            <Link href="/community" className="footer-link-main">
              Community Building
            </Link>
            <Link href="/abdulbaha" className="footer-link-main">
              Abdu&apos;l-Baha
            </Link>
          </div>
          <div className="links_small">
            <Link href="/contact" className="footer-link-small">
              Contact
            </Link>
            <Link href="/legal" className="footer-link-small">
              Legal
            </Link>
            <Link href="/legal" className="footer-link-small">
              Privacy
            </Link>
          </div>
        </div>
      </section>
      <section className="faded">
        <div>© {new Date().getFullYear()} Bahá’ís of Trinidad and Tobago</div>
        <div>
          <a
            href="https://vincentramdhanie.com"
            className="vincent-logo"
            title="Vincent Ramdhanie"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/vincent-logo.png" alt="Vincent Ramdhanie" />
          </a>
        </div>
      </section>
    </footer>
  );
}
