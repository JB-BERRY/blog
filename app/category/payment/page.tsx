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
    let interval; // Déclaration de `interval` ici pour y accéder lors du nettoyage

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
        imageAlt: 'A stripe webhook events handler for subscriptions',
        imageSrcSet: '/stripe_subscription_webhook_events.3c27ba9d.png 1x, /stripe_subscription_webhook_events.3c27ba9d.png 2x',
        imageSrc: '/stripe_subscription_webhook_events.3c27ba9d.png',
        title: 'Stripe Subscriptions Explained With a Real-World Example',
        link: '/how-stripe-subscriptions-work',
        description: 'Let\'s set up up and manage a subscription model for a fictional habit tracker app called Trackify.',
        authorName: 'Marc Lou',
        authorLink: '/author/marc',
        authorImageSrcSet: '/marc.ba452a56.png 1x, /marc.ba452a56.png 2x',
        authorImageSrc: '/marc.ba452a56.png',
        datePublished: 'November 24',
    },
    {
      imageAlt: "A stripe dashboard showing a Monthly Recurring Revenue (MRR) chart",
      imageSrcSet: "/stripe_mrr_chart.e5d8f9e5.jpg 1x, /stripe_mrr_chart.e5d8f9e5.jpg 2x",
      imageSrc: "/stripe_mrr_chart.e5d8f9e5.jpg",
      title: "Code a Stripe Subscription Model With React and Nextjs",
      link: "/how-to-code-a-stripe-subscription-model-with-react-and-nextjs",
      description: "Stripe subscriptions are a great way to monetize your AI tool. We'll show you how to set up a subscription model using React and NextJS",
      authorName: "Marc Lou",
      authorLink: "/author/marc",
      authorImageSrcSet: "/marc.ba452a56.png 1x, /marc.ba452a56.png 2x",
      authorImageSrc: "/marc.ba452a56.png",
      datePublished: "November 2",
    },
  ];

  const categories = [
    { name: "Chargeback", link: "/category/chargeback" },
    { name: "Fee", link: "/category/fee" },
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
                Stripe <span className="text-blue-500">Payments</span>
            </>
        }
        content="Learn how to accept Stripe payments online and how to build a payment system for your business. Subscription payments, one-time payments, and more."
        />
        <GridCategory
          sectionTitle="Most recent articles in Stripe Payments"
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
