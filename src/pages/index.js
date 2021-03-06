import Head from 'next/head'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Information from '../components/Information'
import Team from '../components/Team'

export default function Home() {
  return (
    <div>
      <Head>
        <title>E-coleta</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      {/* <Information /> */}
      <Team />
      <Footer />
    </div>
  )
}
