import img from '../../img/picture.png';
import logo from '../../img/logo.svg';
import { Svg, BgPhoto } from './Logo.styled';

const Logo = () => {
  return (
    <div>
      <Svg src={logo} alt="goit" />
      <BgPhoto src={img} alt="logo" />
    </div>
  );
};
export default Logo;
