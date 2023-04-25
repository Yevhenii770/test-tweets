import line from '../../img/rectangle.svg';
import ellipse from '../../img/ellipse.svg';
import { Ellipse, HorizontalLine } from './Geometry.styled';
const Geometry = () => {
  return (
    <>
      <HorizontalLine src={line} alt="goit" />
      <Ellipse src={ellipse} alt="goit" />
    </>
  );
};

export default Geometry;
