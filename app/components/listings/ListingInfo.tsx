'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import Map from "../Map";


interface ListingInfoProps {
    user: SafeUser;
    category: {
        icon: IconType;
        label: string;
        description: string;
    } | undefined;
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

    const coorinates = getByValue(locationValue)?.latlng;
  return (
    <div className='col-span-4 flex lfex-col gap-4'>
        <div className='flex flex-col gap-2'>
            <div className='text-xl font-semibold flex flex-row items-center gap-2'>
                <div className="">
                    Hosted by {user?.name}
                </div>
                <Avatar 
                    src={user?.image}
                />
            </div>
            <div className="flex flex-row items-center gap-4 font-light text-neutral-500 dark:neural-50">
                <div className="">{guestCount} guests</div>
                <div className="">{roomCount} bedrooms</div>
                <div className="">{bathroomCount} bathrooms</div>
            </div>
        </div>
        <hr/>
        <Map center={coordinates}/>
    </div>
  )
}

export default ListingInfo;