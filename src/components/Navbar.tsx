"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ANNOUNCEMENTS = [
    "🌱 100% Organic & Biodegradable Premium Jute",
    "🏗️ Heavy-Duty Concrete Curing Jute Sheets (Hessian Wraps)",
    "📞 Bulk Orders & Inquiries: +91 99686 48541"
  ];

  const [announcementIndex, setAnnouncementIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Artisanal Shop", href: "/shop" },
    { name: "Curing Materials", href: "/curing" },
  ];

  return (
    <>
      <header className={styles.header}>
        {/* Announcement Bar */}
        <div className={styles.announcementBar}>
          <div className={styles.announcementWrapper}>
            {ANNOUNCEMENTS.map((text, idx) => (
              <div
                key={idx}
                className={`${styles.announcementItem} ${
                  idx === announcementIndex ? styles.announcementActive : ""
                }`}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.navContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <img src="/brand_logo_final.png" alt="Ashok Enterprises Logo" className={styles.logoImage} />
            Ashok <span className={styles.logoTextSpan}>Enterprises</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.navLinks}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className={styles.actions}>
            <a href="tel:+919968648541" className={styles.ctaButton}>
              <Phone size={16} />
              <span className={styles.ctaText}>+91 99686 48541</span>
            </a>

            {/* Mobile Menu Icon */}
            <button
              className={`${styles.menuButton} ${isMobileMenuOpen ? styles.menuButtonActive : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
            >
              <div className={styles.menuIconContainer}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        <div
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""
            }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};

export default Navbar;
