//Import Mongoose.
const mongoose = require('mongoose');
//định nghĩa cấu trúc dữ liệu Product
const productSchema = new mongoose.Schema({
    pid: {
        type: String,
        required: true, //required: true nghĩa là bắt buộc nhập
        unique: true //đối với pid nghĩa là không được trùng mã sản phẩm.
    },

    pname: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    quantity: {
        type: Number,
        required: true,
        min: 0 //ngăn price và quantity nhận giá trị âm ở validation của Mongoose.
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);