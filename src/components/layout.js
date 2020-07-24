import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default function Layout(props) {
  useEffect(() => {
    if (!props.siteMetadata) {
      return null;
    }

    window.document.title =
      props.location === rootPath
        ? props.siteMetadata.title
        : props.siteMetadata.author;
  });

  if (!props.siteMetadata) {
    return null;
  }

  const rootPath = `${__PATH_PREFIX__}/`;
  const blogPath = `${__PATH_PREFIX__}/blog/`;

  const title =
    props.location === rootPath
      ? props.siteMetadata.title
      : props.siteMetadata.author;

  if (!props.siteMetadata) {
    return null;
  }

  return (
    <WrapperStyle>
      <HeaderStyle>
        <LinkStyle to={rootPath}>
          <AvatarStyle
            src={`${props.siteMetadata.siteUrl}/avatar_small.jpg`}
            alt="Home"
          />
        </LinkStyle>
        <TitleStyle>{title}</TitleStyle>
        <SubTitleStyle>Senior Frontend Developer</SubTitleStyle>
        <LinkListStyle>
          {links.map(link => (
            <LinkListItemStyle key={link.label}>
              <RegularLinkStyle
                href={link.href}
                target="_blank"
                aria-label={link.label}
                rel="noreferrer"
              >
                {link.svg}
              </RegularLinkStyle>
            </LinkListItemStyle>
          ))}
          <LinkListItemStyle>
            <BlogLinkStyle to={blogPath}>
              <LinkIconStyle
                role="img"
                viewBox="0 -20 512 511"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m67.179688 48.394531h-.101563c-5.523437 0-10 4.476563-10 10 0 5.523438 4.476563 10 10 10h.101563c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10zm0 0" />
                <path d="m116.710938 48.394531h-.101563c-5.523437 0-10 4.476563-10 10 0 5.523438 4.476563 10 10 10h.101563c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10zm0 0" />
                <path d="m166.242188 48.394531h-.101563c-5.523437 0-10 4.476563-10 10 0 5.523438 4.476563 10 10 10h.101563c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10zm0 0" />
                <path d="m444.308594 48.394531h-192.929688c-5.523437 0-10 4.476563-10 10 0 5.519531 4.476563 10 10 10h192.929688c5.523437 0 10-4.480469 10-10 0-5.523437-4.476563-10-10-10zm0 0" />
                <path d="m262.890625 452.4375c-2.628906 0-5.199219 1.070312-7.070313 2.929688-1.859374 1.859374-2.929687 4.441406-2.929687 7.070312s1.070313 5.210938 2.929687 7.070312c1.871094 1.859376 4.441407 2.929688 7.070313 2.929688s5.210937-1.070312 7.070313-2.929688c1.867187-1.859374 2.929687-4.441406 2.929687-7.070312s-1.0625-5.210938-2.929687-7.070312c-1.859376-1.859376-4.441407-2.929688-7.070313-2.929688zm0 0" />
                <path d="m480.230469.5h-448.460938c-17.515625 0-31.769531 14.253906-31.769531 31.769531v408.398438c0 17.519531 14.253906 31.769531 31.769531 31.769531h189.230469c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-189.230469c-6.488281 0-11.769531-5.277344-11.769531-11.769531v-324.378907h472v324.378907c0 6.488281-5.28125 11.769531-11.769531 11.769531h-176.5625c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h176.5625c17.515625 0 31.769531-14.25 31.769531-31.769531v-408.398438c0-17.515625-14.253906-31.769531-31.769531-31.769531zm-460.230469 95.785156v-64.015625c0-6.488281 5.28125-11.769531 11.769531-11.769531h448.460938c6.488281 0 11.769531 5.28125 11.769531 11.769531v64.019531h-472zm0 0" />
                <path d="m178.039062 230.5c0-19.851562-16.148437-36-36-36h-33.667968c-5.523438 0-10 4.476562-10 10v104c0 5.523438 4.476562 10 10 10h33.667968c19.851563 0 36-16.148438 36-36 0-10.214844-4.28125-19.441406-11.140624-26 6.859374-6.558594 11.140624-15.785156 11.140624-26zm-20 52c0 8.820312-7.179687 16-16 16h-23.667968v-32h23.667968c8.820313 0 16 7.175781 16 16zm-39.667968-36v-32h23.667968c8.824219 0 16 7.179688 16 16s-7.175781 16-16 16zm0 0" />
                <path d="m206.648438 194.5c-5.523438 0-10 4.476562-10 10v80.871094c0 18.269531 14.863281 33.128906 33.128906 33.128906 5.523437 0 10-4.476562 10-10s-4.476563-10-10-10c-7.238282 0-13.128906-5.890625-13.128906-13.128906v-80.871094c0-5.523438-4.476563-10-10-10zm0 0" />
                <path d="m324.867188 282.289062c0-19.96875-16.242188-36.214843-36.210938-36.214843s-36.210938 16.246093-36.210938 36.214843 16.246094 36.210938 36.210938 36.210938c19.96875 0 36.210938-16.242188 36.210938-36.210938zm-52.421876 0c0-8.941406 7.273438-16.214843 16.210938-16.214843s16.210938 7.273437 16.210938 16.214843c0 8.9375-7.269532 16.210938-16.210938 16.210938s-16.210938-7.273438-16.210938-16.210938zm0 0" />
                <path d="m377.414062 346.5c-8.9375 0-16.210937-7.273438-16.210937-16.210938 0-5.523437-4.476563-10-10-10s-10 4.476563-10 10c0 19.96875 16.246094 36.210938 36.210937 36.210938 19.96875 0 36.214844-16.242188 36.214844-36.210938v-48c0-19.96875-16.246094-36.214843-36.214844-36.214843-19.964843 0-36.210937 16.246093-36.210937 36.214843s16.246094 36.210938 36.210937 36.210938c5.828126 0 11.332032-1.390625 16.214844-3.847656v15.636718c0 8.9375-7.273437 16.210938-16.214844 16.210938zm0-48c-8.9375 0-16.210937-7.273438-16.210937-16.210938 0-8.941406 7.273437-16.214843 16.210937-16.214843 8.941407 0 16.214844 7.273437 16.214844 16.214843 0 8.9375-7.273437 16.210938-16.214844 16.210938zm0 0" />
                <path d="m108.371094 416.5h295.257812c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-295.257812c-5.519532 0-10 4.476562-10 10s4.480468 10 10 10zm0 0" />
              </LinkIconStyle>
            </BlogLinkStyle>
          </LinkListItemStyle>
        </LinkListStyle>
      </HeaderStyle>
      <main>{props.children}</main>
    </WrapperStyle>
  );
}

