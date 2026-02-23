import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --color-bg: hsl(0deg 0% 25%);
    --color-text: hsl(0deg 0% 60%);
    --color-line-1: hsl(355deg 100% 60%);
    --color-line-2: hsl(110deg 50% 40%);
  }

  body {
    margin: 0;
    background: var(--color-bg);
    color: var(--color-text);
    font-family: sans-serif;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;

  button {
    border: none;
    padding: 8px 16px;
    font-size: 1rem;
    background: hsl(0deg 0% 100% / 0.2);
    color: hsl(40deg 100% 60%);
    cursor: pointer;
  }
`;

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
  padding-top: 48px;
`;

const GraphPrefix = styled.p`
  text-align: center;
  margin-bottom: 32px;
`;

const GraphWrapper = styled.div`
  position: relative;
  border: 2px solid hsl(0deg 0% 100% / 0.1);
  padding: 4px;
`;

const Legend = styled.ol`
  position: absolute;
  top: 1rem;
  left: 1rem;
  list-style-type: none;
  margin: 0;
  padding: 1rem;
  background: hsl(0deg 0% 0% / 0.1);
`;

const LegendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LegendBox = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid white;

  &.froogle {
    background-color: var(--color-line-1);
  }

  &.glamazon {
    background-color: var(--color-line-2);
  }
`;

const StyledSVG = styled.svg`
  width: 100%;
`;

const FroogleLine = styled.path`
  stroke: var(--color-line-1);
  stroke-width: 4px;
`;

const GlamazonLine = styled.path`
  stroke: var(--color-line-2);
  stroke-width: 4px;
`;

export default function FinancialTrends() {
  return (
    <>
      <GlobalStyles />

      <Header>
        <h1>Financial Trends</h1>
        <div>
          <button>Log Out</button>
        </div>
      </Header>

      <Main>
        <GraphPrefix>
          Comparing <strong>Froogle</strong> and <strong>Glamazon</strong>:
        </GraphPrefix>

        <GraphWrapper>
          <Legend>
            <LegendItem>
              <LegendBox className="froogle" /> Froogle
            </LegendItem>
            <LegendItem>
              <LegendBox className="glamazon" /> Glamazon
            </LegendItem>
          </Legend>

          <StyledSVG
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="300"
            viewBox="0 0 800 300"
            fill="none"
          >
            <FroogleLine d="M 0,299 L 20,297 L 40,295 L 60,296 L 80,290 L 100,280 L 120,292 L 140,271 L 160,252 L 180,258 L 200,232 L 220,240 L 240,255 L 260,261 L 280,255 L 300,252 L 320,259 L 340,246 L 360,240 L 380,231 L 400,212 L 420,218 L 440,208 L 460,200 L 480,199 L 500,190 L 520,213 L 540,188 L 560,184 L 580,190 L 600,198 L 620,193 L 640,197 L 660,191 L 680,195 L 700,188 L 720,182 L 740,200 L 760,171 L 780,192 L 800,180" />
            <GlamazonLine d="M 0,298 L 20,291 L 40,289 L 60,292 L 80,270 L 100,271 L 120,232 L 140,245 L 160,212 L 180,199 L 200,197 L 220,168 L 240,172 L 260,141 L 280,172 L 300,190 L 320,201 L 340,235 L 360,220 L 380,211 L 400,204 L 420,209 L 440,232 L 460,200 L 480,188 L 500,172 L 520,155 L 540,165 L 560,123 L 580,131 L 600,140 L 620,136 L 640,117 L 660,90 L 680,92 L 700,80 L 720,81 L 740,120 L 760,150 L 780,168 L 800,170" />
          </StyledSVG>
        </GraphWrapper>
      </Main>
    </>
  );
}
