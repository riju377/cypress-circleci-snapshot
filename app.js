const express = require('express')
const app = express();
const axios = require('axios');
const path = require('path');
const fs = require('fs');


app.use(express.json());

app.post('/update-baseline', (req, res) => {
  const { snapshotId, newImage } = req.body;

   // Logic to update the baseline image on the server
   const imageFilePath = `/cypress-visual-screenshots/baseline/${snapshotId}.png`;

   const fs = require('fs');
  const path = require('path');
  const baselinePath = path.join(__dirname, 'cypress-visual-screenshots', 'baseline', `${snapshotId}.png`);
  
  fs.writeFile(baselinePath, newImage, (err) => {
    if (err) {
      console.error('Failed to update the baseline image on the server:', err);
      res.status(500).send('Failed to update the baseline image.');
    } else {
      console.log('Baseline image updated successfully on the server.');
      res.sendStatus(200);
    }
  });
});


// Set the root directory for serving static files
const staticRoot = path.join(__dirname, './cypress-visual-report');


app.get('/',async (req,res)=>{
  res.send("Hello Tests");
})

app.get('/home', async(req,res)=>{
  res.send("Once you have mastered the use of topic sentences, you may decide that the topic sentence for a particular paragraph really shouldnt be the first sentence of the paragraph. This is fine—the topic sentence can actually go at the beginning, middle, or end of a paragraph; whats important is that it is in there somewhere so that readers know what the main idea of the paragraph is and how it relates back to the thesis of your paper. Suppose that we wanted to start the piranha paragraph with a transition sentence—something that reminds the reader of what happened in the previous paragraph—rather than with the topic sentence. Lets suppose that the previous paragraph was about all kinds of animals that people are afraid of, like sharks, snakes, and spiders. Our paragraph might look like this (the topic sentence is bold):.")
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