import cartproducts from "../Models/CartProducts.js";

export const getAll = async (req, res) => {
    try {
      const productDetails = await cartproducts.find();
      console.log(productDetails);
    if (productDetails.length === 0) {
      return res.status(404).json({
        message: "Không tìm thấy danh sách sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Lấy danh sách sản phẩm thành công",
      data: productDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    })
  }
}

export const getDetail = async (req, res) => {
  try {
      const productDetails = await cartproducts.findById(req.params.id);
    if (!productDetails) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Lấy sản phẩm thành công",
      data: productDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    })
  }
};

export const create = async(req, res) => {
  try {
    const productDetails = await cartproducts.create(req.body);
    if (!productDetails) {
      return res.status(404).json({
        message: "Tạo sản phẩm không thành công",
      });
    }
    return res.status(200).json({
      message: "Tạo sản phẩm thành công",
      datas: productDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    })
  }
}

export const update = async(req, res) => {
  try {
    const productDetails = await cartproducts.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!productDetails) {
      return res.status(404).json({
        message: "Cập nhật sản phẩm không thành công",
      });
    }
    return res.status(200).json({
      message: "Cập nhật sản phẩm thành công",
      datas: productDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    })
  }
}

export const remove = async(req, res) => {
  try {
    const dataDelete = await cartproducts.findByIdAndDelete(req.params.id);
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