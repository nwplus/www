import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`

const Container = styled.div`
    position: relative;
    height: ${(p) => p.height ? p.height : '100%'};
    width: ${(p) => p.width ? p.width : '100%'};
`

const FilledDiamond = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${(p) => p.theme.colors.primary};
    border-radius: 4px;
    transform: rotateY(0deg) rotate(45deg);
    margin-right: 5px;
    margin-left: 5px;
`;

const EmptyDiamond = styled.div`
    width: 12px;
    height: 12px;
    border-color: ${(p) => p.theme.colors.primary};
    border-style: solid;
    border-width: thin;
    border-radius: 4px;
    transform: rotateY(0deg) rotate(45deg);
    margin-right: 5px;
    margin-left: 5px;
    cursor: pointer;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 6px;
    object-fit: cover;
`;

const BaseArrow = css`
    border: solid ${(p) => p.theme.colors.primary};
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 5px;
    cursor: pointer;
    position: absolute;
    top: 40%;
`;

const RightArrow = styled.i`
    ${BaseArrow}
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-right: 0px;
    right: 2%;
`

const LeftArrow = styled.i`
    ${BaseArrow}
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    left: 5%;
`

export default function Carousel ({ images, height, width }) {
    const [imageIndex, setImageIndex] = useState(0);
    const numImages = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(imageIndex == numImages - 1 ? 0 : imageIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    })

    return (
        <>
            {
                numImages > 0
                &&
                <Container width={width} height={height}>
                    <RightArrow onClick={() => setImageIndex(imageIndex == numImages - 1 ? 0 : imageIndex + 1)}/>
                    <LeftArrow onClick={() => setImageIndex(imageIndex == 0 ? numImages - 1 : imageIndex - 1)}/>
                    <Image src={images[imageIndex]} />
                    <FlexBox>
                        {images.map((item, index) => {
                            return index == imageIndex
                                ? <FilledDiamond key={index} />
                                : <EmptyDiamond key={index} onClick={() => setImageIndex(index)}/>
                        })}
                    </FlexBox>
                </Container>
            }
        </>
    )
}
