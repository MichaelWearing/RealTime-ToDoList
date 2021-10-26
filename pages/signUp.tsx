import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import SignUp from "../components/SignUp/SignUp"

const signUp: NextPage = () => {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet" />
        <title>SignUp Page</title>
      </Head>
      <body>

        <SignUp />

      </body>
    </div>
  )
}

export default signUp
