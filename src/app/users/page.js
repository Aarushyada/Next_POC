import React from 'react';
import { NextSeo } from 'next-seo';
import Hero from '../components/Hero';

async function timer(){
  await new Promise(res => {
    setTimeout(res, 3000);
  });
}

const Page = async () => {
  await timer();
  return (
    <>
      <NextSeo
        title="Users Page"
        description="Description of the Users Page"
      />
      <div>
        <Hero content='Users Page'/>
      </div>
    </>
  );
}

export default Page;
