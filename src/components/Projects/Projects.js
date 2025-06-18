import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ImgContainer } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
<GridContainer>
  {projects.map(({id,image,title,description,tags,source,visit}) => (
    <BlogCard key={id}>
      <ImgContainer>
        <Img src={image} />
      </ImgContainer>
      <TitleContent>
        <HeaderThree title >{title}
        </HeaderThree>
        <Hr />
        
      </TitleContent>
      <CardInfo>{description}</CardInfo>
      <div>
        <TitleContent>Stack</TitleContent>
        <TagList>
          {tags.map((tag,i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </TagList>
      </div>
      <UtilityList>
        <ExternalLinks href="https://x.com/Vedangggstfu">Code</ExternalLinks>
        <ExternalLinks href="https://x.com/Vedangggstfu">Source</ExternalLinks>
      </UtilityList>
    </BlogCard>
  ))}
</GridContainer>

    </Section>

);

export default Projects;