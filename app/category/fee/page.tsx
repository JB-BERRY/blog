'use client';

import { useEffect } from 'react';
import NProgress from 'nprogress';
import Header from "@/app/components/Header";
import ChargebackSection from "@/app/components/SectionChargeback";
import GridCategory from "@/app/components/GridCategory";
import BrowseSection from "@/app/components/BrowseSection";
import Footer from "@/app/components/Footer";

export default function ChargebackPage() {
  useEffect(() => {
    // Configurer NProgress pour une progression rapide, sans spinner
    NProgress.configure({ speed: 50, minimum: 0.1, showSpinner: false }); // Pas de spinner, progression rapide

    NProgress.start(); // Démarrer la barre de progression

    let progress = 0;
    let interval: number | NodeJS.Timeout; // Déclaration de `interval` ici pour y accéder lors du nettoyage

    // Fonction pour simuler un chargement de la page avec des étapes de progression
    const simulateLoading = () => {
      const totalTime = 300; // Temps total simulé pour le chargement de la page (1 seconde)
      const startTime = Date.now(); // Temps de départ

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

  const articles = [
    {
        imageAlt: 'Screenshot of a Stripe Radar report showing some payments blocked by Radar',
        imageSrcSet: '/stripe_radar_report.c24666bf.jpg 1x, /stripe_radar_report.c24666bf.jpg 2x',
        imageSrc: '/stripe_radar_report.c24666bf.jpg',
        title: 'Stripe Radar: Machine Learning vs. Radar for Fraud Teams – What\'s the Difference?',
        link: '/stripe-radar-vs-radar-for-fraud-teams',
        description: 'Stripe Radar and Radar for Fraud Teams are two fraud prevention tools with difference pricing and fees. We\'ll compare them and help you decide which one is right for you.',
        authorName: 'Marc Lou',
        authorLink: '/author/marc',
        authorImageSrcSet: '/marc.ba452a56.png 1x, /marc.ba452a56.png 2x',
        authorImageSrc: '/marc.ba452a56.png',
        datePublished: 'November 30',
    },
    {
      imageAlt: "A Stripe screenshot showing the list of Stripe fees",
      imageSrcSet: "/list-of-stripe-fees.7e381040.jpg 1x, /list-of-stripe-fees.7e381040.jpg 2x",
      imageSrc: "/list-of-stripe-fees.7e381040.jpg",
      title: "Understanding Stripe Fees: A Comprehensive Guide",
      link: "/how-to-calculate-stripe-fees",
      description: "Stripe fees can be confusing. We'll break down the different fees and how to calculate them. We'll also cover how to reduce your Stripe fees.",
      authorName: "Marc Lou",
      authorLink: "/author/marc",
      authorImageSrcSet: "/marc.ba452a56.png 1x, /marc.ba452a56.png 2x",
      authorImageSrc: "/marc.ba452a56.png",
      datePublished: "November 17",
    },
  ];

  const categories = [
    { name: "Chargeback", link: "/category/chargeback" },
    { name: "Payment", link: "/category/payment" },
    { name: "API", link: "/category/api" },
  ];

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
        {/* Utilisation du composant Section */}
        <ChargebackSection 
        title={
            <>
                Stripe <span className="text-blue-500">Fees</span>
            </>
        }
        content="Stripe fees can be confusing. Learn how to calculate them and how to reduce them."
        />
        <GridCategory
          sectionTitle="Most recent articles in Stripe Fees"
          articles={articles}
        />
        <BrowseSection
          title="Other categories you might like"
          categories={categories}
        />
      </main>
      <div className="h-24"></div>
      <Footer />
    </>
  );
}
