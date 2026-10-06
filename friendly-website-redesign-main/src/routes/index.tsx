import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import {
  ServicesSection,
  CompanySection,
  TeamSection,
  ProjectsSection,
  TestimonialsSection,
  ProcessSection,
  BlogSection,
  TickerBar,
  VideoModal,
  DemoModal,
  TrustStatsBar,
  SecurityBadgesBar,
  PlatformShowcase,
  CaseStudiesSection,
  PartnerLogosMarquee,
} from '@/components/site';
import { pageHead } from '@/lib/site-content';
import heroImg from '@/assets/hero-tablet-user.jpg';

export const Route = createFileRoute('/')({
  head: () =>
    pageHead(
      'Digital Verification Services — Coppers',
      'Empowering the Digital CPV and RCU authentication for credit verification teams and financial institutions.'
    ),
  component: Index,
});

function Index() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-circuit-bg" />

        <div className="container-site hero-grid">
          <div className="hero-content reveal-on-scroll">
            <div className="eyebrow-pill">Digital Verification Services</div>

            <h1>
              Empowering the Digital <br />
              CPV and RCU <br />
              authentication
            </h1>

            <p>
              This platform empowers credit verification in field teams and backend teams alike to collaborate
              effectively and efficiently, enhancing overall productivity and accuracy.
            </p>

            <div className="hero-actions">
              <button className="btn-explore" onClick={() => setIsDemoModalOpen(true)}>
                REQUEST DEMO <Sparkles size={16} />
              </button>

              <Link to="/solutions" className="btn-secondary-hero">
                EXPLORE PLATFORM <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="hero-media-wrapper reveal-on-scroll reveal-scale">
            <div className="hero-media-card">
              <img src={heroImg} alt="Young professional working on tablet device" />

              <div className="reviews-badge">
                <div className="stars">★★★★★</div>
                <span>5000+ CLIENT REVIEWS</span>
              </div>
            </div>

            <button
              className="hero-play-btn"
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Play demo video"
            >
              <Play size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Verification Statistics Bar (Trust Counter) */}
      <TrustStatsBar />

      {/* 3. Security Badges & Certifications Bar */}
      <SecurityBadgesBar />

      {/* 4. Orange Ticker Marquee Bar */}
      <TickerBar />

      {/* 5. Infinite Scrolling Partner Bank Logos Marquee */}
      <PartnerLogosMarquee />

      {/* 6. Services Section */}
      <ServicesSection />

      {/* 7. Product Visualization Showcase (Interactive UI Mockups) */}
      <PlatformShowcase />

      {/* 8. Company / About Section */}
      <CompanySection />

      {/* 9. Case Studies / Credibility Proof Section */}
      <CaseStudiesSection />

      {/* 10. Dedicated Team Members Section */}
      <TeamSection />

      {/* 11. Technology Evolution / Projects Section */}
      <ProjectsSection />

      {/* 12. Clients Feedback / Testimonials Section */}
      <TestimonialsSection />

      {/* 13. Working Process Section */}
      <ProcessSection />

      {/* 14. Latest News & Blog Section with Live Filters */}
      <BlogSection />

      {/* Video Modal Popup */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

      {/* Request Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}


