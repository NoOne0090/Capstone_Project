import React, { useState, useEffect }  from 'react'
import Card from '../Card'

function Video() {
    const [products, setProducts] = useState([
      {
        images: [
          "https://res.cloudinary.com/dvfmllmvt/image/upload/v1693307746/workhive2/cndzapxlsms1zvikjnkh.jpg",
          "https://res.cloudinary.com/dvfmllmvt/image/upload/v1693307749/workhive2/rbso7yvnpc6h68wnspsm.jpg",
          "https://res.cloudinary.com/dvfmllmvt/image/upload/v1693307749/workhive2/eggs7y4slmskh8xjkoxd.webp",
        ],
        name: "Video Editor",
        price: "299",
        description: "Looking forward for collaboration.",
      },
    ]);
    
      useEffect(() => {
  
        const fetchProducts = async () => {
            try {
              // const response = await fetch(`http://localhost:3500/add/${category}`);
              const response = await fetch(`http://localhost:3500/add/logo`);
              const data = await response.json();
              console.log(data)
              // setProducts(data);
              setProducts((prevProducts) => {
                // Filter out products that already exist (based on name)
                const newProducts = data.filter(
                    (product) => !prevProducts.some((p) => p.name === product.name)
                );
                return [...prevProducts, ...newProducts]; // Merge unique products
              });
            } 
            catch (error) {
                console.error("Error fetching products:", error);
            }
            
        };
    
      fetchProducts();
      }, []);
  return (
    <>
      <div style={{margin: '16px 31px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginBottom: '5px'}}>
          <h1 style={{marginBottom: '13px'}}>Video & Animation</h1>
        </div>
        <p style={{color: '#999', fontWeight: '300', fontSize: '1.1rem'}}>Explore the boundaries of art and technology with our video editors</p>

        <br />

        {/* Display all products */}
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {products.map((product, index) => (
            <Card
              key={index}
              images={product.images}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
        
      </div>
      
    </>
  )
}

export default Video
