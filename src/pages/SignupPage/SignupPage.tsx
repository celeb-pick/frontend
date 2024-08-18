import Layout from '../../components/common/Layout';
import SignupForm from './components/SignupForm';

function SignupPage() {
  return (
    <Layout>
      <Layout.TitleWithBackAppBar title="회원가입" navigateTo="/login" />
      <SignupForm />
    </Layout>
  );
}

export default SignupPage;