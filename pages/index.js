import Head from 'next/head'
import Image from 'next/image'
import HomeComponent from './Home/Home'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chợ tốt</title>
        <meta name="description" content="cho tot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
    </div>
  )
}
