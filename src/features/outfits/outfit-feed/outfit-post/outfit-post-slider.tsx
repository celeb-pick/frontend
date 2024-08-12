import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import tw from 'twin.macro';
import Chip from '../../../../components/atoms/chip';
import IconButton from '../../../../components/atoms/icon-button';
import { OutfitPostListResponse } from '../../../../types/outfit';

interface OutfitInfoProps {
  type: 'outfitPost' | 'outfitItem';
  scrapCount: number;
  isScrapped: boolean | null;
  chipLabel: string;
  description: string;
}

interface PurchaseIconProps {
  purchaseLink?: string;
}

interface SliderImageProps {
  src: string;
  alt: string;
  children?: ReactNode;
}

interface OutfitPostSliderProps extends ComponentPropsWithoutRef<'div'> {
  outfitPost: OutfitPostListResponse['results'][number];
}

function OutfitInfo({
  type,
  scrapCount,
  isScrapped,
  chipLabel,
  description,
}: OutfitInfoProps) {
  // TODO: 스크랩 토글 기능 추가
  const handleClickScrapButton = () => {};

  const BookmarkIcon = isScrapped
    ? BookmarkRoundedIcon
    : BookmarkBorderRoundedIcon;

  return (
    <div css={[tw`flex-y-center gap-x-1 pl-1 pr-4 py-2.5`]}>
      <IconButton
        onClick={handleClickScrapButton}
        icon={
          <>
            <BookmarkIcon
              css={[tw`mr-0.5`, isScrapped && tw`fill-yellow-300`]}
            />
            <span css={[tw`font-medium`]}>{scrapCount}</span>
          </>
        }
      />
      <Chip
        label={chipLabel}
        color={type === 'outfitPost' ? 'indigo' : 'gray'}
        variant="filled"
      />
      <p css={[tw` pl-1 line-clamp-2 font-medium`]}>{description}</p>
    </div>
  );
}

function PurchaseIcon({ purchaseLink }: PurchaseIconProps) {
  if (!purchaseLink) {
    return null;
  }

  return (
    <a
      aria-label="코디 아이템 구매 링크"
      href={purchaseLink}
      target="_blank"
      css={[
        tw`absolute bottom-3 right-3 flex-center w-9 h-9 bg-gray-500 hover:bg-gray-600 rounded-3xl`,
      ]}
      rel="noreferrer"
    >
      <ShoppingBagOutlinedIcon css={[tw`text-xl text-gray-100`]} />
    </a>
  );
}

function SlideImage({ src, alt, children }: SliderImageProps) {
  return (
    <div css={[tw`relative`]}>
      <img src={src} alt={alt} css={[tw`w-full aspect-square`]} />
      {children}
    </div>
  );
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
          <SlideImage src={outfitPost.imageUrl} alt={outfitPost.title} />
          <OutfitInfo
            type="outfitPost"
            scrapCount={outfitPost.scrapCount}
            isScrapped={outfitPost.isScrapped}
            chipLabel={outfitPost.celebrity.name}
            description={outfitPost.title}
          />
        </SwiperSlide>

        {outfitPost.items.map((outfitItem) => (
          <SwiperSlide key={outfitItem.name}>
            <SlideImage src={outfitItem.imageUrl} alt={outfitItem.name}>
              <PurchaseIcon purchaseLink={outfitItem.purchaseLink} />
            </SlideImage>
            <OutfitInfo
              type="outfitItem"
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
