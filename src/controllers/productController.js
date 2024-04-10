import Product from "../Models/productModel.js"

export const getAll = async (req, res) => {
    try {
      const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy danh sách sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Lấy danh sách sản phẩm thành công",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    })
  }
}

export const getDetail = async (req, res) => {
  try {
      const productne = await Product.findById(req.params.id);
    if (!productne) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Lấy sản phẩm thành công",
      data: productne,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    })
  }
};

export const create = async(req, res) => {
  try {
    const product = await Product.create(req.body)
    if (!product) {
      return res.status(404).json({
        message: "Tạo sản phẩm không thành công",
      })
    }
    return res.status(200).json({
      message: "Tạo sản phẩm thành công",
      datas: product,
    })
  } catch (error) {
    return res.status(500).json({
      message: error,
    })
  }
}

export const update = async(req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body,{
      new: true,
    })
    if (!product) {
      return res.status(404).json({
        message: "Cập nhật sản phẩm không thành công",
      })
    }
    return res.status(200).json({
      message: "Cập nhật sản phẩm thành công",
      datas: product,
    })
  } catch (error) {
    return res.status(500).json({
      message: error,
    })
  }
}

export const remove = async(req, res) => {
  try {
    const dataDelete = await Product.findByIdAndDelete(req.params.id)
    if(!dataDelete) {
      return res.status(400).json({
        message: "Xóa sản phẩm không thành công",
      })
    }
    return res.status(200).json({
      message: "Xóa sản phẩm thành công"
    })
  } catch (error) {
    return res.status(500).json({
      message: error,
    })
  }
}