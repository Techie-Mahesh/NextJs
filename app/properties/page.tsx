import Properties from "@/components/Properties";
import connectDB from "@/config/database";
import Property from "@/models/Property";

const PropertiesPage = async () => {
  await connectDB();

  let properties = [];
  try {
    properties = await Property.find({}).lean();
  } catch (error: any) {
    console.error("Error fetching properties:", error);
  }

  return <Properties properties={JSON.parse(JSON.stringify(properties))} />;
};

export default PropertiesPage;
