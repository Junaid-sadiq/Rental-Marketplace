'use client'
import { useMemo } from "react";
import { SafeListing } from "@/app/types";
import { Reservation } from "@prisma/client";

import ListingHead from "@/app/components/listings/ListingHead";
import { categories } from "@/app/components/navbar/Categories";
interface ListingClientProps {
    reservation?: Reservation[];
    listing: SafeListing & {
        user: SafeListing;
    } ;
    currentUser?: SafeListing | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    currentUser,
}) => {
    const category = useMemo(() => {
        return categories.find((items) => 
         items.label === listing.category);
     }, [listing.category]);
   
  return (
    <div className='max-w-screen-lg mx-auto'>
        <div className="flex flex-col gap-6">
            <ListingHead
                title={listing.title}
                imageSrc={listing.imageSrc}
                locationValue={listing.locationValue}
                id={listing.id}
                currentUser={currentUser}
            />
        </div>
    </div>
  )
}

export default ListingClient;