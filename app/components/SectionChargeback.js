  'use client';

export default function ChargebackSection({ title, content }) {
    return (
        <section className="mt-12 mb-24 md:mb-32 max-w-3xl mx-auto text-center">
            <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6 md:mb-12">
                {title}
            </h1>
            <p className="md:text-lg opacity-80 max-w-xl mx-auto">
                {content}
            </p>
        </section>
    );
}