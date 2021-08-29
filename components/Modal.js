/*
  Recommended use:
  - apply `margin-top: 0` to the first element in the modal to make it line up with the close button
*/


import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

export default function Modal({ children, show, onClose }) {
  const themeContext = useContext(ThemeContext);

  const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
  `;

  const ModalContainer = styled.div`
    position: fixed;
    width: 884px;
    max-height: 525px;
    background: url(/assets/modal_bg.svg);
    border-radius: 42px;
    padding: 48px;
    ${themeContext.mediaQueries.mobile} {
      width: 304px;
      max-height: 432px;
      background: url(/assets/mobile_modal_bg.svg);
      padding: 48px 16px;
    }
  `;

  // Use a button element for accessibility
  const CloseButton = styled.button`
    position: absolute;
    top: 48px;
    right: 48px;
    border: none;
    background: none;
    ${themeContext.mediaQueries.mobile} {
      top: 48px;
      right: 16px;

      img {
        width: 16px;
        height: 16px;
      }
    }

    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <>
      {show &&
        <ModalBackground>
          <ModalContainer>
            <CloseButton onClick={onClose}>
              <img src="/assets/icons/close_grey.svg" />
            </CloseButton>
            {children}
          </ModalContainer>
        </ModalBackground>
      }
    </>
  )
}
