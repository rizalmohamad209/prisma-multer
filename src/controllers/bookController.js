const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  getAllBooks: (req, res) => {
    prisma.books
      .findMany({})
      .then((data) => {
        res.send({
          message: "Success Get Books",
          status: 200,
          data,
        });
      })
      .catch((error) => {
        res.send({
          message: "Error While Get books",
          status: 500,
          error,
        });
      });
  },

  postBook: (req, res) => {
    const { body } = req;
    const newBody = {
      ...body,
      image: req.file.path,
    };
    console.log("====================================");
    console.log(body);
    console.log("====================================");
    prisma.books
      .create({
        data: newBody,
      })
      .then((data) => {
        res.status(200).send({
          message: "Success Post Books",
          status: 200,
          data,
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: "Error Post Books",
          status: 500,
          error,
        });
      });
  },
  paginationBooks: (req, res) => {
    prisma.books
      .findMany({
        skip: parseInt(req.body.skip),
        take: 5,
      })
      .then((data) => {
        res.send({
          message: "Success Get Books",
          status: 200,
          data,
        });
      })
      .catch((error) => {
        res.send({
          message: "Error While Get books",
          status: 500,
          error,
        });
      });
  },
};
