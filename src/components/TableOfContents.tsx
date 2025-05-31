import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'AI Basics': {
    'What is AI?': 1,
    'How does AI learn?': 2,
    'How does AI see/think/chat?': 3,
  },
  'Object Detection': {
    'Self driving car': 21,
    'Security camera': 22,
    'Bezier curves': 26,
    'Designing on a grid': 31,
    'Vector shapes': 45,
  },
  'Boolean operations': {
    'Combining shapes': 50,
    'Subtracting shapes': 57,
    'Intersecting shapes': 66,
    Flattening: 78,
  },
  'Optimizing for production': {
    'Preparing for SVG': 82,
    'Configuring your export settings': 88,
    'Minifying and removing metadata': 95,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
//       {/* <Container>
//         <SectionHeading number="1" id="table-of-contents-title">
//           Curriculum
//         </SectionHeading>
//         <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
//           Deep Learn Academy covers several topics in AI.
//         </p>
//         <p className="mt-4 text-lg tracking-tight text-slate-700">
//           We provide a deep dive into core concepts
//           and give hands-on AI projects to students.
//         </p>
//         <Expandable>
//           <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
//             <ExpandableItems>
//               {Object.entries(tableOfContents).map(([title, pages]) => (
//                 <li key={title}>
//                   <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
//                     {title}
//                   </h3>
//                   <ol
//                     role="list"
//                     className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
//                   >
//                     {Object.entries(pages).map(([title, pageNumber]) => (
//                       <li
//                         key={title}
//                         className="flex justify-between py-3"
//                         aria-label={`${title} on page ${pageNumber}`}
//                       >
//                         <span
//                           className="font-medium text-slate-900"
//                           aria-hidden="true"
//                         >
//                           {title}
//                         </span>
//                         <span
//                           className="font-mono text-slate-400"
//                           aria-hidden="true"
//                         >
//                           {pageNumber}
//                         </span>
//                       </li>
//                     ))}
//                   </ol>
//                 </li>
//               ))}
//             </ExpandableItems>
//           </ol>
//           <ExpandableButton>See more</ExpandableButton>
//         </Expandable>
//       </Container> */}
     </section>
  )
}
