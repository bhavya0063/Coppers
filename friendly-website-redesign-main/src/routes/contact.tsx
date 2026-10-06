import { createFileRoute, Link } from '@tanstack/react-router';
import { Phone, ArrowUpRight, ShieldCheck, ScanFace, Code } from 'lucide-react';
import {
  Intro,
  ServicesSection,
  PlatformShowcase,
  CompanySection,
  CaseStudiesSection,
  BlogSection
} from '@/components/site';
import { pageHead } from '@/lib/site-content';

export const Route = createFileRoute('/contact')({
  head: () =>
    pageHead(
      'Contact Our Team — Coppers',
      'Talk to Coppers about credit verification, eKYC, identity checks and website or mobile development. Call +91 9044454100.'
    ),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Intro
        eyebrow="Let’s Talk"
        title="Your next step starts with a conversation."
        description="Whether you need a verification solution or a development partner, we’re ready to understand your requirements."
      />

      <section className="contact-section-wrapper">
        <div className="container-site">
          <div className="company-grid">
            <div className="company-content">
              <div className="eyebrow-pill eyebrow-pill-light">SPEAK WITH OUR TEAM</div>
              <h2>How can we help your institution?</h2>
              <p>
                Call us directly to discuss your requirements, field verification workflows, or eKYC integration options for your institution.
              </p>

              <div className="contact-phone-block">
                <a href="tel:+919044454100" className="contact-phone-num">
                  +91 90444 54100
                </a>

                <a href="tel:+919044454100" className="btn-explore">
                  <Phone size={18} /> CALL COPPERS NOW
                </a>
              </div>
            </div>

            <div className="contact-topics-box">
              <h3>What would you like to discuss?</h3>

              <div className="contact-topics-list">
                <Link to="/solutions" hash="credit-verification" className="contact-topic-card">
                  <div className="check-icon-circle">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="topic-card-text">Credit Verification & Field Teams</span>
                  <ArrowUpRight size={18} className="topic-card-arrow" />
                </Link>

                <Link to="/solutions" hash="ekyc" className="contact-topic-card">
                  <div className="check-icon-circle">
                    <ScanFace size={18} />
                  </div>
                  <span className="topic-card-text">Digital KYC & Identity Checks</span>
                  <ArrowUpRight size={18} className="topic-card-arrow" />
                </Link>

                <Link to="/solutions" className="contact-topic-card">
                  <div className="check-icon-circle">
                    <Code size={18} />
                  </div>
                  <span className="topic-card-text">Website & Mobile Application Development</span>
                  <ArrowUpRight size={18} className="topic-card-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <PlatformShowcase />
      <CompanySection />
      <CaseStudiesSection />
      <BlogSection />
    </>
  );
}