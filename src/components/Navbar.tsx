"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Artisanal Shop", href: "/shop" },
    { name: "Curing Materials", href: "/curing" },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="Ashok Enterprises Logo" className={styles.logoImage} />
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
              className={styles.menuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
