import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';
import { toast } from 'react-toastify';
import { createCelebrity } from '../../../api/celebrity';
import {
  CreateCelebrityErrorResponse,
  CreateCelebrityRequest,
} from '../../../types/celebrity';
import { getServerErrorResponse } from '../../../utils/error';

const useCreateCelebrity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (req: CreateCelebrityRequest) => createCelebrity(req),
    throwOnError: (error) => {
      if (getServerErrorResponse(error)?.status === HttpStatusCode.BadRequest) {
        return false;
      }
      return true;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchCelebrityList'] });
    },
    onError: (error) => {
      const serverError =
        getServerErrorResponse<CreateCelebrityErrorResponse>(error);
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

export default useCreateCelebrity;
