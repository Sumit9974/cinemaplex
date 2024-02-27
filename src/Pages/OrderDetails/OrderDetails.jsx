import React from 'react'

const OrderDetails = () => {
  return (
    <div className="fooditems">
      <div className="fooditems-top">
        <div className="fooditems-top-left">
          <h1>Order Details</h1>
         
        </div>

        
      </div>

      {/* {openModal ? <AddFoodItemModal closeModal={setOpenModal} /> : null} */}

      <div className="fooditems-bottom table">
        <table>
          <thead>
            <tr>
              <th>ITEM NAME</th>
              <th>CATEGORY</th>
              <th>ADD-ONS</th>
              <th>PRICE</th>
              <th>SALES</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* {currentData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.company.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.address.street}</td>
                  <td>
                    <div className="fooditems-actions">
                      <span>
                        <FiEdit />
                      </span>
                      <span>
                        <AiTwotoneDelete />
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
      {/* <Pagination
        totalPosts={categoryData.length}
        postsPerPage={postPerPage}
        paginate={paginate}
        currentPage={currentPage}
      /> */}
    </div>
  );
}

export default OrderDetails
