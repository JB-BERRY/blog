'use client';

// components/ContentSection.js
const ContentSection = ({ title, content, listItems }) => {
    return (
      <section>
        <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">{title}</h2>
        <p className="text-base-content/90 leading-relaxed">{content}</p>
        {listItems && (
          <ul className="list-inside list-disc text-base-content/90 leading-relaxed">
            {listItems.map((item, index) => (
              <li key={index} className="list-item">{item}</li>
            ))}
          </ul>
        )}
      </section>
    );
  };
  
  export default ContentSection;
  