import axios from "axios";
import React, { useEffect, useState } from "react";
async function FetchProducts() {
  let data = {};
  const response = await axios.get("https://dummyjson.com/products");
  data = await response.data.products;

  return data;
}

export { FetchProducts };
