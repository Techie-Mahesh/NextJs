"use server";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const updateProperty = async (formData, propertyId) => {
  await connectDB();
  const sessionUser = await getSessionUser();
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }
  const existingProperty = await Property.findById(propertyId);
  if (existingProperty?.owner?.toString() !== sessionUser.userId) {
    throw new Error("Current user does not own this property.");
  }
  const data = await JSON.parse(formData);
  const {
    propertyType,
    listingName,
    description,
    location: { street, city, state, zip },
    propertyDetails: { beds, baths, squareFeet },
    amenities,
    price: { weekly, monthly, nightly },
    sellerName,
    sellerEmail,
    sellerPhone
  } = data;

  const propertyData = {
    type: propertyType,
    name: listingName,
    description,
    location: {
      street,
      city,
      state,
      zipcode: zip
    },
    beds,
    baths,
    square_feet: squareFeet,
    amenities,
    rates: {
      weekly,
      monthly,
      nightly
    },
    seller_info: {
      name: sellerName,
      email: sellerEmail,
      phone: sellerPhone
    },
    owner: sessionUser.userId
  };
  const updatedProperty = await Property.findByIdAndUpdate(
    propertyId,
    propertyData
  );
  revalidatePath("/", "layout");

  redirect(`/properties/${updatedProperty._id}`);
};
export default updateProperty;
