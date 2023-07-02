import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { keyPoints, newCeramics } from '@/utils/helper'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <Header />

      <div className="lg:w-[1290px] lg:m-auto mx-5 mt-10 h-[584px] flex lg:flex-row flex-col-reverse justify-center items-center">
        <div className="lg:w-[770px] bg-[#2A254B] lg:h-[584px] lg:p-10 md:p-10 p-5 flex flex-col gap-5">
          <div className="lg:w-[513px]">
            <h1 className="text-white lg:text-4xl md:text-3xl text-2xl">
              {' '}
              The furniture brand for the future, with timeless designs
            </h1>
            <button className="bg-[#726E8D] px-[32px] py-4 text-[#2A254B] mt-5">
              View collection
            </button>
          </div>

          <div className="">
            <h2 className="lg:text-lg text-base text-white leading-6 font-light lg:w-[650px] ">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </h2>
          </div>
        </div>

        <img
          src="/assets/images/dandyChair.jpg"
          alt=""
          className="lg:block hidden"
        />
      </div>

      <div className="flex flex-col justify-center items-center lg:mt-20 mt-10 lg:m-auto mx-5">
        <h2 className="lg:text-2xl text-xl text-[#2A254B]">
          What makes our brand different
        </h2>

        <div className="lg:w-[1290px] lg:m-auto mx-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
            {keyPoints.map((item, index) => (
              <div
                key={index + 1 + item.name}
                className="flex flex-col justify-start gap-2"
              >
                <Image src={item.icon} alt={item.icon} width={24} height={24} />
                <h3 className="lg:text-xl text-lg text-[#2A254B]">
                  {item.title}
                </h3>
                <p className="text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br/>
      <br/>

      <div className="lg:w-[1290px] lg:m-auto mx-5 flex flex-col justify-center items-center">
        <h2 className="lg:text-4xl md:text-3xl text-2xl text-[#2A254B]">
          New Ceramics
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10 justify-center items-center mt-10">
          {newCeramics.map((item, index) => (
            <div
              key={index + 1 + item.name}
              className="flex flex-col justify-start items-start gap-2"
            >
              <Image src={item.image} alt={item.name} width={292} height={359} className="object-fit w-[292px] h-[359px]"/>
              <h3 className='text-lg'>{item.name}</h3>
              <p className='text-base'>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
