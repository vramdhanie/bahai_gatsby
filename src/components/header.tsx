import Link from "next/link";

import Logo from "./logo";

const SITE_TITLE = "Bahá’ís of Trinidad and Tobago";

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <Link href="/" className="siteNameLink">
          <Logo />
        </Link>
        <h1 className="siteName">
          <Link href="/" className="siteNameLink">
            {SITE_TITLE}
          </Link>
        </h1>
      </div>
    </header>
  );
}
