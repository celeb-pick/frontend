import Layout from '../../components/templates/Layout';
import SearchAppBar from './components/SearchAppBar';
import SearchOutfitItemResult from './components/SearchOutfitItemResult';
import SearchOutfitResult from './components/SearchOutfitResult';
import useSearchOptionParam from './useSearchOptionParam';

function SearchPage() {
  const [searchOption] = useSearchOptionParam();

  return (
    <Layout>
      <SearchAppBar />
      {searchOption === '코디' ? (
        <SearchOutfitResult />
      ) : (
        <SearchOutfitItemResult />
      )}
    </Layout>
  );
}

export default SearchPage;
