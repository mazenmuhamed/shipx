'use client'

import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { BlurFade } from '@/modules/animations/blur-fade'
import { TextAnimate } from '@/modules/animations/text-animate'

const items = [
  {
    id: 'item-1',
    question: 'What is ShipX?',
    answer:
      'ShipX is a comprehensive social media and ecommerce platform that combines the power of social networking with seamless online shopping. Connect with friends, discover new products, share your experiences, and shop from your favorite brands all in one place. Our platform makes it easy for businesses to showcase their products while building meaningful connections with their customers.',
  },
  {
    id: 'item-2',
    question: 'How do I start selling on ShipX?',
    answer:
      'Getting started as a seller is simple! Sign up for a business account, complete your profile verification, and upload your first products. Our seller dashboard provides everything you need to manage inventory, process orders, and track sales. We offer both free and premium seller plans with advanced analytics and marketing tools.',
  },
  {
    id: 'item-3',
    question: 'Is my personal and payment information secure?',
    answer:
      'Absolutely! We use industry-standard encryption and security measures to protect your data. All payment transactions are processed through secure, PCI-compliant payment gateways. We never store your full payment details, and you can enable two-factor authentication for added security.',
  },
  {
    id: 'item-4',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. For business accounts, we also offer invoice billing and custom payment terms. All transactions are secure and encrypted.',
  },
  {
    id: 'item-5',
    question: 'How does shipping and returns work?',
    answer:
      'Shipping options vary by seller and location. Many items offer free shipping, with expedited options available. Return policies are set by individual sellers, but we ensure all returns are processed fairly. Our customer protection program covers qualifying purchases, and we provide full support for any issues.',
  },
  {
    id: 'item-6',
    question: 'Can I upgrade my account type?',
    answer:
      "Yes! You can upgrade from a personal account to a business account, or from basic to premium plans at any time. Upgrades take effect immediately, and you'll only pay the prorated difference for the current billing period.",
  },
  {
    id: 'item-7',
    question: 'What are the benefits of premium business accounts?',
    answer:
      'Premium business accounts include advanced analytics, priority customer support, enhanced marketing tools, bulk product management, custom storefronts, integration APIs, and reduced transaction fees. Enterprise plans also offer dedicated account management, custom integrations, and white-label options.',
  },
  {
    id: 'item-8',
    question: 'What is your refund and cancellation policy?',
    answer:
      "You can cancel premium subscriptions at any time, and you'll retain access to premium features until the end of your billing period. For purchases, refund eligibility depends on the seller's return policy and our buyer protection guidelines. Digital products and services may have different refund terms. Contact our support team for specific cases.",
  },
]

export function PricingFAQsSection() {
  return (
    <BlurFade direction="up" inView inViewMargin="-50px">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:gap-20 md:gap-14 md:px-8">
        <div className="mx-auto text-center">
          <TextAnimate
            as="h2"
            duration={0.4}
            once
            className="hidden text-5xl font-bold text-balance sm:block"
          >
            Frequently asked questions
          </TextAnimate>
          <h2 className="block text-3xl font-bold text-balance sm:hidden">
            FAQs
          </h2>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {items.map(item => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-secondary text-secondary-foreground rounded-2xl border-none px-6 py-2"
              >
                <AccordionTrigger className="cursor-pointer text-[15px] hover:no-underline md:text-[17px]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-secondary-foreground/70 text-sm md:text-base">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="text-muted-foreground mt-6 px-8 text-center text-xs sm:text-sm lg:text-base">
            Still have more questions? Find answers in our{' '}
            <Link href="#" className="text-primary font-medium hover:underline">
              help center.
            </Link>
          </p>
        </div>
      </section>
    </BlurFade>
  )
}
