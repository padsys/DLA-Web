// Copyright (c) 2025, University of California, Merced. All rights reserved.

// This file is part of the Deep Learn Academy software package developed by
// the team members of Prof. Xiaoyi Lu's group (PADSYS Lab) at the University
// of California, Merced.

// For detailed copyright and licensing information, please refer to the license
// file LICENSE in the top level directory.

import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/padsys_blue_logo.png'
import xiaoyi from '@/images/luxi.jpg'
import darren from '@/images/DarrenNg.jpg'
import adam from '@/images/adam.png'
import aryana from '@/images/aryana.jpeg'
import jasleen from '@/images/jasleen.jpeg'

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8132L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
    </svg>
  )
}

export function Author() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pt-8 pb-3 sm:scroll-mt-32 sm:pt-10 sm:pb-16 lg:pt-16"
    >
      <div className="absolute inset-x-0 top-1/2 bottom-0 mask-[linear-gradient(transparent,white)] text-slate-900/10">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-10 h-28 w-28 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-40 md:w-40 md:[shape-outside:circle(40%)] lg:mr-10 lg:h-48 lg:w-48">
            <a href="https://padsys.org/">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 12rem, (min-width: 768px) 10rem, 7rem"
            />
            </a>
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            {/* <SectionHeading number="5" id="author-title">
              Author
            </SectionHeading> */}
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Organizers:
              <span className="block text-blue-600">PADSYS –</span> at UC Merced
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Experienced instructors from our research lab are dedicated to creating a fun, 
              supportive, and engaging learning environment for your child. Our carefully selected 
              mentors tailor their guidance to meet each student's academic needs, ensuring an 
              inclusive and interactive experience. At PADSYS, we take pride in our strong track 
              record of student success and active involvement in advanced topics—across all age 
              and skill levels. This summer, your child will join a talented and motivated cohort, 
              ready to explore the frontiers of AI and technology. 
            </p>
            <p className="mt-8">
              <Link
                href="https://padsys.org/"
                className="inline-flex items-center text-base font-medium tracking-tight text-slate-900"
              >
                {/* <XIcon className="h-10 w-10 fill-current" /> */}
                <span className="ml-4">More about PADSYS</span>
              </Link>
            </p>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className="block text-blue-600">Our Team</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32">

            {/* Author 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-40 md:w-40 md:[shape-outside:circle(40%)] lg:mr-10 lg:h-48 lg:w-48">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={xiaoyi}
                  alt="XL"
                  sizes="(min-width: 1024px) 12rem, (min-width: 768px) 10rem, 7rem"
                />
              </div>
              <div className="mt-4">
                <Link href="https://padsys.org/people/xiaoyi-lu.html">
                <h2 className="text-2xl font-semibold text-gray-800">Xiaoyi Lu</h2>
                </Link>
                <p className="mt-2 text-gray-600">Associate Professor</p>
              </div>
            </div>

            {/* Author 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-40 md:w-40 md:[shape-outside:circle(40%)] lg:mr-10 lg:h-48 lg:w-48">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={darren}
                  alt="DN"
                  sizes="(min-width: 1024px) 12rem, (min-width: 768px) 10rem, 7rem"
                />
              </div>
              <div className="mt-4">
                <Link href="https://padsys.org/people/darren-ng.html">
                <h2 className="text-2xl font-semibold text-gray-800">Darren Ng</h2>
                </Link>
                <p className="mt-2 text-gray-600">PhD Student</p>
              </div>
            </div>

            {/* Author 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-40 md:w-40 md:[shape-outside:circle(40%)] lg:mr-10 lg:h-48 lg:w-48">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={adam}
                  alt="AW"
                  sizes="(min-width: 1024px) 12rem, (min-width: 768px) 10rem, 7rem"
                />
              </div>
              <div className="mt-4">
                <Link href="https://padsys.org/">
                <h2 className="text-2xl font-semibold text-gray-800">Adam Weingram</h2>
                </Link>
                <p className="mt-2 text-gray-600">PhD Student</p>
              </div>
            </div>

            {/* Author 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-40 md:w-40 md:[shape-outside:circle(40%)] lg:mr-10 lg:h-48 lg:w-48">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={aryana}
                  alt="AN"
                  sizes="(min-width: 1024px) 12rem, (min-width: 768px) 10rem, 7rem"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-800">Aryana Nemum</h2>
                <p className="mt-2 text-gray-600">UG Student</p>
              </div>
            </div>

            {/* Author 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-40 md:w-40 md:[shape-outside:circle(40%)] lg:mr-10 lg:h-48 lg:w-48">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={authorImage}
                  alt="SC"
                  sizes="(min-width: 1024px) 12rem, (min-width: 768px) 10rem, 7rem"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-800">Still Ben Cabal</h2>
                <p className="mt-2 text-gray-600">UG Student</p>
              </div>
            </div>

            {/* Author 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-40 md:w-40 md:[shape-outside:circle(40%)] lg:mr-10 lg:h-48 lg:w-48">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={jasleen}
                  alt="JB"
                  sizes="(min-width: 1024px) 12rem, (min-width: 768px) 10rem, 7rem"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-800">Jasleen Bhandal</h2>
                <p className="mt-2 text-gray-600">UG Student</p>
              </div>
            </div>

            {/* Author 7 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-40 md:w-40 md:[shape-outside:circle(40%)] lg:mr-10 lg:h-48 lg:w-48">
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src={authorImage}
                  alt="NB"
                  sizes="(min-width: 1024px) 12rem, (min-width: 768px) 10rem, 7rem"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-800">Nachiket Bidarkundi</h2>
                <p className="mt-2 text-gray-600">HS Student</p>
              </div>
            </div>


          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
