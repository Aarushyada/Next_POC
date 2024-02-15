import React from 'react'
import Hero from '../components/Hero'
import Head from 'next/head'

const Page = () => {
  return (
    <>
      <Head>
        <title>Report Store - KenResearch</title>
        <meta name="description" content="A brief description of the page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero content='About page'/>
    </>
  )
}

export default Page