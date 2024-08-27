import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

const SavedPropertiesPage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  // NOTE: here we can make one database query by using Model.populate
  const { bookmarks } = await User.findById(userId)
    .populate("bookmarks")
    .lean();

  return <h1>{bookmarks}</h1>;
};
export default SavedPropertiesPage;
