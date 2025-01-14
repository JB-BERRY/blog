'use client';

// app/page.tsx
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleTags from '../components/ArticleTags';
import articles from '../data/articles';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    // Configurer NProgress pour une progression rapide, sans spinner
    NProgress.configure({ speed: 50, minimum: 0.1, showSpinner: false }); // Pas de spinner, progression rapide

    NProgress.start(); // Démarrer la barre de progression

    let progress = 0;
    let interval; // Déclaration de `interval` ici pour y accéder lors du nettoyage

    // Fonction pour simuler un chargement de la page avec des étapes de progression
    const simulateLoading = () => {
      const totalTime = 300; // Temps total simulé pour le chargement de la page (1 seconde)
      let startTime = Date.now(); // Temps de départ

      const updateProgress = () => {
        const elapsedTime = Date.now() - startTime; // Temps écoulé depuis le début du chargement
        progress = Math.min(elapsedTime / totalTime, 1);
        NProgress.set(progress);

        // Dès que la barre atteint 100%, on termine
        if (progress >= 1) {
          NProgress.done();
          clearInterval(interval); // Nettoyage de l'intervalle dès que la progression atteint 100%
        }
      };

      // Mise à jour rapide toutes les 10ms
      interval = setInterval(updateProgress, 10);
    };

    // Simuler un chargement de la page
    simulateLoading();

    // Nettoyage lors du démontage du composant
    return () => {
      clearInterval(interval); // Assurez-vous de nettoyer l'intervalle
    };
  }, []);

  const pathname = usePathname(); // Obtenir l'URL actuelle
  const slug = pathname.split('/').pop(); // Extraire le slug de l'URL

  // Trouver l'article correspondant au slug
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return (
      <div>
        <Header />
        <main className="min-h-screen max-w-6xl mx-auto p-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">Article Not Found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
        <style>{`
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: #4379FF;
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
        }
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #4379FF, 0 0 5px #4379FF;
          opacity: 1;
          transform: rotate(3deg) translate(0px, -4px);
        }
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }
        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;
          border: 2px solid transparent;
          border-top-color: #4379FF;
          border-left-color: #4379FF;
          border-radius: 50%;
          animation: nprogress-spinner 400ms linear infinite;
        }
        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }
        .nprogress-custom-parent #nprogress .bar,
        .nprogress-custom-parent #nprogress .spinner {
          position: absolute;
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
        <Header />
        <main className="min-h-screen max-w-6xl mx-auto p-8">
        <div>
            <Link className="link !no-underline text-base-content/80 hover:text-base-content inline-flex items-center gap-1" title="Back to Blog" href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd">
                    </path>
                </svg>Back to Blog
            </Link>
        </div>
        <article>
            <section className="my-12 md:my-20 max-w-[800px]">
                <ArticleTags tags={article.tags} date={article.date} />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">{article.title}</h1>
                <p className="text-base-content/80 md:text-lg max-w-[700px]">{article.intro}</p>
            </section>
            <div className="flex flex-col md:flex-row">
              <section className="max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-72 shrink-0">
                <p className="text-base-content/80 text-sm mb-2 md:mb-3">Posted by</p>
                  <Link title="Posts by Marc Lou" className="inline-flex items-center gap-2 group" rel="author" href="/author/marc">
                    <span itemProp="author">
                      <Image alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="w-7 h-7 rounded-full object-cover object-center" srcSet="/marc.ba452a56.png 1x, /marc.ba452a56.png 2x" src="/marc.ba452a56.png" style={{ color: 'transparent' }}/>
                    </span>
                    <span className="group-hover:underline">Marc Lou</span>
                  </Link>
                <div className="hidden md:block mt-12">
                  <p className=" text-base-content/80 text-sm  mb-2 md:mb-3">Related reading</p>
                  <div class="space-y-2 md:space-y-5">
                    {article.related.map((relatedItem, index) => (
                      <div key={index}>
                        <p className="mb-0.5">
                          <a
                            className="link link-hover hover:link-primary font-medium"
                            title={relatedItem.title}
                            rel="bookmark"
                            href={relatedItem.description}
                          >
                            {relatedItem.title}
                          </a>
                        </p>
                        <p className="text-base-content/80 max-w-full text-sm">
                          {relatedItem.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section className="w-full max-md:pt-4 md:pr-20 space-y-12 md:space-y-20">
                <Image 
                  alt={article.image.alt} 
                  fetchPriority="high" 
                  width="700" 
                  height="500" 
                  decoding="async" 
                  data-nimg="1" 
                  className="rounded-xl" 
                  src={article.image.src} 
                  style={{ color: 'transparent' }}
                  unoptimized={true}
                />
                {article.section1 && (
                <section>
                  <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">{article.section1.h2}</h2>
                  {article.section1.p}
                  {article.section1.ul}
                </section>
                )}
                {article.section2 && (
                <section>
                  <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">{article.section2.h2}</h2>
                  {article.section2.h3 && (
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">{article.section2.h3}</h3>
                  )}
                  {article.section2.p}
                  {article.section2.image && (
                  <Image 
                    alt={article.section2.image.alt} 
                    loading="lazy" 
                    width="700" 
                    height="250" 
                    decoding="async" 
                    data-nimg="1" 
                    className="mt-4" 
                    src={article.section2.image.src}
                    style={{ color: 'transparent' }}
                    unoptimized={true}
                  />
                  )}
                  {article.section2.ul}
                  {article.section2.div}
                </section>
                )}
                {article.section3 && (
                <section>
                  <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">{article.section3.h2}</h2>
                  {article.section3.h3 && (
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">{article.section3.h3}</h3>
                  )}
                  {article.section3.p}
                  {article.section3.table}
                  {article.section3.pre}
                  {article.section3.p2}
                  {article.section3.ol}
                  {article.section3.image && (
                  <Image 
                    alt={article.section3.image.alt} 
                    loading="lazy" 
                    width="700" 
                    height="250" 
                    decoding="async" 
                    data-nimg="1" 
                    className="mt-4" 
                    src={article.section3.image.src}
                    style={{ color: 'transparent' }}
                    unoptimized={true}
                  />
                  )}
                </section>
                )}
                {article.section4 && (
                <section>
                  {article.section4.image && (
                  <Image 
                    alt={article.section4.image.alt} 
                    loading="lazy" 
                    width="700" 
                    height="500" 
                    decoding="async" 
                    data-nimg="1" 
                    className="mb-6" 
                    src={article.section4.image.src}
                    style={{ color: 'transparent' }}
                    unoptimized={true}
                  />
                  )}
                  <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">{article.section4.h2}</h2>
                  {article.section4.h3 && (
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">{article.section4.h3}</h3>
                  )}
                  {article.section4.p}
                  {article.section4.pre}
                  {article.section4.p2}
                  {article.section4.ul}
                </section>
                )}
                {article.section5 && (
                <section className={`${article.title === "Code a Stripe Subscription Model With React and Nextjs"? "space-y-6 md:space-y-10": ""}`}>
                  <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">{article.section5.h2}</h2>
                  {article.section5.h3 && (
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">{article.section5.h3}</h3>
                  )}
                  {article.section5.p}
                  {article.section5.p2}
                  {article.section5.image && (
                  <Image 
                    alt={article.section5.image.alt} 
                    loading="lazy" 
                    width="700" 
                    height="250" 
                    decoding="async" 
                    data-nimg="1" 
                    className="mt-4" 
                    src={article.section5.image.src}
                    style={{ color: 'transparent' }}
                    unoptimized={true}
                  />
                  )}
                  {article.section5.section}
                  {article.section5.section2}
                  {article.section5.p3}
                  {article.section5.p4}
                </section>
                )}
                {article.section6 && (
                <section>
                  {article.section6.h2 && (
                  <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">{article.section6.h2}</h2>
                  )}
                  {article.section6.h3 && (
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">{article.section6.h3}</h3>
                  )}
                  {article.section6.p}
                  {article.section6.p2}
                </section>
                )}
                {article.section7 && (
                <section>
                  {article.section7.h2 && (
                  <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">{article.section7.h2}</h2>
                  )}
                  {article.section7.h3 && (
                  <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">{article.section7.h3}</h3>
                  )}
                  {article.section7.p}
                </section>
                )}
                {article.section8 && (
                <section>
                  <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">{article.section8.h2}</h2>
                  {article.section8.p}
                </section>
                )}
              </section>
            </div>
        </article>
      </main>
      <div className="h-24"></div>
      <Footer />
    </>
  );
}