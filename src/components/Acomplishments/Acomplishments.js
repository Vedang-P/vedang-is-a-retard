import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 4, text: 'Major ML Projects' },
  { number: 200, text: 'LeetCode Problems Solved' },
  { number: 1400, text: 'Codeforces Rating' },
  { number: 1, text: 'Research Paper in Progress' }
];


const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>

);

export default Acomplishments;
