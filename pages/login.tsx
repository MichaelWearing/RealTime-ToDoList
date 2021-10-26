import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import Login from "../components/Login/Login"

const login: NextPage = () => {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet" />
        <title>Login Page</title>
      </Head>
      <body>

        <Login />

      </body>
    </div>
  )
}

export default login
