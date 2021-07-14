import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illo hic voluptate ullam quo inventore incidunt reprehenderit. Eos ducimus iste hic, quidem, labore laudantium optio corporis numquam sequi cum temporibus.</p>
        <p className={styles.text}>Beatae ducimus esse dicta, quidem maxime dolores. Facere voluptatem maiores eius nesciunt aliquam, quod repellat voluptate, temporibus sequi cum quisquam, neque impedit? Consequatur dolor minima error vero obcaecati facere dolorem.</p>
        <Link href="ninjas">
          <a className={styles.btn}>Ninjas list</a>
        </Link>
      </div>
    </>
  )
}
