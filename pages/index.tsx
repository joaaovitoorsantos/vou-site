//@ts-nocheck
import type { NextPage } from 'next'
import Head from 'next/head'
import Topbar from '@components/topbar'
import SectionOne from '@components/sectionOne'
import SectionTwo from '@components/sectionTwo'
import SectionThree from '@components/sectionThree'
import SectionFour from '@components/sectionFour'
import SectionFive from '@components/sectionFive'
import SectionSix from '@components/sectionSix'
import SectionSeven from '@components/sectionSeven'
import Footer from '@components/footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vou!</title>
      </Head>
      <Topbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <Footer/>
    </>
  )
}

export default Home
