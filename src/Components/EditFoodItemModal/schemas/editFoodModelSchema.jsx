import * as Yup from "yup";

export const editFoodModelSchema = Yup.object({
  itemName: Yup.string().min(3).required("Please enter item name"),
  itemPrice: Yup.number().required("Please enter price"),
  itemCategory: Yup.string().required("Please Select Category"),
  // itemImage:Yup.string().required("Please Select Image"),
  itemDescription:Yup.string()
});
 