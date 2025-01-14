'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GridCategory = ({ sectionTitle, articles }) => {
    if (!articles || articles.length === 0) {
        return <p>No articles available.</p>; // Gestion des cas où `articles` est vide ou indéfini
    }

    return (
        <section className="mb-24">
            <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
                {sectionTitle}
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                    <article
                        key={index}
                        className="card bg-base-200 rounded-2xl border border-base-200"
                    >
                        {/* Contenu de l'article */}
                        <figure>
                            <Image
                                alt={article.imageAlt}
                                src={article.imageSrc}
                                width={600}
                                height={338}
                                decoding="async"
                                className="aspect-video object-center object-cover"
                                style={{ color: 'transparent' }}
                                unoptimized={true}
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="mb-1 text-xl md:text-2xl font-bold">
                                <Link href={article.link} className="link link-hover hover:link-primary">
                                    {article.title}
                                </Link>
                            </h3>
                            <div className=" text-base-content/80 space-y-4">
                                <p>{article.description}</p>
                                <div className="flex items-center gap-4 text-sm">
                                    <Link href={article.authorLink} className="inline-flex items-center gap-2">
                                        <Image
                                            alt=""
                                            src={article.authorImageSrc}
                                            width={28}
                                            height={28}
                                            className="w-7 h-7 rounded-full object-cover"
                                            style={{ color: 'transparent' }}
                                        />
                                        <span>{article.authorName}</span>
                                    </Link>
                                    <span>{article.datePublished}</span>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default GridCategory;

