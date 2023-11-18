import styled, { ThemeContext } from 'styled-components'
import { useContext } from 'react';
import NavBar from '../components/NavBar';
// Components
import { Background } from '../components/Background'
// Typography
import { Title1, Body, Title2, Title3 } from '../components/Typography';
import { List, ListItem } from '@material-ui/core';
import Banner from '../components/Banner'

const PrivacyContainer = styled.div`
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-position: top;
padding-top: 15%;
background-size: contain;
`;

const PrivacyTextContainer = styled.div`
  padding-top: 10%;
  padding: 5%;
`;

const IndentedDiv = styled(Body)`
    padding-left: 20px;
`;

const PrivacyPolicy = () => {
  const themeContext = useContext(ThemeContext);
  const renderListItems = (items) => items.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));
  const keyPoints = [
    "We collect anonymized data to improve our services.",
    "We clearly inform you of any plans to share personal data and require explicit consent before doing so.",
    "We do not track you for advertising (there are no ads on our site anyways).",
    "You can request that we delete your data at any time by emailing info@nwplus.io."
  ];
  const terminology = [
    "Us/We/Our: The organizing members of nwPlus",
    "Our events/The events: Our 3 hackathons (HackCamp, nwHacks, and cmd-f)",
    "Participant: Hackers, sponsors, judges, speakers, and volunteers who participate in our event"
  ]
  const dataWeCollect = [
    "Data we collect when you visit our website",
    "Data we collect when you apply or sign up as a participant",
    "Data we collect at the events"
  ]

  const dataFromParticipants = [
    "'Primary' data necessary for us to host our event",
    "Optional 'survey' data to help us identify general trends and improve our event",
    "Optional data we receive from third parties"
  ]

  const analyticsData = [
    "We collect anonymized traffic and visitor data through Firebase.",
    "This allows us to see anonymous information like the number of visitors we have and the types of devices that our visitors use. It also allows us to better understand what our users are interested in as well as analyze the performance of our sites in the wild.",
    "nwPlus uses cookies to authenticate you across our services."
  ]

  const dataFreedom = [
    "1. Limit how much information you provide on our forms: You may choose to not fill out any optional fields in our forms and communications with you. Fields that we mark as mandatory, however, are considered to be necessary to our operations and services that we offer to you. You may, in the event that you object to these mandatory fields, terminate your activities with us and request that we delete all data we have collected from you thus far.",
    "2. Opt out of marketing emails: You may elect to stop receiving marketing and promotional material from us by replying to any of  our promotional emails.",
    "3. Use a tracking blocker: nwPlus does require cookies to be enabled for our services to work. We do not, however, have individual control over cookies and other tracking activities done by the services outlined in [Data we collect when you visit our website]. You may elect to use a browser extension to block these anonymous analytics activities."
  ]

  const KeyPoints = () => {
    return (
      <><Title2 color={themeContext.colors.primary}>Key Points</Title2>
        <IndentedDiv>
          <List>
            {renderListItems(keyPoints)}
          </List>
        </IndentedDiv>
      </>
    )
  }

  const Preface = () => {
    return (
      <>
        <Title2 color={themeContext.colors.primary}>Preface</Title2>
        <IndentedDiv>
          <IndentedDiv>
            At nwPlus, we care about our privacy and personal data just as much as you do. We are proud to be not-for-profit and
            respect your rights and privacy as a user. Our goal is simple: to bring together the best speakers, sponsors, and students
            from across the world to collaborate, create, and bring their ideas to life.
          </IndentedDiv>
        </IndentedDiv>
      </>
    )
  }

  const Terminology = () => {
    return (
      <>
        <Title2 color={themeContext.colors.primary}>Terminology</Title2>
        <IndentedDiv>
          <List>
            {renderListItems(terminology)}
          </List>
        </IndentedDiv>
      </>
    )
  }

  const DataWeCollect = () => {
    return (
      <>
        <Title2 color={themeContext.colors.primary}>Data We Collect</Title2>
        <Body>
          <Title3>The data we collect can be separated into three broad categories:</Title3>
          <IndentedDiv>
            <List>
              {renderListItems(dataWeCollect)}
            </List>
          </IndentedDiv>
          <Title3 color={themeContext.colors.primary}>1. Data we collect when you visit our website:</Title3>
          <IndentedDiv>
            We collect anonymous usage data to improve our online experiences for people visiting our website. This data can be separated into two main categories: analytics data and bug reporting.
            <Title3>Analytics Data</Title3>
            <List>
              {renderListItems(analyticsData)}
            </List>
            <Title3>Cookies</Title3>
            nwPlus uses cookies to authenticate you across our services.
          </IndentedDiv>
          <Title3 color={themeContext.colors.primary}>2. Data we collect when you apply or sign up as a participant:</Title3>
          <IndentedDiv>
            We collect three distinct categories of data from our participants:
            <List>
              {renderListItems(dataFromParticipants)}
            </List>
            Both categories of data are explicitly asked for and provided by you through our forms or email communications.
            <Title3>Primary data</Title3>
            We collect primary data in order to organize our event and meet the expectations of our participants. This includes data like
            long answer questions from student applicants, shift scheduling information from volunteers, and prize details from sponsors.
            <Title3>Survey data</Title3>
            We may ask for optional survey data in our forms to help us better understand our participants and identify ways to improve our event and services.
            Survey data will always be explicitly labelled as such and will not influence individual decision-making, such as your eligibility at the events.
            <Title3>Third-party data</Title3>
            We use the data we receive from third parties solely for identification purposes in order to provide sign-in access to our websites. If a participant chooses to sign in via a Google account, we receive the name, email address, and OAuth2 credentials of the account. We will not execute any actions on behalf of the user. You can review, adjust your privacy settings,
            or unlink your account from within your Google privacy settings.
          </IndentedDiv>
          <Title3 color={themeContext.colors.primary}>3. Data we collect at our events:</Title3>
          <IndentedDiv>
            We collect various data during our events to improve our events and ensure a great experience for everyone. This includes, for example, recording QR code scans for us to A. enforce quotas for limited resources such as food and B. better understand participation and popularity of activities.
          </IndentedDiv>
        </Body>
      </>
    )
  }

  const DataWeShare = () => {
    return (
      <>
        <Title2 color={themeContext.colors.primary}>Data we share</Title2>
        <IndentedDiv>
          <Title3> Sharing of personal data </Title3>
          We may, with your explicit consent, share your personal data with select third parties and sponsors to improve your experience
          with our event. This has historically included, for example, providing your resume to sponsors for hiring and recruitment purposes. We will always, in plain english,
          inform you of why we are collecting and how we may share any piece of personal data at the point that information is entered.
          <Title3> Sharing of anonymous data </Title3>
          We may periodically release aggregate, anonymous data to both the general public and our partners for marketing, transparency,
          and sponsorship purposes. This may, for example, include data on the general geographical distribution of hackers and the number of people who have applied to the events.
          <Title3> Legal compliance </Title3>
          We may, if required by law, disclose your information to law enforcement officials.
        </IndentedDiv>
      </>
    )
  }

  const YourRights = () => {
    return (
      <>
        <Title2 color={themeContext.colors.primary}>Your Rights</Title2>
        <IndentedDiv>
          <Title3> Data ownership </Title3>
          <Body>You own your data. You may at any time, with proof of identity, email us at info@nwplus.io and request that we provide,
            update, or delete any personal data we have that pertains to you. We will, barring legal requirements or exceptional circumstances,
            comply with your request within 30 days of receipt. Please note that deleted data may be retained in our backups for up to
            an additional 60 days, after which they are purged.</Body>
          <Title3> Data Freedom </Title3>
          <Body>You have several options to limit how much information you share with us:</Body>
          <IndentedDiv>
            {renderListItems(dataFreedom)}
          </IndentedDiv>
        </IndentedDiv>
      </>
    );
  }

  return (
    <>
      <Background>
        <Banner/>
        <NavBar />
        <PrivacyContainer>
          <PrivacyTextContainer>
            <Title1
              color={themeContext.colors.primary}>
              Privacy Policy
            </Title1>
            <KeyPoints />
            <Preface />
            <Terminology />
            <DataWeCollect />
            <DataWeShare />
            <YourRights />
            <Title2 color={themeContext.colors.primary}>Questions</Title2>
            <IndentedDiv>We are always looking for feedback on our practices and policies at nwPlus. If you have any questions, concerns, or complaints regarding our practices or policies please contact us at info@nwplus.io.</IndentedDiv>
          </PrivacyTextContainer>
        </PrivacyContainer>
      </Background>
    </>
  );
};

export default PrivacyPolicy;