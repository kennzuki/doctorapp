import Link from 'next/link';

const Buttons = () => {
  return (
    <div className='p-8 md:p-12 lg:p-12 bg-green-950 border-t-2 border-green-600 w-full'>
      <h2 className='text-3xl md:text-4xl font-bold text-white mb-6 text-center'>
        Ready to take control of your healthcare?
      </h2>
      <p className='text-lg text-center mb-8'>
        Join thousands of users who have simplified their healthcare journey
        with our platform. Get started today and experience healthcare the way
        it should be.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 [&_button]:py-2 [&_button]:px-4 [&_button]:rounded-xl [&_button]:shadow-xl'>
        <button className='bg-emerald-600 text-white hover:bg-emerald-700'>
          <Link href='/sign-up'>Sign Up Now</Link>
        </button>
        <button className='border-emerald-700/30 hover:bg-muted/80'>
          <Link href='#pricing'>View Pricing</Link>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
