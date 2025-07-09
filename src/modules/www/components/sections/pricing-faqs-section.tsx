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
      'ShipX is the world’s largest UI & UX reference library. It’s always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more. Join hundreds of thousands of designers using ShipX to accelerate research, get decision-makers on board, and start designing faster.',
  },
  {
    id: 'item-2',
    question: 'How often do you update the library?',
    answer:
      'We have been publishing new apps every week since 2018, and we’ll update existing apps whenever they push a major design release. Subscribe to a paid plan to see how apps like Airbnb evolved since 2018.',
  },
  {
    id: 'item-3',
    question: 'Do you have discounts for students and educators?',
    answer: 'Yes! Check out the ShipX for Education program for more details.',
  },
  {
    id: 'item-4',
    question: 'What forms of payment do you accept?',
    answer:
      'Most major credit cards are accepted for all plans. Enterprise plans can also request to be invoiced and paid by wire transfer. Find out more about our payment methods here.',
  },
  {
    id: 'item-5',
    question: 'Can I cancel my subscription?',
    answer:
      'You can cancel your ShipX subscription at anytime. Do note that you will not get a refund for cancelling your subscription. However, you can continue to access the membership features until the end of your billing cycle. Find out how to cancel your subscription here.',
  },
  {
    id: 'item-6',
    question: 'How do I switch from a Pro plan to a Team plan?',
    answer:
      'You can cancel your Pro plan and subscribe to a Team plan. For detailed instructions, click here.',
  },
  {
    id: 'item-7',
    question: 'What is the difference between Enterprise plan and Team plan?',
    answer:
      'Team plan enables teams to work more effectively together, with features like team collections and team management. Enterprise plan has all the Team plan capabilities, and it offers advanced security features like SAML Single Sign-On (SSO) and SCIM user provisioning, priority support and training, enhanced security, and more. Learn more about the Enterprise Plan by requesting a demo for a complete overview.',
  },
  {
    id: 'item-8',
    question: 'What is your refund policy?',
    answer:
      'We do not offer refunds. If you cancel your plan before the next renewal cycle, you will retain access to paid features until the end of your subscription period. When your subscription expires, you will lose access to paid features and all data associated with those features. If you have any questions about what you’ve been charged, please contact us.',
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
