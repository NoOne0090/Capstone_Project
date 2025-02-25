require('./jwt.js');
const app = require('./jwt.js');

// for rendering products
const productModel = require('./models/productMod.js');

app.post("/add/:category", async (req, res) => {
    try {
        const { name, price, description, images, category } = req.body;
        // const category = req.params.category;

        const newProduct = new productModel({ name, price, description, images, category });
        await newProduct.save();

        res.status(201).json({ 
            message: "Product added successfully!", 
            product: newProduct 
        });
    } 
    catch (err) {
        res.status(500).json({ 
            message: "error",
            error: err.message 
        });
    }
});


app.get("/add/:category", async (req, res) => {
    try {
        const category = req.params.category;
        const products = await productModel.find({ category }); // Fetch only products in this category
        res.json(products);
    } 
    catch (err) {
        res.status(500).json({ 
            message: "error",
            error: err.message 
        });
    }
});




