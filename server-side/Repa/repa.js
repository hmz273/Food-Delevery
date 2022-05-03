const Repa = require("../model/Repa");


exports.createRepa = async (req, res, next) => {
    try {

      const images = req.files.map((file) => {
        return file.path
        })
        const { id } = req.params;
        const repa = await Repa.findOne({
          _id: id,
        }).populate('restau')
          .populate('category')

        // repa already exists
        if (repa) {
            res.status(409); // conflict error
            const error = new Error('repa already exists');
            return next(error);
        } 

        const newrepa = await Repa.create({ 
            title: req.body.title,
            desc: req.body.desc,
            price: req.body.price,
            category: req.body.category,
            restau: req.body.restau,
            images: images,
         });

        console.log('newrepa', newrepa);
        res.status(201).json(newrepa);
    } catch(error) {
        next(error);
    }
}


exports.updateRepa = async (req, res, next) => {
    const { id } = req.params;
  try {
    const repa = await Repa.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title,
        price,
        desc
      },
      { new: true }
    );
    if (!repa) {
      return res.status(404).json({
        error: true,
        message: 'error to update the repa',
      });
    }
    res.status(200).json({
      error: false,
      message: 'repa has been updated successfully',
      data: repa,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
      data: null,
    });
  }
}

exports.removeRepaById = async (req, res) => {
    const { id } = req.params;
    try {
      const repa = await Repa.findByIdAndDelete(id);
      if (!repa) {
        return res.status(404).json({
          error: true,
          message: 'repa not found',
          data: null,
        });
      }
      res.status(200).json({
        error: false,
        message: 'repa deleted successfully',
        repa,
      });
    } catch (error) {
      res.status(500).json({
        error: false,
        message: error.message,
        data: null,
      });
    }
  };

exports.getRepaById = async (req, res) => {
    const { id } = req.params;
    try {
      const repa = await Repa.findById(id);
      if (!repa) {
        return res.status(404).json({
          error: true,
          message: `Cannot find repa with this id ${id}`,
          data: null,
        });
      }
      res.status(200).json({
        error: false,
        message: null,
        data: repa,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
        data: null,
      });
    }
  };


exports.getAllRepas = async (req, res) => {
    try {
      const repas = await Repa.find().populate('restau')
      .populate('category');
      if (!repas) {
        return res.status(404).json({
          error: true,
          message: 'repas not found',
          data: null,
        });
      }
      res.status(200).json({
        error: false,
        message: 'repas retrieved successfully',
        data: repas,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
        data: null,
      });
    }
  };