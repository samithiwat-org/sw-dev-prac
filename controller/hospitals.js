exports.getAllHospital = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "show all hospitals",
  });
};

exports.getOneHospital = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `show hospital ${req.params.id}`,
  });
};

exports.createHostpital = (req, res, next) => {
  res.status(201).json({
    success: true,
    message: `create new hospital`,
  });
};

exports.updateHostpital = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `update hostpital ${req.params.id}`,
  });
};

exports.deleteHostpital = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `delete hostpital ${req.params.id}`,
  });
};
