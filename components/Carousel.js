import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const FlexBox = styled.div`
    display: flex;
`

const Container = styled.div`
    position: relative;
    max-width: ${(props) => props.width}px;
`

const FilledDiamond = styled.div`
    width: 12px;
    height: 12px;
    background-color: red;
    border-radius: 4px;
    transform: rotateY(0deg) rotate(45deg);
    margin-right: 5px;
    margin-left: 5px;
`;

const EmptyDiamond = styled.div`
    width: 12px;
    height: 12px;
    border-color: coral;
    border-style: solid;
    border-width: thin;
    border-radius: 4px;
    transform: rotateY(0deg) rotate(45deg);
    margin-right: 5px;
    margin-left: 5px;
`;

const Image = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-bottom: 10px;
    border-radius: 6px;
    object-fit: cover;
`;

const BaseArrow = css`
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 5px;
    cursor: pointer;
    position: absolute;
    top: 40%;
    box-shadow: 0px 0px 10px -4px #fff;
`;

const RightArrow = styled.i`
    ${BaseArrow}
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-right: 10px;
    right: 1%;
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
                ? (
                    <Container width={width}>
                        <RightArrow onClick={() => setImageIndex(imageIndex == numImages - 1 ? 0 : imageIndex + 1)}/>
                        <LeftArrow onClick={() => setImageIndex(imageIndex == 0 ? numImages - 1 : imageIndex - 1)}/>
                        <Image src={images[imageIndex]} width={width} height={height}/>
                        <FlexBox>
                            {images.map((item, index) => {
                                return index == imageIndex
                                    ? <FilledDiamond key={index} />
                                    : <EmptyDiamond key={index} />
                            })}
                        </FlexBox>
                    </Container>
                ) : (
                    null
                )
            }
        </>
    )
}