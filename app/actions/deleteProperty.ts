"use server";
import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

const deleteProperty = async (id: string) => {
  await connectDB();
  const sessionUser = await getSessionUser();

  // Check for session
  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;
  const property = await Property.findByIdAndDelete(id);

  if (!property) throw new Error("Property Not Found");

  // Verify ownership
  if (property.owner.toString() !== userId) {
    throw new Error("Unauthorized");
  }
  // extract public id's from image url in DB
  const publicIds = property.images.map(imageUrl => {
    const parts = imageUrl.split("/");
    return parts[parts.length - 1].split(".")[0];
  });

  // Delete images from Cloudinary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy("propertypulse/" + publicId);
    }
  }
  await property.deleteOne();

  revalidatePath("/", "layout");
};
export default deleteProperty;
