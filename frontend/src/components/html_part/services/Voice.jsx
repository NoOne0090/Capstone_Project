import React, { useState, useEffect }  from 'react'
import Card from '../Card'

function Voice() {
    const [products, setProducts] = useState([
      {
        images: [
          "https://res.cloudinary.com/dvfmllmvt/image/upload/v1692603181/workhive2/vty85qvrad1jalokslhn.avif",
          "https://res.cloudinary.com/dvfmllmvt/image/upload/v1692603182/workhive2/qxldhpnveu4v4xoxcvs6.jpg",
          "https://res.cloudinary.com/dvfmllmvt/image/upload/v1692603182/workhive2/fj7urg1kzy0sndkcfwww.webp",
        ],
        name: "Voice Over",
        price: "199",
        description: "We Will Provide Voice Over for your videos to make it more impactful.",
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
          <h1 style={{marginBottom: '13px'}}>Voice Over</h1>
        </div>
        <p style={{color: '#999', fontWeight: '300', fontSize: '1.1rem'}}>Explore the boundaries of art and technology with our voice artists</p>

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

export default Voice
