import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';
import { toast } from 'react-toastify';
import { createOutfitItem } from '../../../api/outfit';
import {
  CreateOutfitItemErrorResponse,
  CreateOutfitItemRequest,
} from '../../../types/outfit';
import { getServerErrorResponse } from '../../../utils/error';

const useCreateOutfitItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (req: CreateOutfitItemRequest) => createOutfitItem(req),
    throwOnError: (error) => {
      if (getServerErrorResponse(error)?.status === HttpStatusCode.BadRequest) {
        return false;
      }
      return true;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchOutfitItemList'] });
    },
    onError: (error) => {
      const serverError =
        getServerErrorResponse<CreateOutfitItemErrorResponse>(error);
      if (!serverError) {
        return;
      }
      const errorMessages = Object.values(serverError.data).flat();
      toast.warning(
        <>
          {errorMessages.map((message) => (
            <p key={message}>
              {message}
              <br />
            </p>
          ))}
        </>
      );
    },
  });
};

export default useCreateOutfitItem;
