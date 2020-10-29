import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Stack, Text } from 'tamia';
import Layout from '../layouts/Layout';
import SEO from '../components/Seo';
import LandingColumn from '../components/LandingColumn';
import { Location } from '../entities/Location';

export default function Index(props: { location: Location }) {
  return (
    <Layout location={props.location}>
      <SEO title="Senior Frontend Developer" />
      <Stack gap="l" direction={['column', 'column', 'column', 'row', 'row']}>
        <LandingColumn icon="female-technologist.png" title="My background">
          <Text mb="m">
            Portugal <span aria-hidden="true">🇵🇹</span>, ex-emmigrant 
          </Text>
          <Text mb="m">
            I've been doing web development since I was 12 years old, and I've
            turned the hobby into my day job <span aria-hidden="true">🎉</span>
          </Text>
          <Text mb="m">
            I started my professional career as a fullstack / backend heavy
            developer, dealing mostly with PHP and MySQL and doing frontend on
            the side.
          </Text>
          <Text mb="m">
            In 2017 I made the full switch to frontend, and currently I'm
            working predominantly with React.
          </Text>
          <Text mb="m">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/imcarvalho/"
              rel="noreferrer"
            >
              Check my LinkedIn
            </a>{' '}
            for more detailed info <span aria-hidden="true">✨</span>, and you
            can also check <Link to="/blog">my blog</Link>.
          </Text>
        </LandingColumn>
        <LandingColumn icon="red-heart.png" title="Loved stack and tools">
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
            </ListItemStyle>
          </ListStyle>
        </LandingColumn>
        <LandingColumn icon="yarn.png" title="Hobbies and loves">
          <ListStyle>
            <ListItemStyle>
              Knitting <span aria-hidden="true">🧶</span>
            </ListItemStyle>
            <ListItemStyle>
              <a
                target="_blank"
                href="https://www.stardewvalley.net/"
                rel="noreferrer"
              >
                Stardew Valley
              </a>{' '}
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
              <a
                target="_blank"
                href="https://www.instagram.com/cucaelola/"
                rel="noreferrer"
              >
                My dogs
              </a>
              , and other people's dogs as well{' '}
              <span aria-hidden="true">🐶</span>
            </ListItemStyle>
          </ListStyle>
        </LandingColumn>
      </Stack>
    </Layout>
  );
}

const ListStyle = styled.ul`
  list-style: circle;
  list-style-position: inside;
`;

const ListItemStyle = styled.li`
  margin-bottom: 1rem;
`;

const ListIconStyle = styled.img`
  height: 16px;
  width: auto;
  margin-left: 5px;
  vertical-align: text-bottom;
`;
