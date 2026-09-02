"use client";

import React from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const SocialGif = ({ src, alt }) => (
  <img
    src={`${BASE_PATH}/${src}`}
    alt={alt}
    className="social-gif"
  />
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

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aksad.dev.io/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <SocialGif
                src="instagram.gif"
                alt="Instagram"
              />
            </a>

            {/* Google Developer Profile */}
            <a
              href="https://g.dev/Aksadio"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Developer Profile"
            >
              <SocialGif
                src="google.gif"
                alt="Google Developer Profile"
              />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/Aksad_dev_io"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <SocialGif
                src="telegram.gif"
                alt="Telegram"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shahariar-azim-aksad-69aaaa3b8/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <SocialGif
                src="linkedin.gif"
                alt="LinkedIn"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Aksadio"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <SocialGif
                src="github.gif"
                alt="GitHub"
              />
            </a>

          </div>
        </div>


        <div className="footer-links">

          <div className="f-col">
            <h3>EXPLORE</h3>

            <a href="#projects-section">
              Projects
            </a>

            <a href="#contact-section">
              Get in touch
            </a>
          </div>


          <div className="f-col">
            <h3>CONTACT</h3>

            <a href="mailto:aksad.dev.io@gmail.com">
              aksad.dev.io@gmail.com
            </a>

            <a
              href="https://wa.me/8801616880684"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: 8801616880684
            </a>

            <a href="tel:+8801616880684">
              Phone: 8801616880684
            </a>
          </div>


          <div className="f-col">
            <h3>PROFILES</h3>

            <a
              href="https://www.kaggle.com/shahariarazimaksad"
              target="_blank"
              rel="noreferrer"
            >
              Kaggle
            </a>

            <a
              href="https://g.dev/Aksadio"
              target="_blank"
              rel="noreferrer"
            >
              Google Developer Profile
            </a>

            <a
              href="https://www.credential.net/profile/shahariarazimaksad43941/wallet"
              target="_blank"
              rel="noreferrer"
            >
              Credentials
            </a>

            <a
              href="https://pin.it/56l2K4VMC"
              target="_blank"
              rel="noreferrer"
            >
              Pinterest
            </a>
          </div>

        </div>
      </div>


      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Aksad. All rights reserved.
        </p>

        <p>
          created by aksad.dev
        </p>
      </div>

    </footer>
  );
};

export default SiteFooter;
