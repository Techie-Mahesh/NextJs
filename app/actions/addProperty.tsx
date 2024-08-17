"use server";
const addProperty = async formData => {
  await console.log("Add Property", formData.name, formData);
};

export default addProperty;
