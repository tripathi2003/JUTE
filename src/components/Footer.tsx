"use client";

import React from "react";
import Link from "next/link";
import { Leaf } from "lucide-react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Col */}
          <div className={styles.col}>
            <Link href="/" className={styles.brand}>
              <img src="/logo.png" alt="Ashok Enterprises Logo" className={styles.brandLogoImage} />
              Ashok<span className={styles.brandSpan}>Enterprises</span>
            </Link>
            <p className={styles.description}>
              Empowering sustainable living with premium, carbon-negative jute fibers and hand-crafted goods. Sourced responsibly, designed for modern elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.title}>Explore</h3>
            <ul className={styles.links}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className={styles.link}>
                  Artisanal Shop
                </Link>
              </li>
              <li>
                <Link href="/curing" className={styles.link}>
                  Curing Materials
                </Link>
              </li>
              <li>
                <a href="tel:+919968648541" className={styles.link}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Location Col */}
          <div className={styles.col}>
            <h3 className={styles.title}>Locate Us</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.6384383537816!2d77.25213111137451!3d28.691652081291405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3002e650a9%3A0xd3d3be2377573586!2zQXNob3JlIEVudGVycHJpc2VzIGp1dGUgJiBCYWcgKOCkrOCli-CksOClhyDgpLXgpL7gpLLgpL4p!5e1!3m2!1sen!2sin!4v1781465655771!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "var(--radius-sm)", width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ashok Enterprises Location"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <div className={styles.socials}>
            <a href="https://github.com/tripathi2003" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// reload ts watcher
