import React, { useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import axios from 'axios';
import Button from './Button'
import Modal from './Modal'
import { Body, Title2 } from './Typography'

export default function NewsletterModal({ show, onClose }) {
  const themeContext = useContext(ThemeContext);
  const [inputMessage, setInputMessage] = useState('');

  const ComboButton = styled(Button)`
    margin-top: -41px;
    margin-left: calc(100% - 200px);

    ${themeContext.mediaQueries.mobile} {
      height: 36px;
      width: 90px;
      margin-top: -36px;
      margin-left: calc(100% - 90px);
    }

    &:hover {
      cursor: pointer;
    }
  `;

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  const Description = styled.div`
    width: 50%;

    ${themeContext.mediaQueries.mobile} {
      width: 75%;
    }
  `;

  const Logo = styled.img`
    ${themeContext.mediaQueries.mobile} {
      width: 60px;
    }
  `;

  const StyledInput = styled.input`
    border: 2px solid ${themeContext.colors.primary};
    border-radius: 8px;
    padding: 8px 12px;
    background: transparent;
    color: white;
    font-weight: normal;
    font-size: 18px;
    width: 100%;

    ${themeContext.mediaQueries.mobile} {
      padding: 4px 8px;
      font-size: 14px;
      line-height: 24px;
    }
  `;

  const emailInput = React.createRef();
  function addToMailingList() {
    // Reset any error/info messages from before
    setInputMessage('');
    
    const email = emailInput.current.value;
    const validEmail = validateEmail(email);

    if (validEmail) {
      axios({
        method: 'POST',
        url: 'https://us-central1-nwplus-ubc.cloudfunctions.net/addToMailingList',
        data: {
          email: email,
        },
      }).then((res) => {
        console.log(res);
        setInputMessage(`${email} is now subscribed!`);
      }).catch((err) => {
        // If the email is already subscribed we get a 409
        if (err.response.status === 409) {
          setInputMessage(`${email} is already subscribed!`);
        } else {
          setInputMessage('Something went wrong, please try again later.');
        }
      });
    } else {
      setInputMessage('Please enter a valid email.');
    }
  }

  function validateEmail(email) {
    if (!email.includes('@')) {
      return false;
    }
    const emailArray = email.split('@');
    if (emailArray.length !== 2) {
      return false;
    }
    if (emailArray[0].length < 1) {
      return false;
    }

    const domain = emailArray[1];
    if (!domain.includes('.')) {
      return false;
    }
    if (domain.split('.')[0].length < 1 || domain.split('.')[1].length < 1) {
      return false;
    }

    return true;
  }

  return (
    <Modal
      show={show}
      onClose={onClose}
    >
      <Content>
        <div>
          <Logo src="/assets/logos/nwPlus_Logo_2020_color.svg" alt="nwPlus Logo" />
        </div>
        <Description>
          <Title2
            color={themeContext.colors.primary}
          >
            nwPlus Newsletter Sign-up
          </Title2>
          <Body>Subscribe to our newsletter to stay up to date and for upcoming events!</Body>
        </Description>
        <div>
          {inputMessage &&
            <Body>{ inputMessage }</Body>
          }
          <StyledInput
            ref={emailInput}
            name="email"
            type="email"
            placeholder="hacker@nwplus.io"
          />
          <ComboButton
            height="41px"
            width="200px"
            margin="0"
            padding="0"
            onClick={addToMailingList}
          >
            Subscribe
          </ComboButton>
        </div>
      </Content>
    </Modal>
  )
}

