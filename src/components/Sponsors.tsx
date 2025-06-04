// pages/sponsors.tsx
import Image from 'next/image';
import nsf from '@/images/nsf_no_text.jpeg'
import padsys from '@/images/padsys_blue_logo.png'
import ucm from '@/images/ucm_logo.png'
import { Button } from '@/components/Button'

export function Sponsors() {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-5 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Sponsors</h1>

      <div className="grid grid-cols-2 gap-10">
        {/* Sponsor 1 */}
        {/* <div className="flex justify-center">
          <Image
            src={nsf}
            alt="NSF"
            width={205}
            className="object-contain"
          />
        </div> */}

        <div className="flex justify-center overflow-hidden rounded-full">
            <Image
              className="flex justify-center"
              src={padsys}
              width={200}
              alt="PADSYS"
            />
        </div>

        {/* Sponsor 3 */}
        <div className="flex justify-center">
          <Image
            src={ucm}
            alt="UCM"
            width={200}
            className="object-contain"
          />
        </div>
      </div>

        <h1 className="text-md font-bold text-gray-800 mt-10">
            If you are interested in sponsoring the Deep Learn Academy, please feel free to contact us.
        </h1>
        <p className="mt-8">
            <Button href="https://sites.ucmerced.edu/luxi" color="blue">
            Contact Us!
            </Button>
        </p>
        </div>
  );
}
