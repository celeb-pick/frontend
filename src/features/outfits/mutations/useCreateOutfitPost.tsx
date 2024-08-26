import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createOutfitPost } from '../../../api/outfit';
import {
  CreateOutfitPostErrorResponse,
  CreateOutfitPostRequest,
} from '../../../types/outfit';
import { getServerErrorResponse } from '../../../utils/error';

const useCreateOutfitPost = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (req: CreateOutfitPostRequest) => createOutfitPost(req),
    throwOnError: (error) => {
      if (getServerErrorResponse(error)?.status === HttpStatusCode.BadRequest) {
        return false;
      }
      return true;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchOutfitPostList'] });
      // TODO 내가 추가한 코디 페이지로 이동하게 변경
      navigate('/');
    },
    onError: (error) => {
      const serverError =
        getServerErrorResponse<CreateOutfitPostErrorResponse>(error);
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

export default useCreateOutfitPost;
