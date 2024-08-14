import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import tw from 'twin.macro';

interface OutfitImageProps {
  src: string;
  alt: string;
  purchaseLink?: string;
}

interface PurchaseIconProps {
  purchaseLink?: string;
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

function OutfitImage({ src, alt, purchaseLink }: OutfitImageProps) {
  return (
    <div css={[tw`relative`]}>
      <img src={src} alt={alt} css={[tw`w-full aspect-square`]} />
      <PurchaseIcon purchaseLink={purchaseLink} />
    </div>
  );
}

export default OutfitImage;
