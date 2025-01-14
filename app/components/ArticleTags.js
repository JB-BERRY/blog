'use client';
import Link from 'next/link';


// components/ArticleTags.js
const ArticleTags = ({ tags, date }) => {
    return (
      <div className="flex items-center gap-4 mb-6">
        {tags.map((tag, index) => (
          <Link
            key={index}
            className="badge badge-sm md:badge-md hover:badge-primary !badge-lg"
            title={`Posts in ${tag.name}`}
            rel="tag"
            href={tag.link}
          >
            {tag.name}
          </Link>
        ))}
        <span className="text-base-content/80" itemProp="datePublished">
          {date}
        </span>
      </div>
    );
  };
  
  export default ArticleTags;
  