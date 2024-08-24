import { ComponentPropsWithoutRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import tw from 'twin.macro';
import { OutfitPostListResponse } from '../../../../../../types/outfit';
import OutfitPostSliderImage from './OutfitPostSliderImage';
import OutfitPostSliderInfo from './OutfitPostSliderInfo';

interface OutfitPostSliderProps extends ComponentPropsWithoutRef<'div'> {
  outfitPost: OutfitPostListResponse['results'][number];
}

function OutfitPostSlider({ outfitPost, ...props }: OutfitPostSliderProps) {
  return (
    <div css={{ '--swiper-pagination-bottom': '8px' }} {...props}>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        css={[tw`pb-10`]}
      >
        <SwiperSlide>
          <OutfitPostSliderImage
            src={outfitPost.image}
            alt={outfitPost.title}
          />
          <OutfitPostSliderInfo
            outfitPostId={outfitPost.id}
            scrapCount={outfitPost.scrapCount}
            isScrapped={outfitPost.isScrapped}
            chipLabel={outfitPost.celebrity.name}
            description={outfitPost.title}
          />
        </SwiperSlide>

        {outfitPost.items.map((outfitItem) => (
          <SwiperSlide key={outfitItem.name}>
            <OutfitPostSliderImage
              src={outfitItem.imageUrl}
              alt={outfitItem.name}
              purchaseLink={outfitItem.purchaseLink}
            />
            <OutfitPostSliderInfo
              outfitItemId={outfitItem.id}
              scrapCount={outfitItem.scrapCount}
              isScrapped={outfitItem.isScrapped}
              chipLabel={outfitItem.brand.name}
              description={outfitItem.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OutfitPostSlider;
