const Product = require('./productSchema');

// Get all products
exports.getAllProducts = (req, res) => {
    Product.find({}, (err, product) => {

        if(err) {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Something went wrong when fetching the products'
            })
        }
        res.status(200).json(product)
    })
}

// Get one product 
exports.getOneProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {
        
        if(err){
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Can not find the product. Please fill in the correct id' 
            })
        }
        if(!result){
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'This product does not exist'
            })

        }

       Product.findById(req.params.id)
       .then(product => res.status(200).json(product))
       .catch(err => {
           res.status(500).json({
               statusCode: 500,
               status: false, 
               message: err.message || 'Internal server error'
           })
       })
    })
}

exports.createProduct = (req, res) => {

    Product.exists({ name: req.body.name }, (err, result) => {
        
        if(err){
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Something went wrong with crating new product'
            })
        }

        // Product exist
        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'A product by that name already exist, please update product instead.'
            })
        }

        // Product doesnt exist, create new product
        Product.create({
            name:   req.body.name,
            smalldesc: req.body.smalldesc,
            desc:   req.body.desc,
            price:  req.body.price,
            image:  req.body.image
        })

        .then(product => {
            res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'Product successfully created',
                product
            })
        })
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create product',
                err
            })
        })
    })
}

// Update product
exports.updateProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Can not find the product. Please fill in the correct id'
            })
        }
        if(!result){
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'This product does not exist'
            })
        }

        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(product => {
            res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Product successfully updated',
                product
            })
        })
        .catch(err => {
            if(err.code === 11000){
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'A product with that name already exist',
                    err
                })
            }

            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to update product',
                err
            })
        })
    })


}

// Delete product
exports.deleteProduct = (req, res) => {

    Product.exists({ _id: req.params.id }, (err, result) => {
        
        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Can not find the product. Fill in the correct id' 
            })
        }
        if(!result){
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'This product does not exist'
            })
        }

        Product.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Product successfully deleted',
            })
        })
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to delete product',
                err
            })
        })
    })

}