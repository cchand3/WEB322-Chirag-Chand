const express = require('express');
const app = express();
const port = 3000;
const apiRouter = require('./routes/apiRouter');
const bodyParser = require('body-parser'); // include this for json parsing
const users = require('./fakeUsers.json'); // import user data

// setting the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// utilize body-parser for json parsing
app.use(bodyParser.json());

// handle routes
app.get('/', (req, res) => {
  res.render('login'); // render the login view
});

app.post('/', (req, res) => {
  res.redirect(`/list`); // redirect to the '/list' route
});

app.get('/list', (req, res) => {
  const itemsToDisplay = 15;
  const page = parseInt(req.query?.page) || 1;
  const start = page == 1 ? 0 : (page - 1) * itemsToDisplay - 1;
  const end = start + itemsToDisplay;
  const filteredUsers = users.filter((user, idx) => idx > start && idx <= end);

  res.render('list', {
    title: 'list',
    users: filteredUsers,
    itemsToDisplay,
    page,
    start,
    end,
  });
});

app.get('/detail/:id', (req, res) => {
  const user = users.find((user) => {
    return user.id === parseInt(req.params.id);
  });
  res.render('detail', { user });
});

// employ the apiRouter for managing API requests
app.use('/api', apiRouter);

// listen for incoming requests
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
