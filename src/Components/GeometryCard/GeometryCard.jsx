import { Ellipse, HorizontalLine } from './Geometry.styled';
import line from 'img/rectangle.svg';
import ellipse from 'img/ellipse.svg';

const Geometry = () => {
  return (
    <>
      <HorizontalLine src={line} alt="goit" />
      <Ellipse src={ellipse} alt="goit" />
    </>
  );
};

export default Geometry;
