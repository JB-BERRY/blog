'use client';

// components/RelatedReading.js
const RelatedReading = () => {
    return (
      <div className="hidden md:block mt-12">
        <p className="text-base-content/80 text-sm mb-2 md:mb-3">Related reading</p>
        <div className="space-y-2 md:space-y-5">
          <div>
            <p className="mb-0.5">
              <a className="link link-hover hover:link-primary font-medium" title="Code a Stripe Subscription Model With React and Nextjs" rel="bookmark" href="/how-to-code-a-stripe-subscription-model-with-react-and-nextjs">
                Code a Stripe Subscription Model With React and Nextjs
              </a>
            </p>
            <p className="text-base-content/80 max-w-full text-sm">
              Stripe subscriptions are a great way to monetize your AI tool. We'll show you how to set up a subscription model using React and NextJS
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default RelatedReading;
  