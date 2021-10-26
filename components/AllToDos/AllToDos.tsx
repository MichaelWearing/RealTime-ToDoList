import React, { ReactElement } from 'react'
import Link from "next/link"

// Styled Components
import { Wrapper, Icon, CloseIcon } from "./AllToDos.styles"

interface Props {

}

export default function AllToDos({ }: Props): ReactElement {
    return (
        <Wrapper>

            <Link href="/" passHref>
                <Icon>
                    <CloseIcon />
                </Icon>
            </Link>
            Logged in
        </Wrapper>
    )
}
