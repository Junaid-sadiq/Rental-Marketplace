import { SafeListing } from "@/app/types";
import { Reservation } from "@prisma/client";

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
  return (
    <div>ListingClient</div>
  )
}

export default ListingClient;