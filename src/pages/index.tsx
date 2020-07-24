import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Colors } from '../entities/enums';
import { SiteMetadata } from '../entities/SiteMetadata';
import { Location } from '../entities/Location';

export default function Index(props: {
  location: Location;
  data: {
    site: { siteMetadata: SiteMetadata };
  };
}) {
  return (
    <Layout
      location={props.location}
      siteMetadata={props.data.site.siteMetadata}
    >
      <SEO title={props.data.site.siteMetadata.author} />
      <ContainerStyle>
        <ColumnStyle>
          <IconStyle
            src={`female-technologist.png`}
            aria-hidden="true"
            alt=""
          />
          <SectionTitleStyle>My background</SectionTitleStyle>
          <TextStyle>
            Born in Portugal <span aria-hidden="true">🇵🇹</span>, currently
            living in Berlin, Deutschland <span aria-hidden="true">🇩🇪</span>
          </TextStyle>
          <TextStyle>
            I've been doing web development since I was 12 years old, and I've
            turned the hobby into my day job <span aria-hidden="true">🎉</span>
          </TextStyle>
          <TextStyle>
            I started my professional career as a fullstack / backend heavy
            developer, dealing mostly with PHP and MySQL and doing frontend on
            the side.
          </TextStyle>
          <TextStyle>
            In 2017 I made the full switch to frontend, and currently I'm
            working predominantly with React.
          </TextStyle>
          <TextStyle>
            <LinkStyle
              target="_blank"
              href="https://www.linkedin.com/in/imcarvalho/"
              rel="noreferrer"
            >
              Check my LinkedIn
            </LinkStyle>{' '}
            for more detailed info <span aria-hidden="true">✨</span>
          </TextStyle>
        </ColumnStyle>
        <ColumnStyle>
          <IconStyle src={`red-heart.png`} aria-hidden="true" alt="" />
          <SectionTitleStyle>Loved stack and tools</SectionTitleStyle>
          <ListStyle>
            <ListItemStyle>
              Typescript
              <ListIconStyle src={`ts.png`} aria-hidden="true" alt="" />
            </ListItemStyle>
            <ListItemStyle>
              Styled Components <span aria-hidden="true">💅</span>
            </ListItemStyle>
            <ListItemStyle>
              React
              <ListIconStyle src={`react.svg`} aria-hidden="true" alt="" />
            </ListItemStyle>
            <ListItemStyle>
              VSCode
              <ListIconStyle src={`vscode.svg`} aria-hidden="true" alt="" />
            </ListItemStyle>
            <ListItemStyle>
              iTerm 2 +{' '}
              <LinkStyle
                target="_blank"
                href="https://github.com/denysdovhan/spaceship-prompt"
                rel="noreferrer"
              >
                Spaceship prompt
              </LinkStyle>{' '}
              +{' '}
              <LinkStyle
                target="_blank"
                href="https://github.com/imcarvalho/neonpurple"
                rel="noreferrer"
              >
                Neon Purple theme
              </LinkStyle>
            </ListItemStyle>
          </ListStyle>
        </ColumnStyle>
        <ColumnStyle>
          <IconStyle src={`yarn.png`} aria-hidden="true" alt="" />
          <SectionTitleStyle>Hobbies and loves</SectionTitleStyle>
          <ListStyle>
            <ListItemStyle>
              Knitting <span aria-hidden="true">🧶</span>
            </ListItemStyle>
            <ListItemStyle>
              <LinkStyle
                target="_blank"
                href="https://www.stardewvalley.net/"
                rel="noreferrer"
              >
                Stardew Valley
              </LinkStyle>{' '}
              <span aria-hidden="true">👩‍🌾</span>
            </ListItemStyle>
            <ListItemStyle>
              Animal Crossing <span aria-hidden="true">☘️</span>
            </ListItemStyle>
            <ListItemStyle>
              Instant and 35mm film photography{' '}
              <span aria-hidden="true">📸</span>
            </ListItemStyle>
            <ListItemStyle>
              Dragon Ball
              <ListIconStyle src={`db.png`} aria-hidden="true" alt="" />
            </ListItemStyle>
            <ListItemStyle>
              Reading <span aria-hidden="true">📚</span>
            </ListItemStyle>
            <ListItemStyle>
              <LinkStyle
                target="_blank"
                href="https://www.instagram.com/cucaelola/"
                rel="noreferrer"
              >
                My dogs
              </LinkStyle>
              , and other people's dogs as well
              <span aria-hidden="true">🐶</span>
            </ListItemStyle>
          </ListStyle>
        </ColumnStyle>
      </ContainerStyle>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        author
      }
    }
  }
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ColumnStyle = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 0 20px;
  line-height: 2em;
  width: 33%;
  &:first-of-type,
  &:last-of-type {
    padding: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionTitleStyle = styled.h3`
  margin-top: 0;
  font-size: 2em;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
`;

const IconStyle = styled.img`
  height: 50px;
  width: 50px;
  margin: 0;
`;

const TextStyle = styled.p`
  text-align: left;
`;

const LinkStyle = styled.a`
  font-weight: bold;
  text-decoration: none;
  box-shadow: none;
  transition: color 1s;
  color: ${Colors.DefaultForeground};
  &:visited {
    color: ${Colors.DefaultForeground};
  }
  &:hover {
    color: ${Colors.DefaultForegroundHover};
  }
`;

const ListStyle = styled.ul`
  text-align: left;
`;

const ListItemStyle = styled.li`
  list-style-position: inside;
`;

const ListIconStyle = styled.img`
  height: 16px;
  width: auto;
  margin-left: 5px;
  vertical-align: text-bottom;
`;
