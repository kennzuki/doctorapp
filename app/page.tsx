import { ArrowRight } from 'lucide-react';
import Cards from './components/Cards';
import Image from 'next/image';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Buttons from './components/Buttons';

export default function Home() {
  return (
    <main className='flex min-h-screen sm:flex-col items-center gap-4 p-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-black'>
        <div className='space-y-4 p-8'>
          <h1 className='text-4xl font-bold'>Welcome to kenki</h1>
          <h2 className='text-green-600 font-bold text-2xl capitalize'>
            Connect anytime anywhere
          </h2>
          <p className='mb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
            quam mollitia illo consequatur modi assumenda minima excepturi. Cum
            ut eveniet reiciendis officia esse voluptatibus doloribus, nemo eum
            accusantium rerum ipsa, incidunt, eos praesentium at!
          </p>
          <section className=' flex gap-4 place-items-center'>
            <button className='px-4 py-2 bg-green-600 text-white rounded-xl flex gap-2'>
              Get started
              <ArrowRight />
            </button>
            <button className='px-4 py-2 bg-gray-700 text-white rounded-xl'>
              Get appointment
            </button>
          </section>
        </div>
        <div className='flex items-center justify-center'>
          <Image
            className='object-cover rounded-lg '
            src='/pexels-shvetsa-4167541.jpg'
            alt='hero'
            width={300}
            height={300}
          />
        </div>
      </div>
      <Cards />
      <Pricing/>
      <Testimonials />
      <Buttons/>
    </main>
  );
}
