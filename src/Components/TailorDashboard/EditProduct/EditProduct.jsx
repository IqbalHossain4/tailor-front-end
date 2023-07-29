import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthProvider";
let image_hoisting_token = import.meta.env.VITE_imgApi;

const EditProduct = () => {
  const productData = useLoaderData();
  //   console.log(productData);

  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState(null);
  const [productType, setProductType] = useState(null);
  const [productOne, setProductOne] = useState(null);
  const [productTwo, setProductTwo] = useState(null);
  const [productThree, setProductThree] = useState(null);
  const [productFour, setProductFour] = useState(null);
  const [productFive, setProductFive] = useState(null);
  const [productSix, setProductSix] = useState(null);
  const [selectedFileOne, setSelectedFileOne] = useState(null);
  const [selectedFileTwo, setSelectedFileTwo] = useState(null);
  const [selectedFileThree, setSelectedFileThree] = useState(null);
  const [storeImgOne, setStoreImgOne] = useState(null);
  const [storeImgTwo, setStoreImgTwo] = useState(null);
  const [storeImgThree, setStoreImgThree] = useState(null);
  //handle Category

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    if (selectedCategory === "Men") {
      setProductOne("Pant");
      setProductTwo("Shirt");
      setProductThree("T-Shirt");
      setProductFour("Punjabi");
      setProductFive("Longi");
      setProductSix(null);
    } else if (selectedCategory === "Women") {
      setProductOne("Pant");
      setProductTwo("Shirt");
      setProductThree("T-Shirt");
      setProductFour("Shari");
      setProductFive("Three Pies");
      setProductSix("Sheloar Comiz");
    } else if (selectedCategory === "Kids") {
      setProductOne("Pant");
      setProductTwo("Shirt");
      setProductThree("T-Shirt");
      setProductFour("Punjabi");
      setProductFive("Sports");
      setProductSix(null);
    } else if (selectedCategory === "Couples") {
      setProductOne(null);
      setProductTwo(null);
      setProductThree(null);
      setProductFour("Punjabi + Shari");
      setProductFive("Shirt + Three Pies");
      setProductSix(null);
    } else {
      setProductOne(null);
      setProductTwo(null);
      setProductThree(null);
      setProductFour(null);
      setProductFive(null);
      setProductSix(null);
    }
  };

  // img hoisting
  let img_hoisting_url = `https://api.imgbb.com/1/upload?key=${image_hoisting_token}`;

  const handlePhotoOne = (e) => {
    setSelectedFileOne(e.target.files[0]);
  };
  const formDataOne = new FormData();
  formDataOne.append("image", selectedFileOne);
  fetch(img_hoisting_url, {
    method: "POST",
    body: formDataOne,
  })
    .then((res) => res.json())
    .then((imgdata) => {
      setStoreImgOne(imgdata.data ? imgdata.data.display_url : "");
    });

  const handlePhotoTwo = (e) => {
    setSelectedFileTwo(e.target.files[0]);
  };
  const formData = new FormData();
  formData.append("image", selectedFileTwo);
  fetch(img_hoisting_url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imgdata) => {
      setStoreImgTwo(imgdata.data ? imgdata.data.display_url : "");
    });
  const handlePhotoThree = (e) => {
    setSelectedFileThree(e.target.files[0]);
  };
  const formDataThree = new FormData();
  formDataThree.append("image", selectedFileThree);
  fetch(img_hoisting_url, {
    method: "POST",
    body: formDataThree,
  })
    .then((res) => res.json())
    .then((imgdata) => {
      setStoreImgThree(imgdata.data ? imgdata.data.display_url : "");
    });

  //handleAddProduct

  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.productName.value;
    const photoOne = storeImgOne;
    const photoTwo = storeImgTwo;
    const photoThree = storeImgThree;
    const productName = productType;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const quantity = e.target.stock.value;
    const itemData = {
      name: name,
      photoOne: photoOne,
      photoTwo: photoTwo,
      photoThree: photoThree,
      category: category,
      productName: productName,
      price: price,
      description: description,
      totalQuantity: quantity,
    };

    fetch(`http://localhost:5000/productUpdate/${productData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "SucceessFully updated Your Product",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="w-full h-full flex items-center justify-center mt-4 font-serif text-xs">
        <div className="border p-16 ">
          <form onSubmit={handleAddProduct}>
            <div className="flex flex-col w-full">
              <div className="md:flex items-center ">
                <div className="input-container flex flex-col w-full">
                  <input
                    placeholder="Name"
                    className="input-field md:w-[300px] w-full"
                    type="text"
                    name="productName"
                    defaultValue={productData.name}
                  />
                  <label className="input-label">Name</label>
                  <span className="input-highlight"></span>
                </div>

                <div className="input-container flex flex-col w-full">
                  <input
                    placeholder="Stock"
                    className="input-field md:w-[300px] w-full"
                    type="text"
                    name="stock"
                    defaultValue={productData.totalQuantity}
                  />
                  <label className="input-label">Stock</label>
                  <span className="input-highlight"></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="md:flex items-center">
                <div className="input-container flex flex-col w-full">
                  <select
                    onChange={handleCategoryChange}
                    className=" md:w-[300px] w-full border-b-2 border-[#b2b8c9] p-[10px] font-[16px] text-sm input-field"
                    defaultValue={productData.categorys}
                  >
                    <option value="Categories" selected disabled>
                      Categories
                    </option>
                    <option value="Men" className="mt-16">
                      Men
                    </option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                    <option value="Couples">Couples</option>
                  </select>
                  <label className="input-label">Categories</label>
                  <span className="input-highlight"></span>
                </div>

                <div className="input-container flex flex-col w-full">
                  <select
                    onChange={(e) => setProductType(e.target.value)}
                    className=" md:w-[300px] w-full border-b-2 border-[#b2b8c9] p-[10px] font-[16px] text-sm input-field"
                    defaultValue={productData.productName}
                  >
                    <option value="Product Type" selected disabled>
                      Product Type
                    </option>
                    {productOne && (
                      <option value={productOne}>{productOne}</option>
                    )}
                    {productTwo && (
                      <option value={productTwo}>{productTwo}</option>
                    )}
                    {productThree && (
                      <option value={productThree}>{productThree}</option>
                    )}
                    {productFour && (
                      <option value={productFour}>{productFour}</option>
                    )}
                    {productFive && (
                      <option value={productFive}>{productFive}</option>
                    )}
                    {productSix && (
                      <option value={productSix}>{productSix}</option>
                    )}
                  </select>
                  <label className="input-label">Product Type</label>
                  <span className="input-highlight"></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="md:flex items-center ">
                <div className="input-container flex flex-col w-full">
                  <input
                    placeholder="Price: $"
                    className="input-field  w-full"
                    type="text"
                    name="price"
                    defaultValue={productData.price}
                  />
                  <label className="input-label">Price</label>
                  <span className="input-highlight"></span>
                </div>
              </div>
            </div>

            {/* Handle Image */}

            <div className="input-container">
              <label className="">Upload Photo</label>
              <input
                type="file"
                className="input-field  w-full"
                onChange={handlePhotoOne}
                required
              />
            </div>

            <div className="input-container  ">
              <label className="">Upload Front</label>
              <input
                type="file"
                className="input-field  w-full"
                onChange={handlePhotoTwo}
                required
              />
            </div>

            <div className="input-container  ">
              <label className="">Upload Back</label>
              <input
                type="file"
                className="input-field  w-full"
                onChange={handlePhotoThree}
                required
              />
            </div>

            {/* Description */}
            <div className="input-container">
              <textarea
                name="description"
                className="w-full border-none outline-none 
                input-field"
                defaultValue={productData?.description}
                rows="10"
              ></textarea>
            </div>
            {/* submit Button */}
            <div className="input-container bg-emerald-500 text-white transition-all ease-in-out duration-200  hover:bg-[#000000] hover:text-white  font-semibold mb-24 input-container">
              <input
                className="input-field cursor-pointer w-full"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
