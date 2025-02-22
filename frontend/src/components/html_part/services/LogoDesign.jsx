import React from 'react'
import Card from '../Card'

function LogoDesign() {
  return (
    <>
      <div style={{margin: '16px 31px'}}>
        <h1 style={{marginBottom: '13px'}}>Logo Design</h1>
        <p style={{color: '#999', fontWeight: '300', fontSize: '1.1rem'}}>Explore the boundaries of art and technology with our design artists</p>

        <br />
        <Card
          // img='http://res.cloudinary.com/dvfmllmvt/image/upload/v1692476375/cgeny2eik5ilcwufokv0.jpg'
          images={[
            "http://res.cloudinary.com/dvfmllmvt/image/upload/v1692476375/cgeny2eik5ilcwufokv0.jpg",
            "https://res.cloudinary.com/dvfmllmvt/image/upload/v1692476377/rztgyzv2bfylptoddafe.jpg",
            "https://res.cloudinary.com/dvfmllmvt/image/upload/v1692476376/ggopmkn9eu2j5qqfenk0.jpg"
          ]}
          name='Logo Design'
          price='100'
          description='Creates a logo design'
        />
      </div>
    </>
  )
}

export default LogoDesign
