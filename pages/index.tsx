import BlogSection from '@/components/BlogSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl pt-16">
        <HeroSection />
        <section id="posts" className='py-10'>
          <BlogSection />
        </section>
        <section id="projects" className='py-10'>
          <h2 className='text-2xl font-semibold text-center py-6'>Projects</h2>
          <p className='text-center text-gray-500'>Coming soon.</p>
        </section>
        <section id="about" className='py-10'>
          <h2 className='text-2xl font-semibold text-center py-6'>About</h2>
          <p className='text-center text-gray-500'>Coming soon.</p>
        </section>
      </main>
    </>
  );
}
