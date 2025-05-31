import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Deep Learn Academy is dedicated to teaching children how to make the
          most of cutting-edge AI technology, sparking a critical interest in AI 
          at an early stage.
        </p>
        <p className="mt-4">
          Provide your children with the head start necessary to foster a strong
          interest in one of the state-of-the-art fields in computer science: AI! 
        </p>
        <p className="mt-4">
          AI is an advanced topic, but with our skilled teaching cohort, 
          your child can obtain strong foundational knowledge in AI.
        </p>
        <p className="mt-4">
          Our program is catered to younger students, and provides fun and engaging
          experiences that is memorable and possibly career defining! We list the
          benefits of joining our course below:
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Students learn key foundational concepts in AI (Deep Learning, Self Driving Cars, LLMs)',
            'End of course AI project presentations',
            'Completely free course!',
            'Amazon/Cold Stone Creamery gift card for all students!',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By the end of the course, we will host an event for students to present their AI projects. Parents/guardians are invited!
        </p>
        {/* <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Read more{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p> */}
      </Container>
    </section>
  )
}
