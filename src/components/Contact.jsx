import React from "react";
import profile from "../data/profile.json";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  GitHubIcon,
  TikTokIcon,
  YouTubeIcon,
} from "../assets/SocialIcons";

const Contact = () => {
  const socialPlatforms = [
    { icon: LinkedInIcon, href: profile.contact.socials.linkedin, label: "LinkedIn" },
    { icon: InstagramIcon, href: profile.contact.socials.instagram, label: "Instagram" },
    { icon: FacebookIcon, href: profile.contact.socials.facebook, label: "Facebook" },
    { icon: GitHubIcon, href: profile.contact.socials.github, label: "GitHub" },
    { icon: TikTokIcon, href: profile.contact.socials.tiktok, label: "TikTok" },
    { icon: YouTubeIcon, href: profile.contact.socials.youtube, label: "YouTube" }
  ];

  return (
    <section
      id="contact"
      className="relative bg-cover bg-center bg-no-repeat text-white px-6 py-24 scroll-mt-24"
      style={{ backgroundImage: "url('/galaxy-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center relative z-10">
        Get In{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Touch
        </span>
      </h2>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ContactCard
            icon={EmailIcon}
            label="Email"
            value={profile.contact.email}
            href={`mailto:${profile.contact.email}`}
          />
          <ContactCard
            icon={PhoneIcon}
            label="Phone"
            value={profile.contact.phone}
            href={`tel:${profile.contact.phone}`}
          />
          <ContactCard
            icon={LocationIcon}
            label="Location"
            value={profile.contact.location.label}
            href={profile.contact.location.mapLink}
          />
        </div>

        {/* CTA */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            {profile.contact.cta}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${profile.contact.email}`}
              className="bg-gradient-to-r from-primary to-accent text-black px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-primary/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Send me an Email
            </a>
            <a
              href={profile.contact.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-black transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Follow me on social media
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialPlatforms.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 hover:border-primary text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon: Icon, label, value, href }) => (
  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl hover:shadow-primary/20 transition-all duration-500 border border-white/10 hover:border-primary transform hover:scale-105 hover:-translate-y-2 group text-center">
    <div className="mb-3 group-hover:animate-bounce text-primary">{Icon}</div>
    <h3 className="text-primary font-bold mb-2 transition-colors">{label}</h3>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-primary underline underline-offset-2 transition-colors duration-300 break-words"
    >
      {value}
    </a>
  </div>
);

const EmailIcon = (
  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = (
  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = (
  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default Contact;
