import React, { ReactElement } from 'react'
import Link from "next/link"

// Styled Components
import { Wrapper, Icon, CloseIcon, Title, Input, Button } from "./SignUp.styles"

interface Props {

}

function SignUp({ }: Props): ReactElement {
    return (
        <Wrapper>
            <Link href="/" passHref>
                <Icon>
                    <CloseIcon />
                </Icon>
            </Link>
            <Title>Sign Up</Title>
            <Input placeholder={"User Name"} />
            <Input placeholder={"Password"} />
            <Input placeholder={"Confirm Password"} />
            <Button>Submit</Button>
        </Wrapper>
    )
}

export default SignUp
