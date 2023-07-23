import React, { useContext, useEffect, useState } from "react";
import useCarts from "../../Hooks/useCarts";
import SubHeader from "../SubHeade/SubHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carosal.css";
import { Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Similarproduct = () => {
  const [similarProduct, setSimilarProduct] = useState([]);
  const [setSwiperRef] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cart, refetch] = useCarts();
  const { user } = useContext(AuthContext);
  var categories;
  cart.map((item) => (categories = item.category));

  //fetch data with catrgory
  useEffect(() => {
    fetch(`http://localhost:5000/category?category=${categories}`)
      .then((res) => res.json())
      .then((data) => setSimilarProduct(data));
  }, [similarProduct]);

  //add to chart

  const addTocharts = () => {
    if (user) {
      var selectedItems;
      similarProduct.map(
        (items) =>
          (selectedItems = {
            email: user.email,
            itemsId: items._id,
            name: items.name,
            price: items.price,
            photoOne: items.photoOne,
            quantity: parseInt(1),
            category: items.category,
          })
      );

      const existingItemIndex = cart.findIndex(
        (item) => item.itemsId === selectedItems.itemsId
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex];
        setCartItems(updatedCartItems);
        Swal.fire({
          position: "center",
          icon: "info",
          title: "This product already added",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        const newItem = { ...selectedItems };
        setCartItems([...cartItems, newItem]);
        fetch("http://localhost:5000/carts", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(selectedItems),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              refetch();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully saved on the Cart",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    }
  };

  return (
    <div className="containerr md:block hidden">
      <SubHeader title={"You May Be Interested In These Products"} />
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          {similarProduct.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="font-serif">
                <div className="rounded">
                  <div className="lg:w-[350px] lg:h-[350px] w-fit h-fit mx-auto  lg:p-8 md:p-6 p-4 bg-[#F7F8FC] rounded ">
                    <img
                      className="rounded w-full h-full object-scale-down"
                      src={item.photoOne}
                      alt="productImage"
                    />
                  </div>

                  {/* text section */}
                  <div className="addbtn">
                    <div className="text-center mt-4">
                      <span className="flex justify-center">
                        <Rating
                          readOnly
                          value={item.rating}
                          style={{ maxWidth: 60 }}
                        />
                      </span>
                      <p className="mt-2 text-sm cursor-pointer hover:text-[#007bff]">
                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                      </p>
                      <h4 className="font-semibold text-lg">${item.price}</h4>
                    </div>

                    {/* add chart */}
                    <div className="text-center mt-4 ">
                      {user ? (
                        <button
                          onClick={() => addTocharts()}
                          className="py-2 px-4 btns"
                        >
                          <FaShoppingCart className="inline-block mr-1" />
                          Add To Chart
                        </button>
                      ) : (
                        <button className="py-2 px-4 btns">
                          <Link to="/signIn">
                            <FaShoppingCart className="inline-block mr-1" />
                            Add To Chart
                          </Link>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Similarproduct;
