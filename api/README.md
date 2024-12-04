# Web Technology

_Welcome ! Groupe 110 will be managing this Git repository._

## Introduction

Each week, new features will be incrementally added, progressively building a fully functional application.

At the end, this project will serve as the foundation for our final project.

## Usage instructions

Prerequisites: Use a Linux environment and make sure you have Node.js installed on your machine !

When it's done, you can run the project. But how ? 

You must first install Node.js than install express with the line : 'install express'

Simple ! Go to the linux terminal and run this command line:

```npm start```

Open your browser and go to http://localhost:8080 to access the application.

- to access the articles you must use the link : http://localhost:8080/articles
- to access only one articles : http://localhost:8080/articles/"id_articles"
- to add an article you must use a command line in git bash then look at all the articles : curl -X POST http://localhost:8080/articles  -H 'Content-Type: application/json'  -d '{"title":"new blabla","author":"myuser","content":"myuser@example.com"}'

- to access the comments on an articles : http://localhost:8080/articles/"id_articles"/comments
- to add a comments you must use a command line in git bash then look at all the comments for this articles : curl -X POST http://localhost:8080/articles/1/comments  -H 'Content-Type: application/json' -d '{"author":"myuser","content":"myuser@example.com"}'
- to access a comment : http://localhost:8080/articles/"id_articles"/comments/'id_comments"

## Contributors

Irene JOLLY - irene.jollypeckre@gmail.com

Marie-Sophie KHAUV - khauvms@gmail.com

Jennifer KOUASI - jennifer.kouassi@edu.ece.fr


