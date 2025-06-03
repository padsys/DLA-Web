// pages/sponsors.tsx
import Image from 'next/image';
import nsf from '@/images/nsf_no_text.jpeg'
import ucm from '@/images/ucm_logo.png'
import { Button } from '@/components/Button'

export function Sponsors() {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-5 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Sponsors</h1>

      <div className="grid grid-cols-2 gap-4">
        {/* Sponsor 1 */}
        <div className="flex justify-center">
          <Image
            src={nsf}
            alt="Sponsor 1"
            width={220}
            className="object-contain"
          />
        </div>

        {/* Sponsor 2 */}
        <div className="flex justify-center">
          <Image
            src={ucm}
            alt="Sponsor 2"
            width={200}
            className="object-contain"
          />
        </div>
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
