'use client';

import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {

  const marcSrcSet = "/marc.ba452a56.png 1x, /marc.ba452a56.png 2x";

  return (
    <footer className="bg-base-300 border-t border-base-content/5">
        <div className="max-w-7xl mx-auto px-8 py-24">
            <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link aria-current="page" className="flex gap-2 justify-center md:justify-start items-center" href="/#">
                        <Image alt="ByeDispute logo" fetchPriority="high" width="24" height="24" decoding="async" data-nimg="1" className="w-6 h-6" style={{ color: 'transparent' }} srcSet="/icon.png 1x, /icon.png 2x" src="/icon.png"/>
                        <strong className="font-extrabold tracking-tight text-base md:text-lg">ByeDispute</strong>
                    </Link>
                    <p className="mt-3 text-sm text-base-content-secondary">Prevent disputes before they happen. The best Stripe chargeback protection tool.</p>
                    <p className="mt-3 text-sm text-base-content-secondary/80">Copyright © 2024 - All rights reserved</p>
                </div>
                <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center md:pl-24">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">LINKS</div>
                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <Link href="mailto:marc@mg.byedispute.com" target="_blank" className="link link-hover" aria-label="Contact Support">Support</Link>
                                <Link className="link link-hover" href="/#pricing">Pricing</Link>
                                <Link className="link link-hover" href="/dashboard">Dashboard</Link>
                                <Link className="link link-hover" href="/blog">Blog</Link>
                                <Link href="https://affiliates.reflio.com/invite/byedispute" target="_blank" className="link link-hover">Affiliates - Earn 30%</Link>
                            </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">LEGAL</div>
                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <Link className="link link-hover" href="/tos">Terms of services</Link>
                                <Link className="link link-hover" href="/privacy-policy">Privacy policy</Link>
                            </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">MORE</div>
                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <Link href="https://marclou.beehiiv.com/" target="_blank" className="link link-hover">Newsletter for makers</Link>
                                <Link href="https://indiepa.ge/" target="_blank" className="link link-hover">IndiePage</Link>
                                <Link href="https://poopup.co/" target="_blank" className="link link-hover">PoopUp</Link>
                                <Link href="https://zenvoice.io/" target="_blank" className="link link-hover">ZenVoice</Link>
                                <Link href="https://datafa.st" target="_blank" className="link link-hover">DataFast</Link>
                                <Link href="https://shipfa.st/" target="_blank" className="link link-hover">ShipFast</Link>
                                <Link href="https://codefa.st" target="_blank" className="link link-hover">CodeFast</Link>
                            </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 md:mt-16 text-sm">
                <div className="flex flex-row justify-sart items-center gap-4">
                    <Image alt="Marc Lou" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="rounded-full w-8 aspect-square" style={{ color: 'transparent' }} srcSet={marcSrcSet} src="/marc.ba452a56.png"/>
                    <div className="text-left text-base-content-secondary leading-relaxed">Hey Curious 👋 I&apos;m <Link href="https://marclou.com" target="_blank" rel="noreferrer" className="link text-base-content font-medium">Marc</Link>, the creator of ByeDispute. You can follow my work on <Link href="https://twitter.com/marc_louvion" target="_blank" rel="noreferrer" className="link text-base-content font-medium">Twitter.</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;