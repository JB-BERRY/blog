'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Grid = () => {
  return (
    <section className="grid lg:grid-cols-2 mb-24 md:mb-32 gap-8">
        <article className="card bg-base-200 rounded-2xl border border-base-200">
            <figure>
                <Image alt="Screenshot of a Stripe Radar report showing some payments blocked by Radar" fetchPriority="high" width="600" height="338" decoding="async" data-nimg="1" className="aspect-video object-center object-cover" style={{ color: 'transparent' }} src="/stripe_radar_report.c24666bf.jpg" unoptimized={true} srcSet="/stripe_radar_report.c24666bf.jpg 1x, /stripe_radar_report.c24666bf.jpg 2x"/>
            </figure>
            <div className="card-body">
                <div className="flex flex-wrap gap-2">
                    <Link className="badge badge-sm md:badge-md hover:badge-primary " title="Posts in Stripe Chargebacks &amp; Disputes" rel="tag" href="/category/chargeback">Chargeback</Link>
                    <Link className="badge badge-sm md:badge-md hover:badge-primary " title="Posts in Stripe Fees" rel="tag" href="/category/fee">Fee</Link>
                </div>
                <h2 className="mb-1 text-xl md:text-2xl font-bold">
                    <Link className="link link-hover hover:link-primary" title="Stripe Radar: Machine Learning vs. Radar for Fraud Teams – What's the Difference?" rel="bookmark" href="/stripe-radar-vs-radar-for-fraud-teams">Stripe Radar: Machine Learning vs. Radar for Fraud Teams – What's the Difference?</Link>
                </h2>
                <div className=" text-base-content/80 space-y-4">
                    <p className="">Stripe Radar and Radar for Fraud Teams are two fraud prevention tools with difference pricing and fees. We'll compare them and help you decide which one is right for you.</p>
                    <div className="flex items-center gap-4 text-sm">
                        <Link title="Posts by Marc Lou" className="inline-flex items-center gap-2 group" rel="author" href="/author/marc">
                            <span itemProp="author">
                                <Image alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="w-7 h-7 rounded-full object-cover object-center" style={{ color: 'transparent' }} srcSet="/marc.ba452a56.png 1x, /marc.ba452a56.png 2x" src="/marc.ba452a56.png" />
                            </span>
                            <span className="group-hover:underline">Marc Lou</span>
                        </Link>
                            <span itemProp="datePublished">November 30</span>
                    </div>
                </div>
            </div>
        </article>
        <article className="card bg-base-200 rounded-2xl border border-base-200">
            <figure>
                <Image alt="A stripe webhook events handler for subscriptions" fetchPriority="high" width="600" height="338" decoding="async" data-nimg="1" className="aspect-video object-center object-cover" style={{ color: 'transparent' }} srcSet="/stripe_subscription_webhook_events.3c27ba9d.png 1x, /stripe_subscription_webhook_events.3c27ba9d.png 2x" src="/stripe_subscription_webhook_events.3c27ba9d.png" unoptimized={true}/>
            </figure>
            <div className="card-body">
                <div className="flex flex-wrap gap-2">
                    <Link className="badge badge-sm md:badge-md hover:badge-primary " title="Posts in Stripe Payments" rel="tag" href="/category/payment">Payment</Link>
                </div>
                <h2 className="mb-1 text-xl md:text-2xl font-bold">
                    <Link className="link link-hover hover:link-primary" title="Stripe Subscriptions Explained With a Real-World Example" rel="bookmark" href="/how-stripe-subscriptions-work">Stripe Subscriptions Explained With a Real-World Example</Link>
                </h2>
                <div className=" text-base-content/80 space-y-4">
                    <p className="">Let's set up up and manage a subscription model for a fictional habit tracker app called Trackify.</p>
                    <div className="flex items-center gap-4 text-sm">
                        <Link title="Posts by Marc Lou" className="inline-flex items-center gap-2 group" rel="author" href="/author/marc">
                            <span itemProp="author">
                                <Image alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="w-7 h-7 rounded-full object-cover object-center" style={{ color: 'transparent' }} srcSet="/marc.ba452a56.png 1x, /marc.ba452a56.png 2x" src="/marc.ba452a56.png" unoptimized={true}/>
                            </span>
                            <span className="group-hover:underline">Marc Lou</span>
                        </Link>
                        <span itemProp="datePublished">November 24</span>
                    </div>
                </div>
            </div>
        </article>
        <article className="card bg-base-200 rounded-2xl border border-base-200">
            <figure>
                <Image alt="A Stripe screenshot showing the list of Stripe fees" fetchPriority="high" width="600" height="338" decoding="async" data-nimg="1" className="aspect-video object-center object-cover" style={{ color: 'transparent' }} srcSet="/list-of-stripe-fees.7e381040.jpg 1x, /list-of-stripe-fees.7e381040.jpg 2x" src="/list-of-stripe-fees.7e381040.jpg" unoptimized={true}/>
            </figure>
            <div className="card-body">
                <div className="flex flex-wrap gap-2">
                    <Link className="badge badge-sm md:badge-md hover:badge-primary " title="Posts in Stripe Fees" rel="tag" href="/category/fee">Fee</Link>
                </div>
                <h2 className="mb-1 text-xl md:text-2xl font-bold">
                    <Link className="link link-hover hover:link-primary" title="Understanding Stripe Fees: A Comprehensive Guide" rel="bookmark" href="/how-to-calculate-stripe-fees">Understanding Stripe Fees: A Comprehensive Guide</Link>
                </h2>
                <div className=" text-base-content/80 space-y-4">
                    <p className="">Stripe fees can be confusing. We'll break down the different fees and how to calculate them. We'll also cover how to reduce your Stripe fees.</p>
                    <div className="flex items-center gap-4 text-sm">
                        <Link title="Posts by Marc Lou" className="inline-flex items-center gap-2 group" rel="author" href="/author/marc">
                            <span itemProp="author">
                                <Image alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="w-7 h-7 rounded-full object-cover object-center" style={{ color: 'transparent' }} srcSet="/marc.ba452a56.png 1x, /marc.ba452a56.png 2x" src="/marc.ba452a56.png"/>
                            </span>
                            <span className="group-hover:underline">Marc Lou</span>
                        </Link>
                        <span itemProp="datePublished">November 17</span>
                    </div>
                </div>
            </div>
        </article>
        <article className="card bg-base-200 rounded-2xl border border-base-200">
            <figure>
                <Image alt="Stripe dashboard showing low dispute activity rate" loading="lazy" width="600" height="338" decoding="async" data-nimg="1" className="aspect-video object-center object-cover" style={{ color: 'transparent' }} srcSet="/stripeLowDisputeActivity.7869986f.jpg 1x, /stripeLowDisputeActivity.7869986f.jpg 2x" src="/stripeLowDisputeActivity.7869986f.jpg" unoptimized={true}/>
            </figure>
            <div className="card-body">
                <div className="flex flex-wrap gap-2">
                    <Link className="badge badge-sm md:badge-md hover:badge-primary " title="Posts in Stripe Chargebacks &amp; Disputes" rel="tag" href="/category/chargeback">Chargeback</Link>
                </div>
                <h2 className="mb-1 text-xl md:text-2xl font-bold">
                    <Link className="link link-hover hover:link-primary" title="5 Effective Ways to Reduce Chargebacks on Stripe" rel="bookmark" href="/5-effective-ways-to-reduce-chargebacks-on-stripe">5 Effective Ways to Reduce Chargebacks on Stripe</Link>
                </h2>
                <div className=" text-base-content/80 space-y-4">
                    <p className="">Each chargeback can trigger significant fees and potentially lead to Stripe account closure. Let's take a look at how to protect your business from chargebacks.</p>
                    <div className="flex items-center gap-4 text-sm">
                        <Link title="Posts by Marc Lou" className="inline-flex items-center gap-2 group" rel="author" href="/author/marc">
                            <span itemProp="author">
                                <Image alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="w-7 h-7 rounded-full object-cover object-center" style={{ color: 'transparent' }} srcSet="/marc.ba452a56.png 1x, /marc.ba452a56.png 2x" src="/marc.ba452a56.png"/>
                            </span>
                            <span className="group-hover:underline">Marc Lou</span>
                        </Link>
                        <span itemProp="datePublished">November 10</span>
                    </div>
                </div>
            </div>
        </article>
        <article className="card bg-base-200 rounded-2xl border border-base-200">
            <figure>
                <Image alt="A stripe dashboard showing a Monthly Recurring Revenue (MRR) chart" loading="lazy" width="600" height="338" decoding="async" data-nimg="1" className="aspect-video object-center object-cover" style={{ color: 'transparent' }} srcSet="/stripe_mrr_chart.e5d8f9e5.jpg 1x, /stripe_mrr_chart.e5d8f9e5.jpg 2x" src="/stripe_mrr_chart.e5d8f9e5.jpg" unoptimized={true}/>
            </figure>
            <div className="card-body">
                <div className="flex flex-wrap gap-2">
                    <Link className="badge badge-sm md:badge-md hover:badge-primary " title="Posts in Stripe Payments" rel="tag" href="/category/payment">Payment</Link>
                    <Link className="badge badge-sm md:badge-md hover:badge-primary " title="Posts in Stripe API" rel="tag" href="/category/api">API</Link>
                </div>
                <h2 className="mb-1 text-xl md:text-2xl font-bold">
                    <Link className="link link-hover hover:link-primary" title="Code a Stripe Subscription Model With React and Nextjs" rel="bookmark" href="/how-to-code-a-stripe-subscription-model-with-react-and-nextjs">Code a Stripe Subscription Model With React and Nextjs</Link>
                </h2>
                <div className=" text-base-content/80 space-y-4">
                    <p className="">Stripe subscriptions are a great way to monetize your AI tool. We'll show you how to set up a subscription model using React and NextJS</p>
                    <div className="flex items-center gap-4 text-sm">
                        <Link title="Posts by Marc Lou" className="inline-flex items-center gap-2 group" rel="author" href="/author/marc">
                            <span itemProp="author">
                                <Image alt="" loading="lazy" width="28" height="28" decoding="async" data-nimg="1" className="w-7 h-7 rounded-full object-cover object-center" style={{ color: 'transparent' }} srcSet="/marc.ba452a56.png 1x, /marc.ba452a56.png 2x" src="/marc.ba452a56.png"/>
                            </span>
                            <span className="group-hover:underline">Marc Lou</span>
                        </Link>
                        <span itemProp="datePublished">November 2</span>
                    </div>
                </div>
            </div>
        </article>
    </section>
  );
};

export default Grid;