const Member = require("../models/Member");


const registerMember = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    // check whether the member exists or not
    let member = await Member.findOne({ email });

    if (member) {
      throw new Error("Member have already registered");
    }

    // creating a new member
    member = await Member.create({
      name,
      email,
    });

    return res.status(201).json({
      _id: member._id,
      name: member.name,
      email: member.email,
      verified: member.verified,
    });
  } catch (error) {
    next(error);
  }
};

const getAllMembers = async (req, res, next) => {
  try {
    const filter = req.query.searchKeyword;
    let where = {};
    if (filter) {
      where.email = { $regex: filter, $options: "i" };
    }
    let query = Member.find(where);
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await Member.find(where).countDocuments();
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

const deleteMember = async (req, res, next) => {
  try {
    let member = await Member.findById(req.params.memberId);

    if (!member) {
      throw new Error("Member no found");
    }

    res.status(204).json({ message: "Member is deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerMember,
  getAllMembers,
  deleteMember,
};

