"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Artisanal Shop", href: "/shop" },
    { name: "Jute Curing", href: "/curing" },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>
              <Leaf size={24} fill="currentColor" />
            </span>
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
// reload ts watcher
