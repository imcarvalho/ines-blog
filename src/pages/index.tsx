import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
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
      <SEO title="Senior Frontend Developer" />
      <ContainerStyle>
        <ColumnStyle>
          <IconStyle
            src={`female-technologist.png`}
            aria-hidden="true"
            alt=""
          />
          <h3>My background</h3>
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
            <a
              target="_blank"
              href="https://www.linkedin.com/in/imcarvalho/"
              rel="noreferrer"
            >
              Check my LinkedIn
            </a>{' '}
            for more detailed info <span aria-hidden="true">✨</span>
          </TextStyle>
        </ColumnStyle>
        <ColumnStyle>
          <IconStyle src={`red-heart.png`} aria-hidden="true" alt="" />
          <h3>Loved stack and tools</h3>
          <ListStyle>
            <li>
              Typescript
              <ListIconStyle src={`ts.png`} aria-hidden="true" alt="" />
            </li>
            <li>
              Styled Components <span aria-hidden="true">💅</span>
            </li>
            <li>
              React
              <ListIconStyle src={`react.svg`} aria-hidden="true" alt="" />
            </li>
            <li>
              VSCode
              <ListIconStyle src={`vscode.svg`} aria-hidden="true" alt="" />
            </li>
            <li>
              iTerm 2 +{' '}
              <a
                target="_blank"
                href="https://github.com/denysdovhan/spaceship-prompt"
                rel="noreferrer"
              >
                Spaceship prompt
              </a>{' '}
              +{' '}
              <a
                target="_blank"
                href="https://github.com/imcarvalho/neonpurple"
                rel="noreferrer"
              >
                Neon Purple theme
              </a>
            </li>
          </ListStyle>
        </ColumnStyle>
        <ColumnStyle>
          <IconStyle src={`yarn.png`} aria-hidden="true" alt="" />
          <h3>Hobbies and loves</h3>
          <ListStyle>
            <li>
              Knitting <span aria-hidden="true">🧶</span>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.stardewvalley.net/"
                rel="noreferrer"
              >
                Stardew Valley
              </a>{' '}
              <span aria-hidden="true">👩‍🌾</span>
            </li>
            <li>
              Animal Crossing <span aria-hidden="true">☘️</span>
            </li>
            <li>
              Instant and 35mm film photography{' '}
              <span aria-hidden="true">📸</span>
            </li>
            <li>
              Dragon Ball
              <ListIconStyle src={`db.png`} aria-hidden="true" alt="" />
            </li>
            <li>
              Reading <span aria-hidden="true">📚</span>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/cucaelola/"
                rel="noreferrer"
              >
                My dogs
              </a>
              , and other people's dogs as well{' '}
              <span aria-hidden="true">🐶</span>
            </li>
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
        social {
          twitter
          github
          linkedin
        }
      }
    }
  }
`;

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ColumnStyle = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 0 20px;
  line-height: 2em;
  width: 33%;
  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const IconStyle = styled.img`
  height: 50px;
  width: 50px;
  margin: 0;
`;

const TextStyle = styled.p`
  text-align: left;
  margin-bottom: 16px;
`;

const ListStyle = styled.ul`
  text-align: left;
`;

const ListIconStyle = styled.img`
  height: 16px;
  width: auto;
  margin-left: 5px;
  vertical-align: text-bottom;
`;
