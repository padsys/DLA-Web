// Copyright (c) 2025, University of California, Merced. All rights reserved.

// This file is part of the Deep Learn Academy software package developed by
// the team members of Prof. Xiaoyi Lu's group (PADSYS Lab) at the University
// of California, Merced.

// For detailed copyright and licensing information, please refer to the license
// file LICENSE in the top level directory.

import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import figmaImage from '@/images/self_driving_aigen.png'
// https://techxplore.com/news/2016-11-tesla-self-driving-car-eyes-road.html
import videoPlayerImage from '@/images/robot_chess_aigen.png'
// https://phys.org/news/2017-05-chess-playing-robot-star-taiwan-tech.html
import discordImage from '@/images/chatgpt_aigen.png'
// https://www.computerworld.com/article/3615039/two-years-of-chatgpt-the-conversation-that-never-ends.html

const resources = [
  {
    title: 'Self Driving Cars',
    description:
      'Students gain hands-on experience with the AI systems driving today’s autonomous vehicles.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Video Game AI',
    description:
      'Build your own game-playing AI — a fun and interactive lesson your child will love!',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            className="relative"
            src={videoPlayerImage}
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Large Language Models',
    description:
      "Introduce your child to the world of conversational AI by building chatbots!",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        {/* <SectionHeading number="3" id="resources-title">
          AI for children
        </SectionHeading> */}
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Why is it important for children to learn AI?
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          AI is one of the most exciting and rapidly evolving fields—not just in computer 
          science, but across nearly every discipline. As AI becomes a core part of today’s 
          classrooms, now is the perfect time to give your child a head start. 
          At Deep Learn Academy, students explore foundational AI topics such as computer vision, 
          robotics navigation, and large language models. Equip your child with the skills and 
          confidence to become a leader in tomorrow’s world of innovation.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
