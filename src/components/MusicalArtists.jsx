import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: hsl(215deg 15% 6%);
    font-family: sans-serif;
  }
`;

const Artists = styled.section`
  max-width: 400px;
  padding: 16px 32px;

  display: flex;
  gap: 16px;

  background: white;
  border-radius: 4px;

  overflow: auto;
`;

const ArtistCard = styled.article`
  position: relative;
  min-width: calc(100% - 32px);
  height: 400px;

  border-radius: 6px;
  overflow: hidden;
`;

const CoverArt = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const About = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  height: 50%;
  display: flex;
  align-items: flex-end;

  padding: 16px 24px;

  font-size: 1.5rem;
  font-weight: 500;
  color: white;

  background: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.01) 8.1%,
    hsla(0, 0%, 0%, 0.037) 15.5%,
    hsla(0, 0%, 0%, 0.08) 22.5%,
    hsla(0, 0%, 0%, 0.135) 29%,
    hsla(0, 0%, 0%, 0.2) 35.3%,
    hsla(0, 0%, 0%, 0.271) 41.2%,
    hsla(0, 0%, 0%, 0.347) 47.1%,
    hsla(0, 0%, 0%, 0.423) 52.9%,
    hsla(0, 0%, 0%, 0.499) 58.8%,
    hsla(0, 0%, 0%, 0.57) 64.7%,
    hsla(0, 0%, 0%, 0.635) 71%,
    hsla(0, 0%, 0%, 0.69) 77.5%,
    hsla(0, 0%, 0%, 0.733) 84.5%,
    hsla(0, 0%, 0%, 0.76) 91.9%,
    hsla(0, 0%, 0%, 0.77) 100%
  );
`;

export default function App() {
  const data = [
    {
      name: 'Silk Stream',
      src: 'https://courses.joshwcomeau.com/cfj-mats/cover-art-water.jpg',
    },
    {
      name: 'Sour Patch Grift',
      src: 'https://courses.joshwcomeau.com/cfj-mats/cover-art-lemons.jpg',
    },
    {
      name: 'はらじゅく CELEBRATION',
      src: 'https://courses.joshwcomeau.com/cfj-mats/cover-art-neon.jpg',
    },
    {
      name: 'Ethereal Engine',
      src: 'https://courses.joshwcomeau.com/cfj-mats/cover-art-abstract.jpg',
    },
    {
      name: 'Sunday Whispers',
      src: 'https://courses.joshwcomeau.com/cfj-mats/cover-art-dogflowers.jpg',
    },
    {
      name: 'Temple',
      src: 'https://courses.joshwcomeau.com/cfj-mats/cover-art-body-art.jpg',
    },
  ];

  return (
    <>
      <GlobalStyles />
      <Artists>
        {data.map((artist) => (
          <ArtistCard key={artist.name}>
            <CoverArt src={artist.src} alt="" />
            <About>{artist.name}</About>
          </ArtistCard>
        ))}
      </Artists>
    </>
  );
}
