const Restau = require("../model/Restau");

exports.createRestau = async (req, res, next) => {

  const images = req.files.map((file) => {
    return file.path
    })

    try {
        const { title, city, desc } = req.body;
        const { id } = req.params;
        const restau = await Restau.findOne({
          _id: id,
        })
        // restau already exists
        if (restau) {
            res.status(409); // conflict error
            const error = new Error('restau already exists');
            return next(error);
        } 

        const newrestau = await Restau.create({
            title,
            city,
            desc,
            images: images,
        });

        console.log('New restau has been created');
        res.status(201).json(newrestau);
    } catch(error) {
        next(error);
    }
}


exports.updateRestau = async (req, res, next) => {
    const { id } = req.params;
  try {
    const restau = await Restau.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        ...req.body,
      },
      { new: true }
    );
    if (!restau) {
      return res.status(404).json({
        error: true,
        message: 'error to update the hotel',
      });
    }
    res.status(200).json({
      error: false,
      message: 'Hotel has been updated successfully',
      data: restau,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
      data: null,
    });
  }
}

exports.removeRestauById = async (req, res) => {
    const { id } = req.params;
    try {
      const restau = await Restau.findByIdAndDelete(id);
      if (!restau) {
        return res.status(404).json({
          error: true,
          message: 'restau not found',
          data: null,
        });
      }
      res.status(200).json({
        error: false,
        message: 'restau deleted successfully',
        restau,
      });
    } catch (error) {
      res.status(500).json({
        error: false,
        message: error.message,
        data: null,
      });
    }
  };

exports.getRestauById = async (req, res) => {
    const { id } = req.params;
    try {
      const restau = await Restau.findById(id).populate('repa');
      if (!restau) {
        return res.status(404).json({
          error: true,
          message: `Cannot find restau with this id ${id}`,
          data: null,
        });
      }
      res.status(200).json({
        error: false,
        message: null,
        data: restau,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
        data: null,
      });
    }
  };

exports.getAllRestaus = async (req, res) => {
    try {
      const restaus = await Restau.find();
      if (!restaus) {
        return res.status(404).json({
          error: true,
          message: 'restaus not found',
          data: null,
        });
      }
      res.status(200).json({
        error: false,
        message: 'restaus retrieved successfully',
        data: restaus,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
        data: null,
      });
    }
  };