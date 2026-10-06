import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  Intro,
  ServicesSection,
  PlatformShowcase,
  CaseStudiesSection,
  CompanySection,
  ProcessSection,
  BlogSection
} from '@/components/site';
import { pageHead, services } from '@/lib/site-content';

export const Route = createFileRoute('/solutions')({
  head: () =>
    pageHead(
      'Verification & IT Solutions — Coppers',
      'Explore Coppers credit verification, digital KYC, identity checks and tailored website and mobile application development.'
    ),
  component: Solutions,
});

function Solutions() {
  return (
    <>
      <Intro
        eyebrow="Our Solutions"
        title="Clearer verification. Connected teams."
        description="Find the tools that fit your institution, from field verification to customer onboarding."
      />

      <ServicesSection />

      <PlatformShowcase />

      <section className="detailed-solutions-section">
        <div className="container-site">
          <div className="section-header-centered">
            <div className="eyebrow-pill eyebrow-pill-light">DETAILED SOLUTIONS</div>
            <h2>Tailored Platforms Built For Financial Risk & Onboarding</h2>
          </div>

          {services.map((s) => (
            <article className="detail-row" id={s.id} key={s.id}>
              <div className="service-icon-btn">
                <s.icon size={28} />
              </div>

              <div>
                <h2>{s.title}</h2>
                <p>{s.short}</p>
                <Link to="/contact" className="btn-explore solution-discuss-btn">
                  DISCUSS THIS SOLUTION <ArrowRight size={16} />
                </Link>
              </div>

              <div className="company-checklist">
                {s.features.map((f) => (
                  <div key={f} className="checklist-item">
                    <div className="check-icon-circle">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CaseStudiesSection />
      <CompanySection />
      <ProcessSection />
      <BlogSection />
    </>
  );
}