import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='minhscreen flex items-center justify-between p-4 bg-gray-800 text-white'>
      <h1 className='text-2xl font-bold'>Kenki appointments</h1>
      <div className='flex items-center'>
        <Link href='/' className='mx-4 text-lg hover:text-gray-400'>
          Home
        </Link>
        <Link href='/about' className='mx-4 text-lg hover:text-gray-400'>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
