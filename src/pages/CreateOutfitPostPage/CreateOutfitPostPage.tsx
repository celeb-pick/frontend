import Layout from '../../components/templates/Layout';
import CreateOutfitPostFunnel from './components/CreateOutfitPostFunnel';
import { CreateOutfitPostPageProvider } from './CreateOutfitPostPageProvider';

function CreateOutfitPostPage() {
  return (
    <CreateOutfitPostPageProvider>
      <Layout>
        <Layout.TitleWithCloseAppBar title="코디 추가" navigateTo="/" />
        <CreateOutfitPostFunnel />
      </Layout>
    </CreateOutfitPostPageProvider>
  );
}

export default CreateOutfitPostPage;
