"use client";

import React from "react";

const Icon = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const InstagramIcon = () => (
  <Icon>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </Icon>
);

const XIcon = () => (
  <Icon>
    <path d="M4 4l16 16M20 4L4 20" />
  </Icon>
);

const TelegramIcon = () => (
  <Icon>
    <path d="m3 3 3 9-3 9 19-9Z" />
    <path d="M6 12h16" />
  </Icon>
);

const LinkedinIcon = () => (
  <Icon>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);

const GithubIcon = () => (
  <Icon>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
);

const GoogleIcon = () => (
  <Icon>
    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12s3.36-7.27 7.19-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.19 2C6.42 2 2.03 6.8 2.03 12s4.39 10 10.16 10c5.5 0 9.87-3.86 9.87-9.57 0-1.15-.15-1.9-.15-1.9z" />
  </Icon>
);

const SiteFooter = () => {
  return (
    <footer id="main-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h1 className="f-logo">AKSAD</h1>
          <p className="f-desc">
            I build more than digital design. <br />
            I build systems that think.
          </p>
          <div className="f-socials">
            
              href="https://www.instagram.com/aksad.dev.io/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            
              href="https://g.dev/Aksadio"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Developer Profile"
            >
              <GoogleIcon />
            </a>
            
              href="https://t.me/Aksad_dev_io"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <TelegramIcon />
            </a>
            
              href="https://www.linkedin.com/in/shahariar-azim-aksad-69aaaa3b8/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            
              href="https://github.com/Aksadio"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="f-col">
            <h3>EXPLORE</h3>
            <a href="#projects-section">Projects</a>
            <a href="#contact-section">Get in touch</a>
          </div>
          <div className="f-col">
            <h3>CONTACT</h3>
            <a href="mailto:aksad.dev.io@gmail.com">
              aksad.dev.io@gmail.com
            </a>
            
              href="https://wa.me/8801616880684"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: 8801616880684
            </a>
            <a href="tel:+8801616880684">Phone: 8801616880684</a>
          </div>
          <div className="f-col">
            <h3>PROFILES</h3>
            <a href="https://www.kaggle.com/shahariarazimaksad" target="_blank" rel="noreferrer">
              Kaggle
            </a>
            <a href="https://g.dev/Aksadio" target="_blank" rel="noreferrer">
              Google Developer Profile
            </a>
            <a href="https://www.credential.net/profile/shahariarazimaksad43941/wallet" target="_blank" rel="noreferrer">
              Credentials
            </a>
            <a href="https://pin.it/56l2K4VMC" target="_blank" rel="noreferrer">
              Pinterest
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aksad. All rights reserved.</p>
        <p>created by aksad.dev</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
