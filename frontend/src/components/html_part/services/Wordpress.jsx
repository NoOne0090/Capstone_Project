import React, { useState, useEffect }  from 'react'
// import { Link } from 'react-router-dom'
import Card from '../Card'

function Wordpress() {
  const [products, setProducts] = useState([
    {
      images: [
        "http://res.cloudinary.com/dvfmllmvt/image/upload/v1692551390/workhive2/khyd4kz1ows2d9j9vdlq.jpg",
        "http://res.cloudinary.com/dvfmllmvt/image/upload/v1692551391/workhive2/vnlwctmqakm5y2hwhjvb.png",
        "https://res.cloudinary.com/dvfmllmvt/image/upload/v1692551393/workhive2/screequvs9vgfgyfg34s.webp",
      ],
      name: "Wordpress Templates",
      price: "199",
      description: "Responsive Designs",
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
          <h1 style={{marginBottom: '13px'}}>Wordpress</h1>
        </div>
        <p style={{color: '#999', fontWeight: '300', fontSize: '1.1rem'}}>Explore the boundaries of art and technology with our wordpress artists</p>

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

export default Wordpress
