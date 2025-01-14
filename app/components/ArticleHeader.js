'use client';

// components/ArticleHeader.js
const ArticleHeader = ({ title, date, description }) => {
    return (
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">
          {title}
        </h1>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-base-content/80">{date}</span>
        </div>
        <p className="text-base-content/80 md:text-lg max-w-[700px]">{description}</p>
      </div>
    );
  };
  
  export default ArticleHeader;
  