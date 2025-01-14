'use client';

import React from "react";
import Link from 'next/link';

const BrowseArticles = () => {
  return (
    <section>
      <p className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
        Browse articles by category
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link
          className="p-4 bg-base-200 text-base-content rounded-xl duration-200 hover:bg-neutral hover:text-neutral-content"
          title="Stripe Chargebacks & Disputes"
          rel="tag"
          href="/category/chargeback"
        >
          <div className="md:text-lg font-medium">Chargeback</div>
        </Link>
        <Link
          className="p-4 bg-base-200 text-base-content rounded-xl duration-200 hover:bg-neutral hover:text-neutral-content"
          title="Stripe Payments"
          rel="tag"
          href="/category/payment"
        >
          <div className="md:text-lg font-medium">Payment</div>
        </Link>
        <Link
          className="p-4 bg-base-200 text-base-content rounded-xl duration-200 hover:bg-neutral hover:text-neutral-content"
          title="Stripe Fees"
          rel="tag"
          href="/category/fee"
        >
          <div className="md:text-lg font-medium">Fee</div>
        </Link>
        <Link
          className="p-4 bg-base-200 text-base-content rounded-xl duration-200 hover:bg-neutral hover:text-neutral-content"
          title="Stripe API"
          rel="tag"
          href="/category/api"
        >
          <div className="md:text-lg font-medium">API</div>
        </Link>
      </div>
    </section>
  );
};

export default BrowseArticles;
