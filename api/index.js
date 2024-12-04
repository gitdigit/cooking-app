const express = require("express");
const app = express();
const handles = require('./handles');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/',handles);

app.listen(8080);

const db = {
    articles: [
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        title: 'My article',
        content: 'Content of the article.',
        date: '04/10/2022',
        author: 'Liz Gringer'
      },
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0c',
        title: 'My article 2',
        content: 'Content of the article : blabla',
        date: '05/10/2022',
        author: 'Irene jolly'
      },
      {
        id: '1',
        title: 'My article 3',
        content: 'Content of the article : blabla',
        date: '05/10/2022',
        author: 'Irene jolly'
      }
      // ...
    ],
    comments: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        timestamp: 1664835049,
        content: 'Content of the comment.',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
      },
      {
        id: '1',
        timestamp: 1664835049,
        content: 'Content of the comment.',
        articleId: '1',
        author: 'Bob McLaren'
      },
      {
        id: '2',
        timestamp: 1664835049,
        content: 'Content of the comment.',
        articleId: '1',
        author: 'Bob McLaren'
      }
      // ...
    ]
  }
  
  app.get('/articles', (req, res) => {
    res.json(db.articles);
  });
  
  app.get('/articles/:articleId', (req, res) => {
    const articleId = req.params.articleId;
    const article = db.articles.filter(articles => articles.id === articleId);
    if (!article) {
        return res.status(404).json({ message: 'articles not found' });
    }
    res.json(article)
  });
  
  app.get('/articles/:articleId/comments', (req, res) => {
    const articleId = req.params.articleId;
    const comment = db.comments.filter(comments => comments.articleId === articleId);
    if (!comment) {
        return res.status(404).json({ message: 'articles not found' });
    }
    res.json(comment)
  });
  
  app.get('/articles/:articleId/comments/:commentId', (req, res) => {
    const id = req.params.articleId;
    const idCom = req.params.commentId;
    const comment = db.comments.filter(comment => (comment.articleId  === id) && (comment.id === idCom));
    if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
    }
  
    res.json(comment)
  });

  app.post('/articles', async (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    const id = db.articles.length + 1;
  
    const date = new Date()
    const newArticles = { id, title, content, date, author };
    db.articles.push(newArticles);
    res.status(201).json(newArticles);
    
  });

  app.post('/articles/:articleId/comments', async (req, res) => {
    const articleId = req.params.articleId;
    const content = req.body.content;
    const author = req.body.author;
    const id = db.comments.length + 1;
    const timestamp = new Date()
    const newComments = { id, timestamp, content, articleId, author };

    db.comments.push(newComments);
    res.status(201).json(newComments);
    
  });