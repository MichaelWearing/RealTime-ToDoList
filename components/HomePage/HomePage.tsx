import Link from "next/link"

// Styled Components
import { Wrapper, Title, Button } from "./HomePage.styles"

export default function Home() {

    
    return (
        <Wrapper>
            <Title>To-Do List!</Title>

            <Link href="/login" passHref>
                <Button>Login</Button>
            </Link>

            <Link href="/signUp" passHref>
                <Button>Sign Up</Button>
            </Link>
        </Wrapper>
    )
}
