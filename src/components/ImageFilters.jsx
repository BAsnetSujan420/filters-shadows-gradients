import React from 'react';
import styled from 'styled-components';

const Gallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const Card = styled.div``;

const Title = styled.h2`
  font-size: 18px;
`;

const Img = styled.img`
  width: 300px;
  border-radius: 8px;
`;

const BrightnessImg = styled(Img)`
  filter: brightness(1.4);
`;

const ContrastImg = styled(Img)`
  filter: contrast(0.6);
`;

const SepiaImg = styled(Img)`
  filter: sepia(1);
`;

const MixedImg = styled(Img)`
  filter: contrast(1.4) grayscale(1);
`;

export default function ImageFilters() {
  const src = 'https://courses.joshwcomeau.com/cfj-mats/akihabara.jpg';

  return (
    <Gallery>
      <Card>
        <Title>Default (no filter)</Title>
        <Img alt="A colourful busy street in Tokyo, Japan" src={src} />
      </Card>

      <Card>
        <Title>Boosted Brightness</Title>
        <BrightnessImg
          alt="A colourful busy street in Tokyo, Japan"
          src={src}
        />
      </Card>

      <Card>
        <Title>Lowered Contrast</Title>
        <ContrastImg alt="A colourful busy street in Tokyo, Japan" src={src} />
      </Card>

      <Card>
        <Title>Sepia</Title>
        <SepiaImg alt="A colourful busy street in Tokyo, Japan" src={src} />
      </Card>

      <Card>
        <Title>Contrast + grayscale</Title>
        <MixedImg alt="A colourful busy street in Tokyo, Japan" src={src} />
      </Card>
    </Gallery>
  );
}
