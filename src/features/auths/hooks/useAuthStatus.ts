import useFetchAuthStatus from '../queries/useFetchAuthStatus';

const useAuthStatus = () => {
  const { data } = useFetchAuthStatus();
  const isAuthenticated = !!data?.isAuthenticated;

  return { isAuthenticated };
};

export default useAuthStatus;
