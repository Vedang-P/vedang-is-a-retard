import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="XXX">XXX</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="XXX">XXX</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>

        <SocialIcons href="https://x.com/Vedangggstfu">
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://x.com/Vedangggstfu">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://x.com/Vedangggstfu">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
