import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian Bud Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Brian Bud</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div>
            <h2>Brian Buddhadasa</h2>
            <h3>Web Developer</h3>
            <p>Quisquam atque totam saepe voluptas non praesentium reiciendis cumque officia quis ab magnam deleniti provident iusto, possimus cum iure repellat rem quod?</p>
          </div>
          <div>
            <AiFillLinkedin/>
            <AiFillTwitterCircle/>
            <AiFillGithub/>
          </div>
        </section>
      </main>
    </div>
  );
}
