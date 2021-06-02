const Todo = require('../models/Todo');

const getIndex = (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      console.log(err);
    }
    console.log(todos);
    res.render('index', { todos: todos });
  });
};


// Post tasks 
const postIndex = (req, res) => {
  //   console.log(req.body.title);
  const newTodo = new Todo({
    title: req.body.title,
  });
  //console.log(newTodo);
  newTodo.save((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
};

// Finding and deleting tasks from DB one by one using id
const deleteIndex = (req, res) => {
  const { id } = req.params; // destructuring
  //   console.log('delete');
  // console.log(req.params.id);
  Todo.findByIdAndDelete(id, (err) => {
    if (err) console.log(err);
    res.redirect('/');
  });
};

// Module exports
module.exports = {
  getIndex: getIndex,
  postIndex: postIndex,
  deleteIndex: deleteIndex,
};
