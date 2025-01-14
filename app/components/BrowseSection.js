'use client';

import React from "react";
import Link from 'next/link';

// Composant général pour afficher des catégories
const BrowseSection = ({ title, categories }) => {
  return (
    <section>
      <h2 className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            className="p-4 bg-base-200 text-base-content rounded-xl duration-200 hover:bg-neutral hover:text-neutral-content"
            title={category.name}
            rel="tag"
            href={category.link}
          >
            <h3 className="md:text-lg font-medium">{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrowseSection;

