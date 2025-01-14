'use client';

// components/ArticleImage.js
const ArticleImage = ({ src, alt }) => {
    return (
      <img
        src={src}
        alt={alt}
        className="rounded-xl"
        width="700"
        height="500"
      />
    );
  };
  
  export default ArticleImage;
  