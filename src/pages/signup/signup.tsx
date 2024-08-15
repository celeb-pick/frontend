import Layout from '../../components/common/layout';
import SignupForm from './signup-form';

function SignupPage() {
  return (
    <Layout>
      <Layout.TitleWithBackAppBar title="회원가입" navigateTo="/login" />
      <SignupForm />
    </Layout>
  );
}

export default SignupPage;
