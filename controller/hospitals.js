const hospital = require("../model/hospitals");

exports.getAllHospital = async (req, res, next) => {
  try {
    const result = await hospital.find();
    res.status(200).json({
      success: true,
      count: result.length,
      data: result,
    });
  } catch (err) {}
  console.error(err);
  res.status(400).json({
    success: false,
  });
};

exports.getOneHospital = async (req, res, next) => {
  try {
    const result = await hospital.findById(req.params.id);

    if (!result) {
      res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
    });
  }
};

exports.createHostpital = async (req, res, next) => {
  const result = await hospital.create(req.body);
  res.status(201).json({
    success: true,
    data: result,
  });
};

exports.updateHostpital = async (req, res, next) => {
  try {
    const result = await hospital.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
    });
  }
};

exports.deleteHostpital = async (req, res, next) => {
  try {
    const result = await hospital.findByIdAndDelete(req.params.id);

    if (!result) {
      res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
    });
  }
};
