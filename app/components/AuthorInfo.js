'use client';

// components/AuthorInfo.js
const AuthorInfo = ({ author, authorImage, authorLink }) => {
    return (
      <div>
        <p className="text-base-content/80 text-sm mb-2 md:mb-3">Posted by</p>
        <a title={`Posts by ${author}`} className="inline-flex items-center gap-2 group" rel="author" href={authorLink}>
          <span itemProp="author">
            <img
              alt=""
              loading="lazy"
              width="28"
              height="28"
              className="w-7 h-7 rounded-full object-cover object-center"
              src={authorImage}
            />
          </span>
          <span className="group-hover:underline">{author}</span>
        </a>
      </div>
    );
  };
  
  export default AuthorInfo;
  