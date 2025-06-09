import { testimonials } from '@/lib/data';

const Testimonials = () => {
  return (
    <div className=' w-full flex flex-col justify-center space-y-4 p-8 bg-black border-t-2 border-green-600'>
      <h1 className='text-white text-center mb-8 text-3xl font-bold uppercase'>
        What our users say
      </h1>
      <p className='text-gray-400 text-center text-center'>
        Hear what our patients and doctors have to say
      </p>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='flex flex-col items-center border p-4 rounded-xl shadow-xl'
          >
            <div className='w-16 h-16 rounded-full flex items-center justify-center bg-green-600 space-y-3'>
              {testimonial.initials}
              
                </div>
                <div className='flex flex-col items-center'>
                <h3 className='text-white text-lg font-bold mt-4'>
                  {testimonial.name}
                </h3>
                <p className='text-gray-400 mt-2'>{testimonial.role}</p>
              </div>

            <p className='text-gray-400 mt-2'> {testimonial.quote} </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
