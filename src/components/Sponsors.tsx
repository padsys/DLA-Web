// pages/sponsors.tsx
import Image from 'next/image';
import nsf from '@/images/nsf_logo.png'
import ucm from '@/images/ucm_logo.png'
import { Button } from '@/components/Button'

export function Sponsors() {
  return (
    <div className="bg-white py-1 px-5 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Sponsors</h1>

        <div className="grid grid-cols-2 gap-0 items-center">
            {/* Sponsor 1 */}
            <Image
            src={nsf}
            alt="Sponsor 1"
            width={0}
            height={100}
            className="object-contain"
            />

            {/* Sponsor 2 */}
            <Image
            src={ucm}
            alt="Sponsor 2"
            width={0}
            height={200}
            className="object-contain"
            />
        </div>

        <h1 className="text-md font-bold text-gray-800 mt-10">
            If you are interested in sponsoring the Deep Learn Academy, please feel free to contact us.
        </h1>
        <Button href="https://padsys.org/people/xiaoyi-lu.html" color="blue">
        Contact Us!
        </Button>
        </div>
  );
}
