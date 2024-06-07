const { uploadPicture } = require("../middleware/uploadPictureMiddleware");
const Testimonial = require("../models/Testimonial");
// const Comment = require("../models/Comment");
const { fileRemover } = require("../utils/fileRemover");
// const { v4: uuidv4 } = require("uuid");

const createTestimonial = async (req, res, next) => {
  try {
 
    const testimonial = new Testimonial({
      name: "Sample Name",
      desc: "Same Description",
      photo: "",
    });

    const createdTestimonial = await testimonial.save();
    return res.json(createdTestimonial);
  } catch (error) {
    next(error);
  }
};

const updateTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findOne({ _id: id });

    if (!testimonial) {
      const error = new Error("Testimonial aws not found");
      next(error);
      return;
    }

    const upload = uploadPicture.single("testimonialPicture");

    const handleUpdateTestimonialData = async (data) => {
      const { name, desc } = JSON.parse(data);
      testimonial.name = name || testimonial.name;
      testimonial.desc = desc || testimonial.desc;
      
      const updatedTestimonial = await testimonial.save();
      return res.json(updatedTestimonial);
    };

    upload(req, res, async function (err) {
      if (err) {
        const error = new Error(
          "An unknown error occured when uploading " + err.message
        );
        next(error);
      } else {
        // every thing went well
        if (req.file) {
          let filename;
          filename = testimonial.photo;
          if (filename) {
            fileRemover(filename);
          }
          testimonial.photo = req.file.filename;
          handleUpdateTestimonialData(req.body.document);
        } else {
          let filename;
          filename = testimonial.photo;
          testimonial.photo = "";
          fileRemover(filename);
          handleUpdateTestimonialData(req.body.document);
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

const deleteTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findOneAndDelete({ _id: req.params.id });

    if (!testimonial) {
      const error = new Error("Testimonial was not found");
      return next(error);
    }

    fileRemover(testimonial.photo);

    return res.json({
      message: "Testimonial is successfully deleted",
    });
  } catch (error) {
    next(error);
  }
};

const getTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findOne({ _id: req.params.id })

    if (!testimonial) {
      const error = new Error("Testimonial was not found");
      return next(error);
    }

    return res.json(testimonial);
  } catch (error) {
    next(error);
  }
};

const getAllTestimonials = async (req, res, next) => {
    try {
      const filter = req.query.searchKeyword;
      let where = {};
      if (filter) {
        where.title = { $regex: filter, $options: "i" };
      }
      let query = Testimonial.find(where);
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * pageSize;
      const total = await Testimonial.find(where).countDocuments();
      const pages = Math.ceil(total / pageSize);
  
      res.header({
        "x-filter": filter,
        "x-totalcount": JSON.stringify(total),
        "x-currentpage": JSON.stringify(page),
        "x-pagesize": JSON.stringify(pageSize),
        "x-totalpagecount": JSON.stringify(pages),
      });
  
      if (page > pages) {
        return res.json([]);
      }
  
      const result = await query
        .skip(skip)
        .limit(pageSize)
        .sort({ updatedAt: "desc" });
  
      return res.json(result);
    } catch (error) {
      next(error);
    }
  };

module.exports = { createTestimonial, updateTestimonial, deleteTestimonial, getTestimonial, getAllTestimonials };
