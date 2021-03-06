import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import HomePage from "../components/HomePage/HomePage"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet" />
        <title>To-Do List</title>
      </Head>
      <body>

        <HomePage />

      </body>
    </div>
  )
}

export default Home
