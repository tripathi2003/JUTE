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
              <img src="/brand_logo_final.png" alt="Ashok Enterprises Logo" className={styles.brandLogoImage} />
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

          {/* Payment Methods */}
          <div className={styles.paymentMethods}>
            <span className={styles.paymentLabel}>We Accept</span>
            <div className={styles.paymentIcons}>
              {/* Visa */}
              <div className={styles.paymentIcon} title="Visa">
                <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="32" rx="4" fill="#fff" stroke="#e0e0e0" strokeWidth="1"/>
                  <path d="M19.5 21h-3.2l2-12.5h3.2L19.5 21z" fill="#00579F"/>
                  <path d="M31.2 8.8c-.6-.3-1.6-.5-2.8-.5-3.1 0-5.3 1.6-5.3 4 0 1.7 1.6 2.7 2.8 3.3 1.2.6 1.6 1 1.6 1.5 0 .8-1 1.2-1.9 1.2-1.2 0-1.9-.2-2.9-.6l-.4-.2-.4 2.6c.7.3 2.1.6 3.5.6 3.3 0 5.4-1.6 5.4-4.1 0-1.4-.8-2.4-2.7-3.3-1.1-.6-1.8-.9-1.8-1.5 0-.5.6-1 1.8-1 1 0 1.8.2 2.4.5l.3.1.4-2.6z" fill="#00579F"/>
                  <path d="M35.7 8.5h-2.4c-.7 0-1.3.2-1.6 1L27.5 21h3.3l.7-1.8h4l.4 1.8H39L35.7 8.5zm-3.5 8.2l1.7-4.5.4 4.5h-2.1z" fill="#00579F"/>
                  <path d="M14.6 8.5L11.5 17l-.3-1.7c-.6-1.9-2.4-4-4.5-5l2.8 10.7h3.3l5-12.5h-3.2z" fill="#00579F"/>
                  <path d="M9.2 8.5H4.1l-.1.3c3.9 1 6.5 3.4 7.6 6.2l-1.1-5.5c-.2-.8-.7-1-1.3-1z" fill="#FAA61A"/>
                </svg>
              </div>
              {/* Mastercard */}
              <div className={styles.paymentIcon} title="Mastercard">
                <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="32" rx="4" fill="#fff" stroke="#e0e0e0" strokeWidth="1"/>
                  <circle cx="19" cy="16" r="8" fill="#EB001B"/>
                  <circle cx="29" cy="16" r="8" fill="#F79E1B"/>
                  <path d="M24 10.3a8 8 0 0 1 0 11.4 8 8 0 0 1 0-11.4z" fill="#FF5F00"/>
                </svg>
              </div>
              {/* UPI */}
              <div className={styles.paymentIcon} title="UPI">
                <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="32" rx="4" fill="#fff" stroke="#e0e0e0" strokeWidth="1"/>
                  <text x="24" y="19" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="11" fill="#4CAF50">UPI</text>
                </svg>
              </div>
              {/* RuPay */}
              <div className={styles.paymentIcon} title="RuPay">
                <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="32" rx="4" fill="#fff" stroke="#e0e0e0" strokeWidth="1"/>
                  <text x="24" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="8" fill="#097252">RuPay</text>
                </svg>
              </div>
              {/* Google Pay */}
              <div className={styles.paymentIcon} title="Google Pay">
                <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="32" rx="4" fill="#fff" stroke="#e0e0e0" strokeWidth="1"/>
                  <text x="24" y="14" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="6" fill="#5f6368">Google</text>
                  <text x="24" y="23" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="7" fill="#4285F4">Pay</text>
                </svg>
              </div>
              {/* Paytm */}
              <div className={styles.paymentIcon} title="Paytm">
                <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="32" rx="4" fill="#fff" stroke="#e0e0e0" strokeWidth="1"/>
                  <text x="24" y="19" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="9" fill="#00BAF2">Paytm</text>
                </svg>
              </div>
              {/* PhonePe */}
              <div className={styles.paymentIcon} title="PhonePe">
                <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="32" rx="4" fill="#fff" stroke="#e0e0e0" strokeWidth="1"/>
                  <text x="24" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="7" fill="#5F259F">PhonePe</text>
                </svg>
              </div>
              {/* Cash on Delivery */}
              <div className={styles.paymentIcon} title="Cash on Delivery">
                <svg viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="32" rx="4" fill="#fff" stroke="#e0e0e0" strokeWidth="1"/>
                  <text x="24" y="15" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="7" fill="#2E5A27">COD</text>
                  <text x="24" y="23" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fill="#666">Cash</text>
                </svg>
              </div>
            </div>
          </div>

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
