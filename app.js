const express = require('express')
const app = express();
const axios = require('axios');

app.get('/',async (req,res)=>{
  res.send("Hello Tests");
})

app.get('/home', async(req,res)=>{
  res.send("Once you have mastered the use of topic sentences, you may decide that the topic sentence for a particular paragraph really shouldnt be the first sentence of the paragraph. This is fine—the topic sentence can actually go at the beginning, middle, or end of a paragraph; whats important is that it is in there somewhere so that readers know what the main idea of the paragraph is and how it relates back to the thesis of your paper. Suppose that we wanted to start the piranha paragraph with a transition sentence—something that reminds the reader of what happened in the previous paragraph—rather than with the topic sentence. Lets suppose that the previous paragraph was about all kinds of animals that people are afraid of, like sharks, snakes, and spiders. Our paragraph might look like this (the topic sentence is bold.):")
})

app.listen(3000, () => {
    console.log(`Porting on 3000`)
})