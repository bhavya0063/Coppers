import { createFileRoute } from '@tanstack/react-router';
import {
  Intro,
  CompanySection,
  TeamSection,
  ProcessSection,
  ServicesSection,
  PlatformShowcase,
  CaseStudiesSection,
  BlogSection
} from '@/components/site';
import { pageHead } from '@/lib/site-content';

export const Route = createFileRoute('/company')({
  head: () =>
    pageHead(
      'About Our Company — Coppers',
      'Get to know Coppers, combining banking fraud investigation expertise with verification platforms and IT solutions.'
    ),
  component: Company,
});

function Company() {
  return (
    <>
      <Intro
        eyebrow="About Coppers"
        title="Built around people. Focused on trust."
        description="We help financial institutions and their partners connect verification expertise with practical technology."
      />
      <CompanySection />
      <TeamSection />
      <ProcessSection />
      <ServicesSection />
      <PlatformShowcase />
      <CaseStudiesSection />
      <BlogSection />
    </>
  );
}