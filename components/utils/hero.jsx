import { Fragment } from "react"
import Typewriter from "typewriter-effect"
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <Fragment>
        <section className="relative isolate">
          <div className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
                <div className="text-left">
                  <h1 className="text-xl font-medium tracking-tight text-teal-600 sm:text-6xl">
                    Hello 🖐, I'm Satria
                  </h1>
                  <h1 className="text-xl font-medium tracking-tight text-gray-900 sm:text-6xl">
                    <Typewriter
                      options={{
                        strings: ['a Web Developer', 'a Performance Tester', 'a Automation Tester'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    My name is Satria. I am a Web Developer and Quality Assurance from Landak, Indonesia
                  </p>
                  <div className="mt-10 flex items-center justify-start gap-x-6">
                    <Link
                      href="#"
                      className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                    >
                      Contact Me
                    </Link>
                    <Link
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get Resume
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
                <div className="items-center relative">
                  <Image src="/assets/hero.png" width={388} height={388} alt="" />
                  <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2">
                    <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#08BDBA" d="M47.7,-69.7C57.9,-58.3,59.4,-39,62.1,-22.2C64.7,-5.4,68.6,9.1,66.4,23.3C64.2,37.6,56,51.7,43.9,58.6C31.8,65.6,15.9,65.5,2.6,62C-10.8,58.5,-21.6,51.6,-29.9,43.4C-38.2,35.1,-43.9,25.6,-52,13.8C-60.2,2,-70.7,-12.2,-68.4,-23.1C-66.1,-34,-51,-41.7,-37.4,-52C-23.9,-62.4,-11.9,-75.4,3.4,-80.1C18.8,-84.8,37.6,-81.2,47.7,-69.7Z" transform="translate(100 100)" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </>
  )
}

export default Hero