// Copyright (c) 2025, University of California, Merced. All rights reserved.

// This file is part of the Deep Learn Academy software package developed by
// the team members of Prof. Xiaoyi Lu's group (PADSYS Lab) at the University
// of California, Merced.

// For detailed copyright and licensing information, please refer to the license
// file LICENSE in the top level directory.

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/darren_DLA.png'
import DLA_logo from '@/images/DLA_logo.png'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-blue-600 lg:justify-start">
        {/* <div className="w-50 h-20 flex-shrink-0">
          <Image
            src={DLA_logo}
            alt="Logo"
            width={500}
            height={500}
            className="object-contain"
          />
        </div> */}
      </div>
      <blockquote className="ml-0">
        <p className="font-display text-xl font-medium text-slate-900">
          "AI is the future for children—and children are the future of AI."
        </p>
      </blockquote>
      <figcaption className="mt-2 ml-0 text-sm text-slate-500">
        <strong className="font-semibold text-blue-600 before:content-['—_']">
          <Link
            href="https://sites.ucmerced.edu/luxi"
          >
            <span className="ml-4">Prof. Xiaoyi Lu</span>
          </Link>
        </strong>
        , Initiator and Funder of Deep Learn Academy
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-12 pt-4 md:pt-8 lg:grid-cols-12 lg:gap-y-12 lg:px-3 lg:pt-8 lg:pb-24 xl:py-16">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 right-1/2 -bottom-12 left-0 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-3xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Image className="rounded-3xl" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:right-[-100vw] lg:bottom-0 lg:left-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <div className="flex items-center justify-between flex-wrap gap-0">
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                Deep Learn <br />Academy
              </h1>
              <div className="w-20 h-20 sm:w-30 sm:h-30 flex-shrink-0">
                <Image
                  src={DLA_logo}
                  alt="Logo"
                  width={400}
                  height={400}
                  className="object-contain h-full w-full"
                />
              </div>
            </div>
            <p className="mt-4 text-3xl text-slate-600">
              Give your children a head start in AI by enrolling them in Deep Learn Academy. They will learn foundational concepts
              in AI that is both fun and impactful. Apply today to our <b>free</b> course and spark your child's interest for AI!
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="https://docs.google.com/forms/d/1cUcmZZ23IPH6HFvRSnS11LZCf3uodFP2BDJLhi-ufog/edit" color="blue">
                Register Now
              </Button>
              <Button href="#resources" variant="outline" color="blue">
                Why should my child learn AI?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
