'use client';

// components/BlogSection.js
export default function BlogSection() {
    return (
      <section className="text-center max-w-xl mx-auto mt-12 mb-24 md:mb-32">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6">
          The <span className="text-blue-500">ByeDispute</span> Blog
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Learn how to setup your Stripe account, how to prevent chargebacks, save money on fees, handle subscriptions, and more.
        </p>
      </section>
    );
  }  