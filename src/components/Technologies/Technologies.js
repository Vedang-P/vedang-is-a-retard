import React from 'react';
import { DiReact, DiPython, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies & Tools</SectionTitle>
    <SectionText>
      I'm building a diverse technical stack across machine learning, competitive programming, and system design. From writing neural networks from scratch to simulating physics in code, here's what I work with:
    </SectionText>
    <List>
      <ListItem>
        <DiCode size="3rem"/>
        <ListContainer>
          <ListTitle>ML & AI</ListTitle>
          <ListParagraph>
            Experience with <br />
            NumPy, Pandas, PyTorch, TensorFlow
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Proficient in Python, C++, Java <br />
            Strong in DSA & Algorithms
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Projects & Systems</ListTitle>
          <ListParagraph>
            Building with React, OpenCV, <br />
            Arduino, ROS & FPV drones
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
