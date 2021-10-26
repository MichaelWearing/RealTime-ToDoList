import type { NextPage } from 'next'
import Head from 'next/head'

// Components
import AllToDos from "../components/AllToDos/AllToDos"

const allToDos: NextPage = () => {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Karla&display=swap" rel="stylesheet" />
                <title>SignUp Page</title>
            </Head>
            <body>

                <AllToDos />

            </body>
        </div>
    )
}

export default allToDos
