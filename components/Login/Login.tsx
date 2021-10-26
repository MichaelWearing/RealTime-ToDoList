import React, { ReactElement, useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'

// Styled Components
import { Wrapper, Icon, CloseIcon, Title, Form, Input, Button } from "./Login.styles"

interface Props {

}

function Login({ }: Props): ReactElement {

    const router = useRouter()

    const [name, setName] = useState("")
    const [passWord, setPassWord] = useState("")

    const LogInUser = (e: React.SyntheticEvent) => {
        e.preventDefault()

        console.log("Attempting to log in user")
        router.push("/allToDos")
    }

    return (
        <Wrapper>
            <Link href="/" passHref>
                <Icon>
                    <CloseIcon />
                </Icon>
            </Link>
            <Title>Login</Title>
            <Form onSubmit={LogInUser} >
                <Input placeholder={"User Name"} onChange={(e) => setName(e.target.value)} />
                <Input placeholder={"Password"} onChange={(e) => setPassWord(e.target.value)} />
                <Button type="submit">Submit</Button>
            </Form>
        </Wrapper>
    )
}

export default Login
