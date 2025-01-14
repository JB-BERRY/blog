import Link from 'next/link';

const articles = [
    {
      slug: 'how-stripe-subscriptions-work',
      title: 'Stripe Subscriptions Explained With a Real-World Example',
      tags: [
        { name: 'Payment', link: '/category/payment' },
      ],
      date: 'November 24, 2023',
      related: [
        { title: 'Code a Stripe Subscription Model With React and Nextjs', description: 'Stripe subscriptions are a great way to monetize your AI tool. We\'ll show you how to set up a subscription model using React and NextJS' },
      ],
      intro: 'Let\'s set up up and manage a subscription model for a fictional habit tracker app called Trackify.',
      image: {
        src: '/stripe_subscription_webhook_events.3c27ba9d.png',
        alt: 'A stripe webhook events handler for subscriptions',
      },
      section1: {
        h2: 'Introduction to Trackify\'s Offering',
        p: (
          <p className="text-base-content/90 leading-relaxed">At its core, Trackify is a digital habit tracker designed to help users maintain their daily routines. To engage new users, Trackify offers a <strong className="text-base-content">7-day free trial</strong> of its full features. Beyond the trial, Trackify provides a <strong className="text-base-content">$9 monthly subscription</strong> plan. Let&apos;s explore how Stripe&apos;s robust subscription service brings this business model to life seamlessly.</p>
        ),
      },
      section2: {
        h2: 'Key Components of Stripe Subscriptions',
        p: (
          <p className="text-base-content/90 leading-relaxed">According to <Link href="https://stripe.com/docs/billing/subscriptions/overview" className="link link-primary">Stripe&apos;s documentation</Link>, managing subscriptions involves several core API resources, including:</p>
        ),
        ul: (
          <ul className="list-inside list-disc text-base-content/90 leading-relaxed">
            <li className="list-item"><code className="text-sm bg-base-300/50 rounded px-1 py-0.5">Product:</code> what your business offers, in Trackify&apos;s case - the habit tracker service.</li>
            <li className="list-item"><code className="text-sm bg-base-300/50 rounded px-1 py-0.5">Price:</code> how often and how much to charge. Trackify&apos;s monthly price is set at $9.</li>
            <li className="list-item"><code className="text-sm bg-base-300/50 rounded px-1 py-0.5">Customer:</code> a Stripe object allowing recurring charges and tracking multiple charges for the same customer.</li>
            <li className="list-item"><code className="text-sm bg-base-300/50 rounded px-1 py-0.5">PaymentMethod:</code> customer&apos;s payment instruments for service payment, such as credit cards.</li>
            <li className="list-item"><code className="text-sm bg-base-300/50 rounded px-1 py-0.5">Subscription:</code> associate product details with the plan your customer subscribes to.</li>
            <li className="list-item"><code className="text-sm bg-base-300/50 rounded px-1 py-0.5">Invoice:</code> generated automatically for subscriptions, detailing amounts owed by the customer.</li>
            <li className="list-item"><code className="text-sm bg-base-300/50 rounded px-1 py-0.5">PaymentIntent:</code> used for dynamic payment flows, ensuring regulatory compliances and handling authentication steps.</li>
          </ul>
        ),
      },
      section3: {
        h2: 'The Trackify Subscription Lifecycle',
        p: (
          <p className="text-base-content/90 leading-relaxed">Here&apos;s how the subscription lifecycle unwinds from start to finish:</p>
        ),
        ol: (
          <ol className="list-inside list-disc text-base-content/90 leading-relaxed">
            <li className="list-item"><strong className="text-base-content">Customer Creation:</strong> As soon as a user signs up for Trackify, Stripe creates a Customer object, which will be used for future charges.</li>
            <li className="list-item"><strong className="text-base-content">Free Trial:</strong> Trackify offers a 7-day free trial without immediate payment, but the system anticipates a subscription after the trial ends.</li>
            <li className="list-item"><strong className="text-base-content">Subscription Initialization:</strong> Upon the conclusion of the trial, Stripe prepares for the transition to the paid subscription, pending user consent and payment information.</li>
            <li className="list-item"><strong className="text-base-content">Recurring Payments:</strong> After the paid subscription begins, Stripe handles monthly invoicing automatically, charging the stored PaymentMethod.</li>
            <li className="list-item"><strong className="text-base-content">Cancellation Handling:</strong> If a user chooses to cancel, they retain access until the end of the billing period. Stripe doesn&apos;t renew the subscription thereafter.</li>
          </ol>
        )
      },
      section4: {
        h2: 'Conclusion',
        p: (
          <p className="text-base-content/90 leading-relaxed mb-4">Stripe&apos;s infrastructure provides a seamless and flexible way to manage recurring payment models like that of Trackify.<br/>From the initiation of a free trial to the handling of subscription cancellations, Stripe simplifies operational complexities, ensuring a smooth transactional experience for both the provider and the end-users.</p>
        ),
        p2: (
          <p className="text-base-content/90 leading-relaxed">If you want to learn how to code a subscription model using React and NextJS, check out our <Link className="link link-primary" href="/blog/how-to-code-a-stripe-subscription-model-with-react-and-nextjs">Stripe Subscriptions with React and NextJS</Link> article.</p>
        )
      }
    },
    {
      slug: 'stripe-radar-vs-radar-for-fraud-teams',
      title: 'Stripe Radar: Machine Learning vs. Radar for Fraud Teams – What\'s the Difference?',
      tags: [
        { name: 'Chargeback', link: '/category/chargeback' },
        { name: 'Fee', link: '/category/fee' },
      ],
      date: 'November 30, 2023',
      related: [
        { title: 'Understanding Stripe Fees: A Comprehensive Guide', description: 'Stripe fees can be confusing. We\'ll break down the different fees and how to calculate them. We\'ll also cover how to reduce your Stripe fees.' },
        { title: '5 Effective Ways to Reduce Chargebacks on Stripe', description: 'Each chargeback can trigger significant fees and potentially lead to Stripe account closure. Let\'s take a look at how to protect your business from chargebacks.' },
      ],
      intro: 'Stripe Radar and Radar for Fraud Teams are two fraud prevention tools with difference pricing and fees. We\'ll compare them and help you decide which one is right for you.',
      image: {
        src: '/stripe_radar_report.c24666bf.jpg',
        alt: 'Screenshot of a Stripe Radar report showing some payments blocked by Radar',
      },
      section1: {
          h2: 'Stripe Radar\'s Machine Learning',
          p: (
            <p className="text-base-content/90 leading-relaxed mb-4">Stripe Radar&apos;s machine learning is a powerful, automated component of Stripe&apos;s fraud detection suite. It&apos;s built into the Stripe payment platform and uses advanced algorithms to analyze transaction patterns. It&apos;s designed to detect suspicious activities without any manual input, thus streamlining the fraud-prevention process.</p>
          ),
          ul: (
            <ul className="list-inside list-disc text-base-content/90 leading-relaxed">
              <li className="lsit-item">
                <strong className="text-base-content">Dynamic Fraud Detection:</strong> Machine learning models are constantly updated with data from the millions of businesses using Stripe, which helps to identify fraudulent patterns with high precision.</li>
              <li className="lsit-item">
                <strong className="text-base-content">Automatic Updates:</strong> The system continually adapts to new fraud trends, ensuring your business is protected against the latest threats with no additional effort on your part.</li>
              <li className="lsit-item">
                <strong className="text-base-content">Scalability:</strong> Machine learning scales with your business, providing automated fraud detection whether you&apos;re processing dozens or millions of transactions.</li>
            </ul>
          ),
      },
      section2: {
        h2: 'Radar for Fraud Teams',
        p: (
          <p className="text-base-content/90 leading-relaxed mb-4">On the other hand, Radar for Fraud Teams offers additional tools on top of Stripe Radar&apos;s foundational machine learning protections. It&apos;s tailored for businesses that require a more hands-on approach to managing fraud, providing enhanced features to fraud specialists or teams dedicated to this task.</p>
        ),
        ul: (
          <ul className="list-inside list-disc text-base-content/90 leading-relaxed">
            <li className="lsit-item"><strong className="text-base-content">Custom Rules:</strong> Users can set specific fraud detection rules based on their unique business insights and risk tolerance.</li>
            <li className="lsit-item"><strong className="text-base-content">Review Interface:</strong> A specialized dashboard allows fraud teams to review and act on flagged transactions easily.</li>
            <li className="lsit-item"><strong className="text-base-content">Rich Insights:</strong> Additional data points and machine learning insights are provided to help inform decision-making.</li>
          </ul>
        ),
      },
    section3: {
      h2: 'Stripe Radar Fee Comparison',
      p: (
        <p className="text-base-content/90 leading-relaxed mb-4">Now, let&apos;s talk about the &quot;Stripe Radar fee&quot;, which is a critical aspect for any business considering these services. Below we compare the fees for the two services.</p>
      ),
      table: (
        <div className="overflow-x-auto my-4 text-base-content border rounded-xl">
          <table className="table">
              <tr className="bg-base-200">
                <th>Stripe Service</th>
                <th>Fee Structure</th>
                <th>Features Included</th>
              </tr>
              <tr>
                <td>Stripe Radar&apos;s Machine Learning</td>
                <td>
                  Integrated with Stripe payments at <strong>no additional cost</strong>
                </td>
                <td>Automated fraud detection, Machine learning, Basic rule sets</td>
              </tr>
              <tr>
                <td>Radar for Fraud Teams</td>
                <td>
                  <strong>$0.02 USD</strong> per screened transaction
                </td>
                <td>
                  All features of machine learning, Custom rule sets, Review interface, Advanced insights
                </td>
              </tr>
              <tr>
                <td>Chargeback Protection (add-on)</td>
                <td>
                  <strong>0.4%</strong> per transaction
                </td>
                <td>No dispute fee, no evidence submission required</td>
              </tr>
          </table>
        </div>
      ),
      p2: (
        <p className="text-base-content/90 leading-relaxed">Please note that the pricing is subject to change, and it&apos;s always best to check the latest <Link href="https://stripe.com/radar/pricing" className="link link-primary">Stripe Radar pricing</Link> for the most accurate information.</p>
      )
      },
    section4: {
      h2: 'Key Takeaways',
      p: (
        <p className="text-base-content/90 leading-relaxed mb-4">To decide between Stripe Radar&apos;s machine learning and Radar for Fraud Teams, consider the following:</p>
      ),
      ul: (
        <ul className="list-inside list-disc text-base-content/90 leading-relaxed">
          <li className="lsit-item">Smaller businesses or those with less complex transactions may find the automated machine learning service sufficient.</li>
          <li className="lsit-item">Businesses with more significant transaction volumes or with specific fraud concerns may benefit from the additional options and control provided by Radar for Fraud Teams.</li>
          <li className="lsit-item">While there is a cost associated with Radar for Fraud Teams, the service can potentially save money by reducing chargebacks and improving fraud detection accuracy.</li>
        </ul>
      ),
      },
    section5: {
      h2: 'Conclusion',
      p: (
        <p className="text-base-content/90 leading-relaxed mb-4">The choice between using Stripe Radar’s machine learning capabilities and investing in Radar for Fraud Teams comes down to the specific needs of your business.<br/>Both offer compelling features to fight fraud, but the latter provides additional customization and control that might be necessary for some businesses.</p>
      ),
      p2: (
        <p className="text-base-content/90 leading-relaxed">If you&apos;re looking for a way to reduce chargebacks, consider adding <Link className="link link-primary" href="/">ByeDispute</Link> to your fraud prevention arsenal. It&apos;s a powerful tool that automatically detects duplicate payments, verifies customer emails, and checks for stolen credit cards.</p>
      ),
      }
    },
    {
      slug: 'how-to-calculate-stripe-fees',
      title: 'Understanding Stripe Fees: A Comprehensive Guide',
      tags: [
        { name: 'Fee', link: '/category/fee' },
      ],
      date: 'November 17, 2023',
      related: [
        { title: 'Stripe Radar: Machine Learning vs. Radar for Fraud Teams – What\'s the Difference?', description: 'Stripe Radar and Radar for Fraud Teams are two fraud prevention tools with difference pricing and fees. We\'ll compare them and help you decide which one is right for you.' },
      ],
      intro: 'Stripe fees can be confusing. We\'ll break down the different fees and how to calculate them. We\'ll also cover how to reduce your Stripe fees.',
      image: {
        src: '/list-of-stripe-fees.7e381040.jpg',
        alt: 'A Stripe screenshot showing the list of Stripe fees',
      },
      section1: {
        h2: 'What is Stripe?',
        p: (
          <p className="text-base-content/90 leading-relaxed">
            <Link href="https://stripe.com/" className="link link-primary">Stripe</Link> is a comprehensive payment processing platform designed to facilitate online and in-app transactions. It&apos;s a one-stop shop for handling everything from secure credit card payments to direct bank transfers. With Stripe, you can accept payments from around the globe, manage recurring subscriptions, and much more.
          </p>
        ),
      },
      section2: {
        div: (
          <div className="space-y-6 md:space-y-12">
            <section>
              <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content">Stripe Standard Account Fees</h2>
              <p className="text-base-content/90 leading-relaxed">With the Standard plan, there are no setup fees, monthly fees, or hidden charges. You pay only for what you use, which makes Stripe a great option for businesses of all sizes. Let’s delve into the specific fees you’ll encounter:</p>
            </section>
            <section>
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">1. Per Transaction Fees</h3>
              <p className="text-base-content/90 leading-relaxed">Each successful card charge incurs a fee of <strong className="text-base-content">2.9% + 30¢</strong>. The simplicity of this structure means that regardless of the type or brand of card used by your customer, the fee remains the same.<br/>For example, if you process a $100 payment, the fee would be $2.90 (2.9% of $100) plus $0.30, totaling $3.20.</p>
            </section>
            <section>
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">2. Additional Fees for Special Circumstances</h3>
              <ul className="list-inside list-disc text-base-content/90 leading-relaxed">
                <li className="list-item">Manually Entered Cards: If you enter card details manually, an additional fee of <strong className="text-base-content">0.5%</strong> applies.</li>
                <li className="list-item">International Cards: Transactions with cards from outside your country will incur an extra fee of <strong className="text-base-content">1.5%</strong>.</li>
                <li className="list-item">Currency Conversion: If the transaction requires a currency conversion, a fee of <strong className="text-base-content">1%</strong> is added.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">3. Bank Debits and Transfers</h3>
              <p className="text-base-content/90 leading-relaxed">For bank debits like ACH Direct Debit, expect a fee of <strong className="text-base-content">0.8%</strong>, although there’s a cap at $5. This means large transactions won’t incur exorbitant fees.</p>
            </section>
            <section>
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">4. Additional Payment Methods</h3>
              <p className="text-base-content/90 leading-relaxed">Stripe also enables you to accept other payment methods such as iDEAL, which start at <strong className="text-base-content">80¢</strong> per transaction. As payment preferences vary by region, supporting local methods can significantly boost conversion rates.</p>
            </section>
            <section>
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">5. Included Features at No Extra Cost</h3>
              <p className="text-base-content/90 leading-relaxed">Stripe’s Standard account comes packed with 100+ features, including:</p>
              <ul className="list-inside list-disc text-base-content/90 leading-relaxed">
                <li className="list-item">Embedded and customizable checkouts</li>
                <li className="list-item">Recurring billing and subscription management</li>
                <li className="list-item">PCI compliance to help safeguard payment information</li>
                <li className="list-item">Multi-currency support, covering 135+ currencies</li>
                <li className="list-item">Unified payouts and real-time reporting tools</li>
                <li className="list-item">24/7 customer support</li>
              </ul>
            </section>
          </div>
        ),
      },
      section3: {
        h2: 'Dispute and Refund Fees',
        p: (
          <p className="text-base-content/90 leading-relaxed">In the event of a dispute (chargeback), Stripe charges a fee of <strong className="text-base-content">$15.00</strong> per incident. This fee applies whether or not the dispute is resolved in your favor. It&apos;s also worth noting that the original transaction fees aren&apos;t returned in case of refunds. Here are <Link className="link link-primary" href="/5-effective-ways-to-reduce-chargebacks-on-stripe">5 tips to help you avoid disputes</Link>.</p>
        ),
      },
      section4: {
        image: {
          src: '/stripe_payout_currency_example.fde15ae5.jpg',
          alt: 'A Stripe bank accounts setup showing the payout fees for USD and EUR',
        },
        h2: 'Getting Paid with Stripe',
        p: (
          <p className="text-base-content/90 leading-relaxed">Stripe allows flexibility in how and when you get paid. By default, you can expect payouts to your bank account on a 2 to 7 day rolling basis, after the initial transaction. You can also opt for weekly or monthly payouts if that better suits your business operations.<br/>If you&apos;re sending money to a bank account outside the country you&apos;re operating in, you can expect an additional fee of <strong className="text-base-content">1%</strong> per payout. You can <Link href="https://stripe.com/resources/more/payouts-explained" className="link link-primary">learn more about Stripe&apos;s payout fees with this guide</Link>.</p>
        ),
      },
      section5: {
        h2: 'Understanding Taxes and Compliance',
        p: (
          <p className="text-base-content/90 leading-relaxed">Depending on your location, Stripe may charge taxes on its services. Make sure to provide accurate tax information to ensure proper invoicing. Stripe&apos;s platform is designed to maintain rigorous compliance with financial regulations worldwide, offering peace of mind to its users.</p>
        ),
      },
      section6: {
        h2: 'Putting It All Together',
        p: (
          <p className="text-base-content/90 leading-relaxed">Bringing it all together, Stripe’s Standard account offers a straightforward and transparent pricing model. Understanding each fee can give you a clear picture of what to expect and help you calculate the net amount you’ll receive from customer payments. By managing your Stripe transactions effectively, you can optimize your earnings and streamline your payment operations.</p>
        ),
      },
    },
    {
      slug: '5-effective-ways-to-reduce-chargebacks-on-stripe',
      title: '5 Effective Ways to Reduce Chargebacks on Stripe',
      tags: [
        { name: 'Chargeback', link: '/category/chargeback' },
      ],
      date: 'November 10, 2023',
      related: [
        { title: 'Stripe Radar: Machine Learning vs. Radar for Fraud Teams – What\'s the Difference?', description: 'Stripe Radar and Radar for Fraud Teams are two fraud prevention tools with difference pricing and fees. We\'ll compare them and help you decide which one is right for you.' },
      ],
      intro: 'Each chargeback can trigger significant fees and potentially lead to Stripe account closure. Let\'s take a look at how to protect your business from chargebacks.',
      image: {
        src: '/stripeLowDisputeActivity.7869986f.jpg',
        alt: 'Stripe dashboard showing low dispute activity rate',
      },
      section1: {
        h2: 'Introduction',
        p: (
          <p className="text-base-content/90 leading-relaxed">For businesses utilizing Stripe for payment processing, chargebacks and fraud can be a critical concern, especially for newer accounts. A single chargeback can trigger significant fees and potentially lead to account closure.<br/>It&apos;s crucial to establish robust defenses against fraudulent activity to safeguard your revenue and maintain your account&apos;s standing. Below are five vital strategies to secure your Stripe account against chargebacks and fraud.</p>
        ),
      },
      section2: {
        h3: '1. Implement 3D Secure Authentication',
        p: (
          <p className="text-base-content/90 leading-relaxed">Introducing an extra layer of security through 3D Secure (3DS) can significantly decrease fraudulent transactions.<br/>Stripe&apos;s Radar, a machine learning tool included with standard accounts, already offers great protection but can be enhanced by utilizing 3DS whenever possible. By <Link href="https://dashboard.stripe.com/settings/radar/rules" className="link link-primary">enabling a Radar rule that requests 3DS</Link> based on card issuer recommendations, your business can further secure each transaction.</p>
        ),
        image: {
          src: '/stripe_radar_3ds_rule.529808b4.jpg',
          alt: 'Stripe Radar rule showing 3DS recommendation setup to prevent fraud',
        },
      },
      section3: {
        h3: '2. Enforce Card Verification Code (CVC) Checks',
        p: (
          <p className="text-base-content/90 leading-relaxed">One of the simplest yet most effective measures to prevent fraud is to verify the card&apos;s CVC. Ensure that your Stripe account settings are configured to reject transactions if the CVC check fails.<br/>This setup helps prevent unauthorized payments and minimizes the risk of chargebacks due to stolen card information.</p>
        ),
        image: {
          src: '/stripe_radar_cvc_rul.c5076d4b.jpg',
          alt: 'Stripe Radar showing the failed CVC rule in action to prevent fraud',
        },
      },
      section4: {
        h3: '3. Conduct Preemptive Refunds',
        p: (
          <p className="text-base-content/90 leading-relaxed">When encountering any suspicious activity, such as duplicate payments, questionable email addresses, or alerts from Stripe&apos;s Early Fraud Warning system, it&apos;s advisable to issue a refund proactively.<br/>While it may feel counterintuitive, refunding potentially fraudulent transactions can save you from the much larger headache of chargebacks and the associated fees.</p>
        ),
      },
      section5: {
        h3: '4. Streamline the Refund Process for Customers',
        p: (
          <p className="text-base-content/90 leading-relaxed">To reduce the likelihood of chargebacks, provide clear and accessible refund policies. Include a direct refund link on your landing page, within your FAQ section, and <Link href="https://dashboard.stripe.com/settings/public" className="link link-primary">in the statement descriptor</Link> that appears on customer bank statements.<br/>Also, keep the lines of communication open by offering responsive customer support, addressing concerns promptly before they escalate into disputes.</p>
        ),
        image: {
          src: '/stripe_statement_descriptor.6b1338a3.jpg',
          alt: 'Stripe account setup showing how to add a statement descriptor to prevent fraud',
        },
      },
      section6: {
        h3: '5. Handle Disputes Wisely',
        p: (
          <p className="text-base-content/90 leading-relaxed">If a dispute occurs, reach out to the customer immediately and propose a resolution, such as a complimentary product or service alongside their refund, in exchange for withdrawing the dispute.<br/>Should the situation advance to the dispute resolution process, be ready to provide evidence demonstrating customer engagement and their use of the product or service. Documentation such as usage logs or API records can be compelling proof.</p>
        ),
      },
      section7: {
        h3: '6. Bonus Tip: Opt for Advanced Dispute Prevention Services',
        p: (
          <p className="text-base-content/90 leading-relaxed">Enhance your fraud prevention arsenal with services like <Link className="link link-primary" href="/">ByeDispute</Link>, which offer sophisticated features to preempt disputes.<br/>These tools verify the validity of customer emails, detect duplicate payments, and check for stolen credit cards, keeping chargebacks at bay. Investing in such services can significantly safeguard your Stripe account&apos;s integrity and your business&apos;s revenue.</p>
        ),
      },
      section8: {
        h2: 'Conclusion',
        p: (
          <p className="text-base-content/90 leading-relaxed">By integrating these strategies within your Stripe account&apos;s operations, you&apos;ll effectively reduce the risk of chargebacks and fortify your defenses against fraudulent transactions. Remember that maintaining rigorous security measures and delivering exceptional customer service are your best weapons in the fight against fraud.<br/>Secure your transactions, instill confidence in your customers, and enjoy a smoother, more reliable payment processing experience with Stripe.</p>
        ),
      },
    },
    {
      slug: 'how-to-code-a-stripe-subscription-model-with-react-and-nextjs',
      title: 'Code a Stripe Subscription Model With React and Nextjs',
      tags: [
        { name: 'Payment', link: '/category/payment' },
        { name: 'API', link: '/category/api' },
      ],
      date: 'November 2, 2023',
      related: [
        { title: 'Stripe Subscriptions Explained With a Real-World Example', description: 'Let\'s set up up and manage a subscription model for a fictional habit tracker app called Trackify.' },
      ],
      intro: 'Stripe subscriptions are a great way to monetize your AI tool. We\'ll show you how to set up a subscription model using React and NextJS',
      image: {
        src: '/stripe_mrr_chart.e5d8f9e5.jpg',
        alt: 'A stripe dashboard showing a Monthly Recurring Revenue (MRR) chart',
      },
      section1: {
        h2: 'Introduction',
        p: (
          <p className="text-base-content/90 leading-relaxed">Subscriptions are the lifeline of many online businesses. They provide predictable revenue and help shape a loyal user base. For your landing page generator app (AI tool), charging $15 per month, we&apos;ll guide you through setting up Stripe Subscriptions using NextJS.<br/>If you want a more in-depth guide on how Stripe Subscriptions work, check out our <Link className="link link-primary" href="/how-stripe-subscriptions-work">Stripe Subscriptions Explained</Link> article.</p>
        ),
      },
      section2: {
        h2: 'Setting Up Stripe Subscriptions',
        p: (
          <>
          <p className="text-base-content/90 leading-relaxed">No code yet! Start by configuring your Stripe account:</p>
          <ol className="list-inside list-disc text-base-content/90 leading-relaxed">
            <li className="list-item">Register an account at Stripe and sign in.</li>
            <li className="list-item">Add your landing page generator as a new product under the &quot;Products&quot; section in Stripe.</li>
            <li className="list-item">Create a monthly subscription plan for $15 in the &quot;Pricing&quot; section of your product.</li>
            <li className="list-item">Note down the API keys from the &quot;Developers&quot; section for later use.</li>
          </ol>
          </>
        ),
      },
      section3: {
        h2: 'Creating a Stripe Checkout Session',
        p: (
          <p className="text-base-content/90 leading-relaxed">To handle payments, you&apos;ll need a Stripe Checkout session. This calls for some coding:</p>
        ),
        pre: (
          <pre className="text-xs font-mono bg-neutral text-neutral-content p-6 rounded-xl my-4 overflow-x-scroll">
            <code>{`// install with npm install stripe
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) =&gt; {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price: 'price_xxx', // replace with your price ID
            quantity: 1,
        }],
        mode: 'subscription',
        success_url: 'https://yourdomain.com/success',
        cancel_url: 'https://yourdomain.com/cancel',
    });

    res.redirect(303, session.url);
};`}</code>
          </pre>
        ),
        p2: (
          <p className="text-base-content/90 leading-relaxed">Place the above serverless function within your NextJS project to initiate checkout sessions.</p>
        )
      },
      section4: {
        h2: 'Handling Subscriptions on the Frontend',
        p: (
          <p className="text-base-content/90 leading-relaxed">Create a subscription button on your app&apos;s frontend to allow users to start the checkout process. When clicked, it should call your serverless function to create a Stripe Checkout session:</p>
        ),
        pre: (
          <pre className="text-xs font-mono bg-neutral text-neutral-content p-6 rounded-xl my-4 overflow-x-scroll">
            <code>{`// Replace with your actual API endpoint
const checkoutUrl = 'https://api.yourdomain.com/create-checkout-session';

const subscribeUser = async () =&gt; {
    const res = await fetch(checkoutUrl);
    const { url } = await res.json();
    window.location.href = url;
};

// Usage in your component
&lt;button onClick={subscribeUser}&gt;Subscribe Now&lt;/button&gt;`}</code>
          </pre>
        ),
    },
    section5: {     
      h2: 'Handling Subscription Webhook Events',
      p: (
        <p className="text-base-content/90 leading-relaxed">Once your checkout session is complete, you will need to handle subscription changes. Stripe uses webhooks to notify you of subscription events in real time. In your landing page generator, you should listen for these events to activate or deactivate user subscriptions accordingly.</p>
      ),
      section: (
        <>
      <section>
        <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">
          Setting Up Your Webhook Listener
        </h3>
        <p className="text-base-content/90 leading-relaxed">
          Create a serverless function in your Vercel project to listen for Stripe webhook events:
        </p>
        <pre className="text-xs font-mono bg-neutral text-neutral-content p-6 rounded-xl my-4 overflow-x-scroll">
        <code>{`export default async (req, res) => {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (req.method === 'POST') {
        const sig = req.headers['stripe-signature'];
        let event;

        try {
            event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
        } catch (err) {
            console.log(\`⚠️  Webhook signature verification failed.\`, err.message);
            return res.status(400).send(\`Webhook Error: \${err.message}\`);
        }

        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed':
                const session = event.data.object;
                // Handle checkout session completion, provide access
                break;
            case 'invoice.paid':
              // Continue to provision the subscription as payments keep coming in
                break;
            case 'invoice.payment_failed':
              // The payment failed or the subscription has a problem, alert the user, or revoke access
                break;
            // ... handle other event types
            default:
                console.log(\`Unhandled event type \${event.type}\`);
        }

        // Return a 200 response to acknowledge receipt of the event
        res.json({ received: true });
    } else {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }
};`}</code>
        </pre>
      </section>
    </>
    ),
    section2: (
      <>
      <section>
        <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content">Activating and Deactivating User Subscriptions</h3>
        <p className="text-base-content/90 leading-relaxed">When handling these webhook events, you&apos;ll want to update user&apos;s subscription status in your own system. For example:</p>
        <pre className="text-xs font-mono bg-neutral text-neutral-content p-6 rounded-xl my-4 overflow-x-scroll">
          <code>{`// pseudo-code: activate or deactivate user based on Stripe webhook event
function manageUserSubscription(event) {
    if (event.type === 'checkout.session.completed') {
        // Find user by checkout session ID or customer ID
        // Activate their subscription in your system
    } else if (event.type === 'customer.subscription.deleted' || event.type === 'invoice.payment_failed') {
        // Find user and deactivate subscription in your system
    }
    // Other webhook events can be handled similarly
}`}</code>
        </pre>
      </section>
      </>
    ),
    p3: (
      <p className="text-base-content/90 leading-relaxed">Remember to protect your webhook endpoint. Only Stripe should be calling this function, so verify the event with <code className="text-xs font-mono bg-base-300 px-1 py-0.5 rounded">stripe.webhooks.constructEvent</code> as shown above. Also, ensure that your Stripe secret and endpoint secrets are stored securely and not hardcoded into your codebase.</p>
    ),
    p4: (
      <p className="text-base-content/90 leading-relaxed">By setting up webhook handling properly, you ensure that your application remains in sync with the reality of your users&apos; subscription status on Stripe.</p>
    ),
    },
    section6: {
      h2: 'Cancellation and Refunds',
      p: (
        <>
        <p className="text-base-content/90 leading-relaxed">Provide users the ability to cancel their subscriptions from within your app. Tie this front-end feature to a backend operation that alters the subscription status in Stripe:</p>
        <pre className="text-xs font-mono bg-neutral text-neutral-content p-6 rounded-xl my-4 overflow-x-scroll">
          <code>{`// Serverless function to cancel subscription
export default async (req, res) => {
    const { subscriptionId } = req.body;
    const deleted = await stripe.subscriptions.del(subscriptionId);
    res.json({ confirmed: deleted });
};`}</code>
</pre>
        </>
      ),
      p2: (
        <p className="text-base-content/90 leading-relaxed">Remember to clearly define your refund policy and execute refunds through the Stripe API or Dashboard as needed.</p>
      ),
    },
    section7: {
      h2: 'Summary',
      p: (
        <p className="text-base-content/90 leading-relaxed">Throughout this guide, we have encapsulated how to utilize <Link href="https://stripe.com/docs/subscriptions" className="link link-primary">Stripe Subscriptions</Link> for a $15 monthly landing page generator.<br/>Key takeaways include setting up subscriptions, leveraging Stripe for automated billing, responding to payment events with webhooks, and securely adapting to subscription changes via a Next.js serverless function.</p>
      ),
    }
    }
  ];
  
  export default articles;
  