import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import SlideCard from '../hero/slide-card';
import { useHeroContext } from "@/provider/hero_section_provider";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]); 
  let { changeData} = useHeroContext();


  return (
    <div className="embla" ref={emblaRef}>
      <div 
      className="embla__container gap-5"
      >
        {changeData.map((data) => (
          <div 
          className="embla__slide"
          >
              <SlideCard
              category={data.type_of}
              title={data.title}
              date={data.readable_publish_date}
              imgUrl={data.social_image}
            />
          </div>
          ))}
      </div>
    </div>
  )
}
