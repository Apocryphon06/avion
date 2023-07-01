import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <Header />

      <div className="lg:w-[1290px] lg:m-auto mx-5 mt-20 h-[584px] flex lg:flex-row flex-col-reverse justify-center items-center">
        <div className="lg:w-[770px] bg-[#2A254B] h-[584px] lg:p-10 p-5 flex flex-col gap-5">
          <div className="lg:w-[513px]">
            <h1 className="text-white lg:text-4xl md:text-3xl text-2xl">
              {' '}
              The furniture brand for the future, with timeless designs
            </h1>
            <button className="bg-[#726E8D] px-[32px] py-2 text-[#2A254B] mt-5">
              View collection
            </button>
          </div>

          <div className=''>
            <h2 className="lg:text-lg text-base text-white leading-6 font-light lg:w-[650px] ">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </h2>
          </div>
        </div>

        <img src="/assets/images/dandyChair.jpg" />
      </div>
    </main>
  )
}
