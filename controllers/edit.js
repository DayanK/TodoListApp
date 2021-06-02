const Todo = require('../models/Todo');

// Finding and updatting tasks from DB one by one using id
const getEdit = (req, res) => {
  const { id } = req.params;
  
  Todo.findById(id, (err, todo) => {
    if (err) console.log(err);
    console.log(todo);
    res.render('edit', {
      todo: todo,
    });
  });
};

const putEdit = (req, res) => {
  const { id } = req.params; // destructuring
  const { title } = req.body; // destructuring
  // console.log(req.params.id);
  Todo.findByIdAndUpdate(id, { title: title }, (err) => {
    if (err) console.log(err);
    res.redirect('/');
  });
};

// Modules export
module.exports = {
  getEdit: getEdit,
  putEdit: putEdit,
};
