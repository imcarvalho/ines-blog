import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

export default function Index(props) {
  return (
    <Layout>
      <ContainerStyle>
        <ColumnStyle>
          <IconStyle
            src="./female-technologist.png"
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
          <IconStyle src="./red-heart.png" aria-hidden="true" alt="" />
          <SectionTitleStyle>Loved stack and tools</SectionTitleStyle>
          <ListStyle>
            <li>
              Typescript
              <ListIconStyle src="./ts.png" aria-hidden="true" alt="" />
            </li>
            <li>
              Styled Components <span aria-hidden="true">💅</span>
            </li>
            <li>
              React
              <ListIconStyle src="./react.svg" aria-hidden="true" alt="" />
            </li>
            <li>
              VSCode
              <ListIconStyle src="./vscode.svg" aria-hidden="true" alt="" />
            </li>
            <li>
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
            </li>
          </ListStyle>
        </ColumnStyle>
        <ColumnStyle>
          <IconStyle src="./yarn.png" aria-hidden="true" alt="" />
          <SectionTitleStyle>Hobbies and loves</SectionTitleStyle>
          <ListStyle>
            <li>
              Knitting <span aria-hidden="true">🧶</span>
            </li>
            <li>
              <LinkStyle
                target="_blank"
                href="https://www.stardewvalley.net/"
                rel="noreferrer"
              >
                Stardew Valley
              </LinkStyle>{' '}
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
              <ListIconStyle src="./db.png" aria-hidden="true" alt="" />
            </li>
            <li>
              Reading <span aria-hidden="true">📚</span>
            </li>
            <li>
              <LinkStyle
                target="_blank"
                href="https://www.instagram.com/cucaelola/"
                rel="noreferrer"
              >
                My dogs
              </LinkStyle>
              , and other people's dogs as well
              <span aria-hidden="true">🐶</span>
            </li>
          </ListStyle>
        </ColumnStyle>
      </ContainerStyle>
    </Layout>
  );
}

const ContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  color: #27515a;
  font-family: 'Lato', sans-serif;
`;

const ColumnStyle = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 20px;
  line-height: 2em;
  width: 33%;
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
`;

const TextStyle = styled.p`
  text-align: left;
`;

const LinkStyle = styled.a`
  font-weight: bold;
  text-decoration: none;
  box-shadow: none;
  transition: color 1s;
  color: #42798f;
  &:visited {
    color: #42798f;
  }
  &:hover {
    color: #b3a500;
  }
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
