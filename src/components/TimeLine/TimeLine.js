import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
<Section id="about">
  <SectionTitle>About Me</SectionTitle>
  <SectionText>
    I'm passionate about building things that blend logic, learning, and systems thinking. My current focus lies in machine learning, algorithmic problem solving, and engineering systems—from neural networks to FPV drones.  
    <br /><br />
    I'm actively working on research, personal tech projects, and mastering my fundamentals. Beyond code and math, I care deeply about learning, growing, and leaving something meaningful behind.
  </SectionText>

  <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
    {TimeLineData.map((item, index) => (
      <CarouselMobileScrollNode
        key={index}
        final={index === TOTAL_CAROUSEL_COUNT - 1}
      >
        <CarouselItem
          index={index}
          id={`carousel_item${index}`}
          active={activeItem}
          onClick={(e) => handleClick(e, index)}
        >
          <CarouselItemTitle>
            <CarouselItemText>
              {item.text}

            </CarouselItemText>
            {item.year}
          </CarouselItemTitle>
          {item.title}
        </CarouselItem>
      </CarouselMobileScrollNode>
    ))}
  </CarouselContainer>
  <CarouselButton>
    {TimeLineData.map((item,index) => (
      <CarouselButton 
      key={index}
      index={index}
      active={activeItem}
      onClick={(e) => handleClick(e, index)}
      type="button"
      >
            <CarouselButtonDot active={activeItem} />

        </CarouselButton>
    ))}

  </CarouselButton>
  <SectionDivider />
  
</Section>


  );
};

export default Timeline;
