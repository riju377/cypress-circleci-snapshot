const express = require('express')
const app = express();
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Home Page</title>
  <style>
    body {
      font-family: 'Pacifico', cursive;
      margin: 0;
      padding: 0;
      background-color: lightblue;
    }

    header {
      background-color: #333;
      color: #fff;
      padding: 20px;
      text-align: center;
    }

    nav {
      background-color: #f1f1f1;
      padding: 10px;
    }

    nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    nav ul li {
      display: inline;
      margin-right: 10px;
    }

    nav ul li a {
      color: #333;
      text-decoration: none;
    }

    main {
      padding: 20px;
    }

    section {
      margin-bottom: 20px;
    }

    h2 {
      color: #333;
    }

    footer {
      background-color: #333;
      color: #fff;
      padding: 10px;
      text-align: center;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to Simpl</h1>
  </header>

  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>

  <main>
    <section>
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat, nisi eu tincidunt condimentum, enim nisl tincidunt lectus, in suscipit urna libero eget lectus.</p>
      <img src="https://entrackr.com/storage/2022/06/Simpl.jpg" alt="Contact Me" style="max-height: 200px; max-width: 300px;">

    </section>

    <section>
      <h2>Contact Me</h2>
      <p>Email: info@example.com</p>
      <p>Phone: 123-456-7890</p>
    </section>
  </main>
</body>
</html>
`

app.use(express.json());


// Set the root directory for serving static files
const staticRoot = path.join(__dirname, './cypress-visual-report');


app.get('/',async (req,res)=>{
  res.send("Hello Tests");
})

app.get('/home', async(req,res)=>{
  res.send(html)
})

app.get('/screenshot', (req, res) => {
  res.sendFile(path.join(staticRoot, './cypress-visual-report.html'));
});

app.use(express.static(staticRoot));

// Modify image URLs to be relative to the HTML file
app.use('/cypress-visual-screenshots', express.static(path.join(staticRoot, '../cypress-visual-screenshots')));


app.listen(3000, () => {
    console.log(`Porting on 3000`)
})