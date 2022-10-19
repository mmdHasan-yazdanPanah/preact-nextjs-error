import { PrimaryButton } from '../components/ButtonV2';

const Landing = () => {
  return <Header />;
};

// ************* COMPONENTS *******************
const Header = () => {
  return (
    <PrimaryButton className='rounded-lg px-10 py-4 text-lg font-medium leading-6 lg:px-12'>
      Sign up
    </PrimaryButton>
  );
};

export default Landing;
