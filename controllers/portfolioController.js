exports.portfolioPage = async (req, res) => {
    const success = req.flash("success");
    const error = req.flash("error");
    res.render("index",{success,error});
  };