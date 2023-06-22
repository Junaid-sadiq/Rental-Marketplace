'use client';

import { SafeUser } from "@/app/types";
import useCountries from "@/app/hooks/useCountries";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";
import ListingInfo from "./ListingInfo";

interface ListingHeadProps {
    title: string;
    locationValue: string;
    imageSrc: string;
    id: string;
    currentUser?: SafeUser | null;
}


const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    locationValue,
    imageSrc,
    id,
    currentUser,
}) => {
    const { getByValue } = useCountries();

    const location = getByValue(locationValue);

  return (
    <>
    <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
    />
    <div className="
            w-full
            h-[60vh]
            overflow-hidden
            rounded-xl
            relative
    "> 
        <Image
             alt='Image'
             src={imageSrc}
             fill
             className='w-full object-cover'
        />
        <div className="absolute top-5 right-5">
            <HeartButton
                listingId={id}
                currentUser={currentUser}
            />
            <div className="grid grid-cols-1 md:grid-cols-7
            md:gap-10 mt-6">
                <ListingInfo
                    user={listing.user}
                    category={category}
                    description={listing.description}
                    roomCount={listing.roomCount}
                    guestCount={listing.guestCount}
                    bathroomCount={listing.bathroomCount}
                    locationValue={listing.locationValue}


                />
            </div>
        </div>
    </div>
    </>
  )
}

export default ListingHead;
