"use client"

// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCategories = () => {
      setIsOpen(!isOpen);
    };

    const imageSrcSet = "/icon.png 1x, /icon.png 2x";
  
    return (
     <header className="bg-base-200">
        <nav className="max-w-7xl flex items-center justify-between px-8 py-3 mx-auto">
            <div className="flex lg:flex-1">
                <Link className="flex items-center gap-2 shrink-0 " title="ByeDispute hompage" href="/">
                <Image alt="ByeDispute logo" priority width="32" height="32" decoding="async" data-nimg="1" className="w-8" srcSet={imageSrcSet} src="/icon.png" style={{ color: 'transparent' }}/>
                <span className="font-extrabold text-lg">ByeDispute</span>
                </Link>
            </div>
            <div className="flex lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
                    <span className="sr-only">Open main menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-base-content">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </button>
            </div>
            <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
                <Link className="link link-hover text-base-content/80 hover:text-base-content active:text-base-content focus:text-base-content duration-100" title="All Posts" href="/">All Posts</Link>
                <div className={`relative z-30 ${isOpen ? 'data-headlessui-state="open"' : ''}`}>
                    <button
                    className="link no-underline flex flex-nowrap items-center gap-1 text-base-content/80 hover:text-base-content active:text-base-content focus:text-base-content duration-100"
                    title="Open Blog categories"
                    type="button"
                    aria-expanded={isOpen}
                    data-headlessui-state={isOpen ? 'open' : ''}
                    id="headlessui-popover-button-:r0:"
                    aria-controls="headlessui-popover-panel-:r1o:"
                    onClick={toggleCategories}
                    >Categories
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 duration-200 transform ${isOpen ? 'rotate-180' : ''}`}>
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div className={`transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-200`}>
                        <div className="absolute left-0 z-30 mt-3 w-screen max-w-full sm:max-w-sm transform" id="headlessui-popover-panel-:r1o:" tabIndex="-1" data-headlessui-state={isOpen ? 'open' : ''}>
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-base-content ring-opacity-5">
                                <div className="relative grid gap-2 bg-base-100 p-2 overflow-hidden">
                                    <div>
                                        <Link className="block text-left p-3 -m-1 cursor-pointer hover:bg-base-200 rounded-lg duration-200" href="/category/chargeback">
                                            <div className="">
                                                <p className="font-medium mb-0.5">Chargeback</p>
                                                <p className="text-sm opacity-80">Learn how to handle them and how to prevent them</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="block text-left p-3 -m-1 cursor-pointer hover:bg-base-200 rounded-lg duration-200" href="/category/payment">
                                            <div className="">
                                                <p className="font-medium mb-0.5">Payment</p>
                                                <p className="text-sm opacity-80">Learn how to accept Stripe payments online.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="block text-left p-3 -m-1 cursor-pointer hover:bg-base-200 rounded-lg duration-200" href="/category/fee">
                                            <div className="">
                                                <p className="font-medium mb-0.5">Fee</p>
                                                <p className="text-sm opacity-80">Stripe fees can be confusing. Learn how to calculate them and how to reduce them.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="block text-left p-3 -m-1 cursor-pointer hover:bg-base-200 rounded-lg duration-200" href="/category/api">
                                            <div className="">
                                                <p className="font-medium mb-0.5">API</p>
                                                <p className="text-sm opacity-80">Learn how to use it to build your own payment system using code.</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    style={{
                        position: "fixed",
                        top: "1px",
                        left: "1px",
                        width: "1px",
                        height: "0px",
                        padding: "0px",
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        whiteSpace: "nowrap",
                        borderWidth: "0px",
                        display: "none",
                }}>
                </div>
            </div>
            <div className="hidden lg:flex lg:justify-end lg:flex-1">
                <button className="btn btn-primary md:btn-sm">Prevent disputes</button>
            </div>
        </nav>
        <div className="relative z-50 hidden">
            <div className="fixed inset-y-0 right-0 z-10 w-full px-8 py-3 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300">
                <div className="flex items-center justify-between">
                    <Link className="flex items-center gap-2 shrink-0 " title="ByeDispute hompage" href="/">
                        <Image alt="ByeDispute logo" priority width="32" height="32" decoding="async" data-nimg="1" className="w-8" srcSet={imageSrcSet} src="/icon.png" style={{ color: 'transparent' }}/>
                        <span className="font-extrabold text-lg">ByeDispute</span>
                    </Link>
                    <button type="button" className="-m-2.5 rounded-md p-2.5">
                        <span className="sr-only">Close menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="flow-root mt-6">
                    <div className="py-4">
                        <div className="flex flex-col gap-y-4 items-start">
                            <Link className="link link-hover" title="All Posts" href="/blog">All Posts</Link>
                            <button aria-expanded="false" type="button" className="link no-underline flex justify-between items-center w-full ">Categories
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 duration-200 ">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="flex flex-col">
                        <button className="btn btn-primary md:btn-sm">Prevent disputes</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;
