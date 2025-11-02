import type { PriceVO } from "../../landlord/model/listing-vo.model";
import type { DisplayPicture } from "../../landlord/model/listing.model";

export interface BookedDatesDTOFromServer{
  startDate: Date;
  endDate: Date;
}

export interface BookedListing{
  location: string,
  cover: DisplayPicture,
  totalPrice: PriceVO,
  dates: BookedDatesDTOFromServer,
  bookingPubicId: string,
  listingPublicId: string,
  loading: boolean
}
