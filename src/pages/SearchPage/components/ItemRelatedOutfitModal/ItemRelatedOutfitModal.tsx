import { Suspense } from 'react';
import tw from 'twin.macro';
import Spinner from '../../../../components/atoms/Spinner';
import LocalApiErrorBoundary from '../../../../components/errors/LocalApiErrorBoundary';
import Modal from '../../../../components/organisms/Modal';
import ItemRelatedOutfitFeed from './ItemRelatedOutfitFeed';

interface ItemRelatedOutfitModalProps {
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
  itemId: number;
}

function ItemRelatedOutfitModal({
  isShow,
  setIsShow,
  itemId,
}: ItemRelatedOutfitModalProps) {
  return (
    <Modal isShow={isShow} setIsShow={setIsShow} title="아이템 관련 코디">
      <LocalApiErrorBoundary>
        <Suspense fallback={<Spinner css={[tw`my-72`]} />}>
          <ItemRelatedOutfitFeed itemId={itemId} />
        </Suspense>
      </LocalApiErrorBoundary>
    </Modal>
  );
}

export default ItemRelatedOutfitModal;
