import React, { useState } from 'react'
import '../css_part/productform.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { useDropzone } from "react-dropzone";

function ProductForm() {
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productDescription, setProductDescription] = useState();
    const [selectedCategory, setSelectedCategory] = useState("logo");
    const [imageUrl, setImageUrl] = useState(""); // Store current input value

    const [formData, setFormData] = useState({
        images: [],
        name: "",
        price: "",
        description: "",
    });
    
    // // Handle Drag-and-Drop Images
    // const onDrop = (acceptedFiles) => {
    //     const imageUrls = acceptedFiles.map((file) => ({
    //         file,
    //         preview: URL.createObjectURL(file),
    //     }));

    //     setFormData((prev) => ({
    //         ...prev,
    //         images: [...prev.images, ...imageUrls], // Append new images
    //     }));
    // };

    // Use react-dropzone
    // const { getRootProps, getInputProps } = useDropzone({
    //     accept: "image/*",
    //     multiple: true,
    //     onDrop,
    // });


    // const handleImageChange = (e) => {
    //     // const files = e.target.files;
    //     const files = Array.from(e.target.files);
    //     // if (files.length > 0) {
    //         const imageUrls = files.map((file) => URL.createObjectURL(file));
    //         console.log(imageUrls);
    
    //         // setFormData({ ...formData, images: imageUrls });
    //         setFormData((prev) => ({
    //             ...prev,
    //             images: [...prev.images, ...imageUrls], // Append new images
    //         }));
    //     // }

    //     e.target.value = "";
    // };

    // Handle adding new image URL
    const handleAddImage = () => {
        if (imageUrl.trim() !== "") {
            setFormData((prev) => ({
                ...prev,
                images: [...prev.images, imageUrl], // Append new image URL
            }));
            setImageUrl(""); // Clear input field
        }
    };

    const handleRemoveImage = (index) => {
        setFormData((prev) => ({
          ...prev,
          images: prev.images.filter((_, i) => i !== index), // Remove image by index
        }));
    };

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        // setFormData((prev) => ({
        //     ...prev,
        //     name: productName,
        //     description: productDescription,
        //     price: productPrice
        // }));

        if ( formData.images.length === 0) {
            toast.warning("Please upload one image url!")
            return;
        }

        const newProduct = {
            name: productName,
            price: productPrice,
            description: productDescription,
            images: formData.images,
            // images: formData.images.map((img) => img.preview),
            category: selectedCategory,
        };

        try {
            const response = await fetch(`http://localhost:3500/add/${selectedCategory}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });
    
            const data = await response.json();
            console.log(data)
            if (response.ok) {
                toast.success("Product added successfully!");
                navigate(`/${selectedCategory}`);
            } 
            else {
                toast.error(data.error || "Failed to add product");
            }
        } 
        catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }

        // navigate(`/${selectedCategory}`, { 
        //     state: { 
        //         newProduct: {
        //             ...formData,
        //             name: productName,
        //             description: productDescription,
        //             price: productPrice
        //         } 
        //     } 
        // });
    };

    return (
        <>
            <div className="productform-container">
                <h1>Add Product</h1>
                <br /> <br />
                <form onSubmit={handleSubmit}>
                    <label htmlFor='productform-name' style={{fontSize: '1.2rem', fontWeight: '550'}}>Product Name </label>
                    <input 
                        type="text" 
                        name="productform-name" 
                        placeholder="Enter product name" 
                        // value={formData.name} 
                        onChange={(e) => setProductName(e.target.value)} 
                        required
                    />
                    
                    <label htmlFor='productform-price' style={{fontSize: '1.2rem', fontWeight: '550'}}>Product Price </label>
                    <input 
                        type="number" 
                        name="productform-price" 
                        placeholder="Enter price" 
                        // value={formData.price} 
                        onChange={(e) => setProductPrice(e.target.value)} 
                        required
                    />

                    <label htmlFor='productform-description' style={{fontSize: '1.2rem', fontWeight: '550'}}>Product Description </label>
                    <textarea 
                        name="productform-description" 
                        placeholder="Enter description" 
                        // value={formData.description} 
                        onChange={(e) => setProductDescription(e.target.value)} 
                        required
                    />

                    <label htmlFor="productform-options" style={{fontSize: '1.2rem', fontWeight: '550'}}>Choose Category</label>
                    <br />
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="logo">Logo</option>
                        <option value="wordpress">Wordpress</option>
                        <option value="voice">Voice</option>
                        <option value="video">Video</option>
                        <option value="programming">Programming</option>
                        <option value="seo">SEO</option>
                        <option value="illustration">Illustration</option>
                        <option value="translation">Translation</option>
                        <option value="book">Book</option>
                        <option value="data">Data</option>
                        <option value="photography">Photography</option>
                        <option value="social">Social</option>
                        <option value="graphics">Graphics</option>
                        <option value="digital">Digital</option>
                        <option value="writing">Writing</option>
                        <option value="music">Music</option>
                    </select>

                    <br /> <br />
                    <label style={{fontSize: '1.2rem', fontWeight: '550'}}>Product Image </label>
                    {/* <input 
                        type="file" 
                        multiple 
                        onChange={handleImageChange} 
                        accept="image/*" 
                        style={{marginBottom: '0'}}
                    />  */}
                    <input 
                        type="text" 
                        placeholder="Enter Image URL"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}  
                        style={{marginBottom: '0'}}
                    /> 
                    <button className='productform-button' type="button" onClick={handleAddImage} style={{width: '11%', padding: '8px'}}>Add Image</button>
                    {/* Drag & Drop Area */}
                    {/*<div {...getRootProps()} className="dropzone">
                        <input {...getInputProps()} />
                        <p>Drag & drop images here, or click to select files</p>
                    </div>*/}
                    {/* <br /> */}
                    {/* Display uploaded images with delete option */}
                    <div className="productform-image-preview">
                    {formData.images.map((img, index) => (
                        <div key={index} className="productform-preview-item">
                            {/* <img src={img} alt="Preview" className="productform-preview-img" /> */}
                            <img src={img} alt="Preview" className="productform-preview-img" />
                            <button type="button" className='productform-preview-button' onClick={() => handleRemoveImage(index)}>❌</button>
                        </div>
                    ))}
                    </div>

                    <button className='productform-button' type="submit">Submit</button>
                </form>



                <br />

                {/* {submittedData && (
                    <Card
                        images={submittedData.images}
                        name={submittedData.name}
                        price={submittedData.price}
                        description={submittedData.description}
                    />
                )} */}
            </div>
        </>
    )
}

export default ProductForm
