import { createFileRoute } from '@tanstack/react-router';
import {
  Intro,
  BlogSection,
  ServicesSection,
  PlatformShowcase,
  CompanySection,
  CaseStudiesSection,
  TestimonialsSection,
  ProcessSection
} from '@/components/site';
import { pageHead } from '@/lib/site-content';

export const Route = createFileRoute('/insights/')({
  head: () =>
    pageHead(
      'Verification Insights — Coppers',
      'Practical introductions to credit verification, digital KYC and identity checks for financial services.'
    ),
  component: Insights,
});

function Insights() {
  return (
    <>
      <Intro
        eyebrow="Insights"
        title="A little clarity goes a long way."
        description="Practical perspectives on verification, customer onboarding, and connected financial workflows."
      />
      <BlogSection />
      <CaseStudiesSection />
      <ServicesSection />
      <PlatformShowcase />
      <CompanySection />
      <TestimonialsSection />
      <ProcessSection />
    </>
  );
}