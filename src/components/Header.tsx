import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlinePhoneAndroid, MdPlace } from 'react-icons/md';

export const Header = ({ name, address, number, email, linkedin, github }) => {
  return (
    <header className='container main-header'>
      <h1>{name}</h1>
      <div>
        <HeaderItem text={address} Icon={MdPlace} />
        <Spacer />
        <HeaderItem text={number} Icon={MdOutlinePhoneAndroid} />
        <Spacer />
        <HeaderItem text={email} Icon={MdOutlineEmail} />
      </div>
      <div>
        <HeaderItem text={linkedin} Icon={FaLinkedinIn} />
        <Spacer />
        <HeaderItem text={github} Icon={FaGithub} />
      </div>
    </header>
  );
};

const HeaderItem = ({ text, Icon }) => {
  return (
    <span className='header-span'>
      <Icon />
      {text}
    </span>
  );
};

const Spacer = () => {
  return <div className='header-spacer'>⬩</div>;
};
