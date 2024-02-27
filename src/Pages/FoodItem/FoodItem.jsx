import React, { useEffect, useState } from "react";
import "./FoodItem.css";
import { IoIosSearch } from "react-icons/io";
import { FoodItemData } from "./FoodItemData";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import AddFoodItemModal from "../../Components/AddFoodItemModal/AddFoodItemModal";
import Data from "./FoodItemData.json";
import axios from "axios";
import Pagination from "../../Components/Pagination/Pagination";
import EditFoodItemModel from "../../Components/EditFoodItemModal/EditFoodItemModal";

const FoodItem = () => {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(7);

  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const [editModalData, setEditModalData] = useState("");
  //getting current page posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const [filterData, setFilterData] = useState(foodData);

  const currentPosts = filterData.slice(indexOfFirstPost, indexOfLastPost);
  // const currentPosts = foodData.slice(indexOfFirstPost, indexOfLastPost);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      setFoodData(response.data.products);
      setFilterData(response.data.products);
      setLoading(false);
    };

    fetch();
  }, []);

  function updateFoodItem(data) {
    setFoodData(
      foodData.map((item) => {
        if (item.id === data.itemId) {
          item.title = data.itemName;
          item.brand = data.itemCategory;
          item.price = data.itemPrice;
          item.description = data.itemDescription;
        }
        return item;
      })
    );
  }

  const paginate = (pagenumber) => {
    if (
      pagenumber >= 1 &&
      pagenumber <= Math.ceil(filterData.length / postPerPage) &&
      pagenumber !== currentPage
    ) {
      setCurrentPage(pagenumber);
    }
  };

  return loading ? (
    <h1>Loding Data</h1>
  ) : (
    <div className="fooditems">
      <div className="fooditems-top">
        <div className="fooditems-top-left">
          <h1>Food Items</h1>
          <button
            className="openModalButton"
            onClick={() => {
              setOpenAddModal(true);
            }}
          >
            Add New
          </button>
        </div>
        <div className="fooditems-top-right search-area">
          <input
            type="text"
            placeholder="Search here.."
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              setFilterData(
                foodData.filter((data) =>
                  data.title.toLowerCase().includes(event.target.value)
                )
              );
            }}
          />
          <span className="search-icon">
            <IoIosSearch />
          </span>
        </div>
      </div>
      {openAddModal ? <AddFoodItemModal closeModal={setOpenAddModal} /> : null}

      {openEditModal ? (
        <EditFoodItemModel
          closeModal={setOpenEditModal}
          editId={editModalData}
          data={currentPosts}
          updateData={updateFoodItem}
        />
      ) : null}

      {filterData.length <= 0 ? (
        <h1>No Data Found</h1>
      ) : (
        <>
          <div className="fooditems-bottom table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {console.log(foodData)}

                {currentPosts.map((item, i) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <img src={item.thumbnail} alt={item.title} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td>{item.description}</td>
                      <td>
                        <div className="fooditems-actions">
                          <span
                            className="fooditems-action-edit"
                            onClick={(e) => {
                              console.log(e.target);
                              setOpenEditModal(true);
                              setEditModalData(item.id);
                            }}
                          >
                            <FiEdit />
                          </span>
                          <span className="fooditems-action-edit">
                            <AiTwotoneDelete />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Pagination
            totalPosts={filterData.length}
            postsPerPage={postPerPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};
export default FoodItem;
