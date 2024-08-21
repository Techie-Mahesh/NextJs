"use server";

import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const addProperty = async formData => {
  await connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }
  const { userId } = sessionUser;

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
    owner: userId
  };
  const imageUrls = [];

  for (const imageFile of data.images) {
    const result = await cloudinary.uploader.upload(imageFile, {
      folder: "propertypulse"
    });
    imageUrls.push(result.secure_url);
  }

  propertyData.images = imageUrls;
  const newProperty = new Property(propertyData);
  await newProperty.save();

  revalidatePath("/", "layout");

  redirect(`/properties/${newProperty._id}`);
};

export default addProperty;
