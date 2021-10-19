import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PC_STATS = 'assets/webStats.svg';
const MOBILE_STATS = 'assets/mobileStats.svg'

const Image = styled.img`
    width: 100%;
`

export default function Stats () {
    const [width, setWidth] = useState(window.innerWidth);
    const mobileBreakpoint = 768;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
      }, []);

    return (
        <>
            {
                width <= mobileBreakpoint ? (
                    <Image src={MOBILE_STATS} />
                ) : (
                    <Image src={PC_STATS} />
                )
            }
        </>
    )
}