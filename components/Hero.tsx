'use client';
import Image from 'next/image';
import NavLink from './NavLink';

let heroImages = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png'];

export default function Hero() {
  return (
    <section>
      <div className="custom-screen pt-28 text-gray-600">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Generate your Friday Blessings in seconds
          </h1>
          <p className="max-w-xl mx-auto">
          Friday Blessings  makes it simple for you to generate cool looking AI images
            in seconds, completely for free.
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <NavLink
              href="/start"
              className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
            >
              Generate Friday Blessings
            </NavLink>
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 pt-10">
            {heroImages.map((image, idx) => (
              <NavLink href={`/blog/${idx + 1}`} key={idx}>
              <Image
                key={idx}
                alt="image"
                src={image}
                width={500}
                height={500}
                className="rounded-lg"
              />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
