import logo from 'img/logo.svg';
import { Svg } from './Logo.styled';

const Logo = () => {
  return (
    <div>
      <Svg src={logo} alt="goit" />
    </div>
  );
};
export default Logo;
