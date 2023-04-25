import { Fragment } from "react"

const Hero = () => {
  return (
    <>
      <Fragment>
        <section className="relative isolate px-6 pt-14">
          <div className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">

                <div className="text-left">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Web Developer
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                    fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-1 bg-blue"></div>
          </div>
        </section>

      </Fragment>
    </>
  )
}

export default Hero