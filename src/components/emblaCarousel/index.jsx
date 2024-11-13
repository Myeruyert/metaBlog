import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SlideCard from "../hero/slide-card";
import { useHeroContext } from "@/provider/hero_section_provider";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export function EmblaCarousel() {
  // const [emblaRef, emblaApi] = useEmblaCarousel();
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  let { changeData } = useHeroContext();

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container gap-5">
        {changeData.map((data) => (
          <div className="embla__slide">
            <SlideCard
              category={data.type_of}
              title={data.title}
              date={data.readable_publish_date}
              imgUrl={data.social_image}
              tags={data.tag_list}
            />
          </div>
        ))}
      </div>
      {/* <div className="flex justify-end gap-2 mt-2">
        <button
          className="embla__prev border rounded p-2 text-[#696A75]"
          onClick={scrollPrev}
        >
          <GrPrevious />
        </button>
        <button
          className="embla__next border rounded p-2 text-[#696A75]"
          onClick={scrollNext}
        >
          <GrNext />
        </button>
      </div> */}
    </div>
  );
}
