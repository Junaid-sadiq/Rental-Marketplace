'use client';

import useCountries from '@/app/hooks/useCountries';
import { SafeUser } from '@/app/types';
import { IconType } from 'react-icons';
import Avatar from '../Avatar';
import ListingCategory from './ListingCategory';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../Map'), { ssr: false });

interface ListingInfoProps {
  user: SafeUser;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div className="">Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500 dark:text-neutral-400">
          <div className="">{guestCount} guests</div>
          <div className="">{roomCount} bedrooms</div>
          <div className="">{bathroomCount} bathrooms</div>
        </div>
      </div>
      <div className="border-[1px] border-b-neutral-400 dark:border-b-neutral-400"></div>
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      {description && (
        <>
          <div className="border-[1px] border-b-neutral-400 dark:border-b-neutral-400"></div>
          <div className="text-lg font-light text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        </>
      )}
      <div className="border-[1px] border-b-neutral-400 dark:border-b-neutral-400"></div>
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
