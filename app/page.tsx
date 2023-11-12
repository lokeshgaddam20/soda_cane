import React from 'react'
import Image from 'next/image'
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel'

const Home = () => {
  return (
    <>
      <section className='px-6 md:px-20 py-24 border-2 border-blue-500'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>
              One stop for all the Amazon Price tags for smart shopping.
              <Image
                src='/assets/icons/arrow-right.svg'
                alt='arrow-right'
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Get to know more in less time with our <span className='text-blue-500'>Price Tracker</span>
            </h1>
            <p className="mt-6">
              Powerful and fast shopping experience with our price tracker. Get to know the price of the product you want to buy in less time.
            </p>
            <Searchbar/>
          </div>
          <HeroCarousel/>
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Apple Iphone', 'Book', 'Google Pixel'].map((product)=>(
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  )
}
export default Home