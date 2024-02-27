import * as Yup from "yup";

export const addFoodModelSchema = Yup.object({
  itemName: Yup.string().min(3).required("Please enter item name"),
  itemPrice: Yup.number().max(1000).required("Please enter price"),
  itemCategory: Yup.string().required("Please Select Category"),
  itemImage:Yup.string().required("Please Select Image"),
  itemDescription:Yup.string()
});
 