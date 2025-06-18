import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center className="hero-title">
        Hi! I'm Vedang <br />
        2nd year undergrad 
      </SectionTitle>
      <SectionText>
        I'm a Mathematics and Computing major with a passion for neural networks and intelligent systems. I'm currently diving into Deep Learning, Machine Learning, and Computer Vision, and I love building robots and drones. I'm also actively involved in research, currently working in Graph Theory. Outside of tech, I'm into chess and wasting my time on Twitter.
      </SectionText>
      <Button onClick={() => window.location = 'https://x.com/Vedangggstfu'}>
        posting bangers on twt 24/7 here
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;