// import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className='minhscreen flex items-center justify-between p-4 bg-gray-800 text-white'>
      <h1 className='text-2xl font-bold'>Kenki appointments</h1>
      <div className='flex gap-4' >
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
