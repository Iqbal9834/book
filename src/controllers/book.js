
const validator = require('../helper/validate');
const BookModel = require('../models/book.model')



/**
 * Book directory create list and delete func
 */


class BookDir {
  /**
   * An endpoint to create book directory
   */
  static async create(req, res) {

    const validationRule = {
        "title": "required|string|min:5|max:100",
        "author": "required|string",
        "release_date": "string",
        "subject": "string|min:6|",
    };

    await validator(req.body, validationRule, {}, async (err, status) => {
        if (!status) {

            res.status(412)
                .json({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            await BookModel.create(req.body)
            return res.status(200).json({ success: true, message: 'Book created successfully' })
        }})
  }

  /**
   * List book directory
   */
  
  static async list(req, res) {
   
    // Find all book directory
    const books = await BookModel.findAll({
        order: [['createdAt', 'DESC']],
        attributes: ['id', 'title', 'author', 'release_date', 'subject']
    });

    if(books.length > 0) return res.status(200).json({ success: true, data: books})
    else return res.status(200).json({ success: false, message: "No book found"})
    
  }
  static async update(req, res) {
      if(!req.params.id) { return res.status(400).json({success: false, message: "book id is required"})}

      else {
        await BookModel.update(req.body, {
            where: { id: req.params.id}
        }).then((data)=> { return res.status(200).json({ success: true, data: data })});
      }

      
  }

  static async delete(req, res) {
    if(!req.params.id) { return res.status(400).json({success: false, message: "book id is required"})}
    
    else {

        await BookModel.destroy({ where: { id: req.params.id } })
        return res.status(200).json({ success: true, message: "Deleted Successfully"})
    }

  }
}
module.exports = BookDir