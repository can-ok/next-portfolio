
import BlogSection from '@/components/BlogSection';
import HeroSection  from '../components/HeroSection';
import { Poppins } from 'next/font/google'
import { fetchPosts } from '../lib/graphql';


const inter = Poppins({ subsets: ['latin'],weight:'400' });


export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <HeroSection />
        <BlogSection/>
    </main>
    </>
  )
}