const LinkStyle = styled(Link)`
  box-shadow: none;
  color: #ffffff;
`;

const WrapperStyle = styled.div`
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  font-family: 'Lato', sans-serif;
`;

const HeaderStyle = styled.header`
  background-color: #66a7b8;
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;

const TitleStyle = styled.h1`
  font-size: 48px;
  font-family: 'Pacifico', 'Lato', sans-serif;
  margin: 20px 0;
`;

const SubTitleStyle = styled.h2`
  margin-top: 0;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
`;

const AvatarStyle = styled.img`
  border-radius: 50%;
  border: 10px #fff solid;
  width: 200px;
  margin: auto;
`;

const LinkListStyle = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinkListItemStyle = styled.li`
  padding: 20px;
  display: inline;
`;

const BasicLinkStyle = `text-decoration: none;
transition: color 1s;
fill: #fff;
outline-color: #4d4d4d;
box-shadow: none;`;

const RegularLinkStyle = styled.a`
  ${BasicLinkStyle}
`;

const BlogLinkStyle = styled(LinkStyle)`
  ${BasicLinkStyle}
`;

const LinkIconStyle = styled.svg`
  width: 24px;
  height: 24px;
  transition: transform 1s;
  &:hover {
    transform: scale(1.5);
  }
  @media (max-width: 768px) {
    width: 40px;
    margin-top: 20px;
  }
`;

const links = [
  {
    href: 'https://github.com/imcarvalho/',
    label: 'GitHub',
    svg: (
      <LinkIconStyle
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <titleStyle>GitHub</titleStyle>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </LinkIconStyle>
    ),
  },
  {
    href: 'https://twitter.com/_imcarvalho',
    label: 'Twitter',
    svg: (
      <LinkIconStyle
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <titleStyle>Twitter</titleStyle>
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
      </LinkIconStyle>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/imcarvalho/',
    label: 'LinkedIn',
    svg: (
      <LinkIconStyle
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <titleStyle>LinkedIn</titleStyle>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </LinkIconStyle>
    ),
  },
];
