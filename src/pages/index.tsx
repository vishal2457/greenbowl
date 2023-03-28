import Image from 'next/image';
import * as React from 'react';

import { CallToAction } from '@/components/call-to-action';
import { HeroSection } from '@/components/hero-section';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header />
      <main className='mb-40 space-y-20'>
        <HeroSection />
        <CallToAction />
      </main>
      <footer>
        <a href='https://www.instagram.com/getgreenbowl/' target='_blank'>
          <div className='flex w-full justify-center'>
            <Image
              src='/images/insta.png'
              width={25}
              height={25}
              alt='insta logo'
            />
            <p className='pl-2 text-white'>@getgreenbowl</p>
          </div>
        </a>
      </footer>
    </Layout>
  );
}
