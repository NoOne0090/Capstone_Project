import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card'

function LogoDesign() {
  // const location = useLocation();
  const [products, setProducts] = useState([
    {
      images: [
        "http://res.cloudinary.com/dvfmllmvt/image/upload/v1692476375/cgeny2eik5ilcwufokv0.jpg",
        "https://res.cloudinary.com/dvfmllmvt/image/upload/v1692476377/rztgyzv2bfylptoddafe.jpg",
        "https://res.cloudinary.com/dvfmllmvt/image/upload/v1692476376/ggopmkn9eu2j5qqfenk0.jpg",
      ],
      name: "Logo Design",
      price: "100",
      description: "Creates a logo design",
    },
  ]);


  // Visible for admin only
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if(storedUser){
      const user = JSON.parse(storedUser); // Convert string to object
  
      if (user.email === "ram45862@gmail.com" && user.password === "T56yu78i@") {
        setIsAdmin(true); // User is admin
      }
      else {
        setIsAdmin(false);
      }
    }

    // if (location.state?.newProduct) {
    //   setProducts((prev) =>{
    //     // Check if the product already exists by comparing names (or another unique identifier)
    //     const exists = prev.some((product) => product.name === location.state.newProduct.name);
    //     if (!exists) {
    //       return [...prev, location.state.newProduct];
    //     }
    //     return prev;
    //   }) 
    // }
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
  // }, [location.state]);
  // }, [isAdmin, products]);
  }, []);

  const buttonStyle = {
    backgroundColor: '#1dcf73',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '7px',
    fontSize: '18px',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    // width: max-content,
    width: '100%',
    // marginBottom: '5px',
  }
  return (
    <>
      <div style={{margin: '16px 31px'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginBottom: '5px'}}>
          <h1 style={{marginBottom: '13px'}}>Logo Design</h1>
          {isAdmin && 
            <Link to='/productform'>
              <button style={buttonStyle}>Add More Products</button>
            </Link>
          }
        </div>
        <p style={{color: '#999', fontWeight: '300', fontSize: '1.1rem'}}>Explore the boundaries of art and technology with our design artists</p>

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
        

        {/* <Card
          // img='http://res.cloudinary.com/dvfmllmvt/image/upload/v1692476375/cgeny2eik5ilcwufokv0.jpg'
          images={[
            "http://res.cloudinary.com/dvfmllmvt/image/upload/v1692476375/cgeny2eik5ilcwufokv0.jpg",
            "https://res.cloudinary.com/dvfmllmvt/image/upload/v1692476377/rztgyzv2bfylptoddafe.jpg",
            "https://res.cloudinary.com/dvfmllmvt/image/upload/v1692476376/ggopmkn9eu2j5qqfenk0.jpg"
          ]}
          name='Logo Design'
          price='100'
          description='Creates a logo design'
        /> */}
      </div>
      
    </>
  )
}

export default LogoDesign
