'use client';
import { TbBeach, TbWindmillFilled } from 'react-icons/tb';
import {RiHotelLine} from 'react-icons/ri';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is 100m from the beach',
  },
  {
    label: 'windmills',
    icon: TbWindmillFilled,
    description: 'This property has windmills in the vicinity',
  },
  {
    label: 'Hotels',
    icon: RiHotelLine,
    description: 'This property is in a hotel',
  },
];
import Container from '../Container';
import CategoryBox from './CategoryBox';

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <Container>
      <div className="flex flex-row items-center justify-center pt-4 overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
