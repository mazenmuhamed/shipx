import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { BlurFade } from '@/modules/animations/blur-fade'
import { TextAnimate } from '@/modules/animations/text-animate'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Jonathan Yombo',
    role: 'Software Engineer',
    image: '/images/users/user-1.png',
    quote:
      'ShipX is a game-changer for developers. It simplifies the shipping process, allowing us to focus on building great products without worrying about logistics.',
  },
  {
    name: 'Yves Kalume',
    role: 'Degital Marketer',
    image: '/images/users/user-2.png',
    quote:
      'I Love ShipX! It has transformed the way I manage my shipping needs. The platform is intuitive, efficient, and has saved me countless hours of work.',
  },
  {
    name: 'Yucel Faruksahan',
    role: 'Business Owner',
    image: '/images/users/user-3.jpg',
    quote:
      'ShipX is a fantastic tool for developers. It streamlines the shipping process, making it easier to manage logistics and focus on what really matters - building great software.',
  },
  {
    name: 'Anonymous author',
    role: 'Doing something',
    image: '/images/users/user-4.jpg',
    quote:
      'ShipX has the vipes of great community and support. The team is always ready to help, and the platform is constantly improving with new features and updates.',
  },
  {
    name: 'Shekinah Tshiokufila',
    role: 'Marketing Manager',
    image: '/images/users/user-5.png',
    quote:
      'I mange my bussiness with ShipX, and it was the best decision I ever made. The platform is user-friendly, and the support team is always there to help with any issues.',
  },
  {
    name: 'Oketa Fred',
    role: 'Fullstack Developer',
    image: '/images/users/user-6.png',
    quote:
      'ShipX has revolutionized the way I handle shipping logistics. The platform is easy to use, and the features are designed with developers in mind. I highly recommend it to anyone looking to streamline their shipping process.',
  },
  {
    name: 'Zeki',
    role: 'Founder of ChatExtend',
    image: '/images/users/user-7.png',
    quote:
      'ShipX is a must-have tool for any developer. It simplifies the shipping process, allowing us to focus on building great products without worrying about logistics.',
  },
  {
    name: 'Khatab Wedaa',
    role: 'Doctor',
    image: '/images/users/user-9.jpg',
    quote:
      "We can’t imagine a business & social media platform without ShipX, They're just changed most of markting and business proccess with their amazing features.",
  },
  {
    name: 'Rodrigo Aguilar',
    role: 'Artist & Designer',
    image: '/images/users/user-10.jpg',
    quote:
      'ShipX is one of the best ways to stay on top of the latest matker trends, social advertising, and business strategies. I love it!',
  },
  {
    name: 'Eric Ampire',
    role: 'Traveler & Content Creator',
    image: '/images/users/user-11.png',
    quote:
      'Powered by Ai features, ShipX is the future of social media and independent business world.',
  },
  {
    name: 'Joseph Kitheka',
    role: 'Graphic Designer',
    image: '/images/users/user-8.jpg',
    quote:
      'ShipX is one of my favorite social media platforms. It has a great community and the features are top-notch.  I love having access to a ton of “real world examples” to see how different stores are built and how they work.',
  },
  {
    name: 'Roland Tubonge',
    role: 'Entrepreneur',
    image: '/images/users/user-12.jpg',
    quote:
      'ShipX is one of those tabs I never close. It’s the largest community of users and business owners I know.',
  },
]

const chunkArray = (
  array: Testimonial[],
  chunkSize: number,
): Testimonial[][] => {
  const result: Testimonial[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize))
  }
  return result
}

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3),
)

export function TestimonialSection() {
  return (
    <section className="flex w-full flex-col gap-12">
      <div className="flex flex-col gap-4 text-center">
        <TextAnimate
          as="h2"
          duration={0.4}
          once
          className="text-3xl font-bold md:text-4xl"
        >
          What our users are saying.
        </TextAnimate>
        <TextAnimate
          as="p"
          delay={0.7}
          animation="blurIn"
          once
          className="text-muted-foreground text-sm"
        >
          We are proud to have a community of over 100,000 users who trust us to
          build their bussinesses and sharing their experiences.
        </TextAnimate>
      </div>
      <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="dark:to-background/50 to-background/40 absolute inset-0 z-40 bg-gradient-to-b from-transparent" />
        {testimonialChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="space-y-3">
            {chunk.map(({ name, role, quote, image }, index) => (
              <BlurFade
                inView
                key={index}
                direction="up"
                delay={0.2 + index * 0.1}
              >
                <Card className="rounded-3xl shadow-none">
                  <CardContent className="grid gap-3">
                    <Avatar className="size-9">
                      <AvatarImage
                        alt={name}
                        src={image}
                        loading="lazy"
                        width="120"
                        height="120"
                      />
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{name}</h3>
                      <span className="text-muted-foreground block text-sm tracking-wide">
                        {role}
                      </span>
                      <blockquote className="mt-3 text-[15px]">
                        <p className="">{quote}</p>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
