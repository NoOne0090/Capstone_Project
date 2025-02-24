import React, { useState } from 'react'
import '../css_part/productform.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProductForm() {
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productDescription, setProductDescription] = useState();

    const [formData, setFormData] = useState({
        images: [],
        name: "",
        price: "",
        description: "",
    });
    
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    //   };
    
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file)
        );
        setFormData({ ...formData, images: files });
    };

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData((prev) => ({
            ...prev,
            name: productName,
            description: productDescription,
            price: productPrice
        }));

        if ( formData.images.length === 0) {
            toast.warning("Please upload the image!")
            return;
        }
        // setSubmittedData(formData);

        navigate("/logo", { 
            state: { 
                newProduct: {
                    ...formData,
                    name: productName,
                    description: productDescription,
                    price: productPrice
                } 
            } 
        });
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

                    <label style={{fontSize: '1.2rem', fontWeight: '550'}}>Product Image </label>
                    <input 
                        type="file" 
                        multiple 
                        onChange={handleImageChange} 
                        accept="image/*" 
                    />
                    <button type="submit">Submit</button>
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
