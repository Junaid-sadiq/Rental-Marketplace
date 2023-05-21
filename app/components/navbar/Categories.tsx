'use client';
import { TbBeach, TbBuildingCastle, TbMountain, TbPool, TbWindmill } from 'react-icons/tb';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiMountainCave,
  GiWindmill,

} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { MdOutlinePool, MdOutlineVilla } from 'react-icons/md';
import { BiDiamond } from 'react-icons/bi';


export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: TbWindmill,
    description: 'This property is has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern!',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the countryside!',
  },
  {
    label: 'Pools',
    icon: MdOutlinePool,
    description: 'This is property has a beautiful pool!',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is near a lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activies!',
  },
  {
    label: 'Castles',
    icon: TbBuildingCastle,
    description: 'This property is an ancient castle!',
  },
  {
    label: 'Caves',
    icon: GiMountainCave,
    description: 'This property is in a spooky cave!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property offers camping activities!',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property is in arctic environment!',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert!',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in a barn!',
  },
  {
    label: 'Lux',
    icon: BiDiamond,
    description: 'This property is brand new and luxurious!',
  },
];

import Container from '../Container';
import CategoryBox from './CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  const params = useSearchParams();
  const categroy = params?.get('category');
  const pathname = usePathname();

  const isMain = pathname === '/';
  if (!isMain) {
    return null;
  }
  return (
    <Container>
      <div
        className={`   
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
  `}
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={categroy === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
