import { createFileRoute, notFound, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Intro } from '@/components/site';
import { articles, pageHead } from '@/lib/site-content';

export const Route = createFileRoute('/insights/$slug')({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) =>
    pageHead(loaderData?.title ?? 'Article unavailable', loaderData?.excerpt ?? 'This Coppers article is unavailable.'),
  component: Article,
});

function Article() {
  const a = Route.useLoaderData();
  return (
    <>
      <Intro eyebrow={a.category} title={a.title} description={a.excerpt} />
      <section className="article-detail-section" style={{ background: '#FFFFFF', paddingBlock: '60px 80px' }}>
        <div className="container-site" style={{ maxWidth: '840px' }}>
          <div style={{ marginBottom: '32px' }}>
            <Link to="/insights" className="btn-explore" style={{ padding: '10px 20px', fontSize: '13px' }}>
              <ArrowLeft size={16} /> BACK TO ALL INSIGHTS
            </Link>
          </div>

          <article className="article-content-card">
            {a.sections.map((s) => (
              <div key={s.title} style={{ marginBottom: '36px' }}>
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#070B19',
                    marginBottom: '14px',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {s.title}
                </h2>
                <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: '1.8' }}>{s.body}</p>
              </div>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}