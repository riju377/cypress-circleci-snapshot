const express = require('express')
const app = express();
const axios = require('axios');

// let requiredParams;
// let requiredMapping;

// let merchant = {
//   merchant_id:"1",
//   merchant_name:"abc",
//   product_id:"1",
//   product_name:"jargon",
//   session_id:"abc",
//   quantity:10,
//   timestamp:10,
//   cookies:"1",
//   appsUsed:[],
// }

// let mapping = [];

// function setMapping(merchant){
//   mapping = [
//   "",
//   merchant.merchant_id,
//   merchant.merchant_name,
//   merchant.product_id,
//   merchant.product_name,
//   merchant.session_id,
//   merchant.quantity,
//   merchant.timestamp,
//   merchant.cookies,
// ]
// };

// async function paramHandler(requiredData,requiredMapping,mapping){

      

//         if(Object.entries(requiredData).length != 0){
//           for(let key in requiredData){
//             requiredData = paramHandler(requiredData[key],requiredMapping[key],mapping);
//           }
//         }

//         else {
//           requiredData = mapping[requiredMapping];
//         }

//         return;
// }


// async function handleApps(app,mapping){
//     let appSchema;
//     let appmapSchema;
//     const response = await axios.get('http://localhost:4000/apps');
//     const responseMap = await axios.get('http://localhost:4000/appsMapping');
//         let apps = response.data;
//         let appmap = responseMap.data;
//         // console.log(apps);
//         appSchema = apps.filter(obj =>{
//           return obj.name === app;
//         })
//         appmapSchema = appmap.filter(obj => {
//           return obj.name === app;
//         })
//         // console.log(appmapSchema)
//         // console.log(appSchema);
//         requiredParams = appSchema[0].params;
//         requiredMapping = appmapSchema[0].params;

//         await paramHandler(requiredParams,requiredMapping,mapping);
//         console.log(requiredParams);

//         // for(let key in requiredParams){
//         //   console.log(Object.entries(key).length)
//         // }
        
// }

            


// app.get('/merchants', async (req, res)=> {
//  const response = await axios.get('http://localhost:4000/merchants')

//     const data = response.data;

//     await data.forEach(async (merData) => {
//       merchant = merData;
//       setMapping(merchant);

//       merchant.appsUsed.forEach(async (app) =>{
//         await handleApps(app,mapping);
//       })

//     });
//   res.send(merchant);
//   })

app.get('/',async (req,res)=>{
  res.send("Hello Tests");
})

app.get('/home', async(req,res)=>{
  res.send("Once you have mastered the use of topic sentences, you may decide that the topic sentence for a particular paragraph really shouldnt be the first sentence of the paragraph. This is fine—the topic sentence can actually go at the beginning, middle, or end of a paragraph; whats important is that it is in there somewhere so that readers know what the main idea of the paragraph is and how it relates back to the thesis of your paper. Suppose that we wanted to start the piranha paragraph with a transition sentence—something that reminds the reader of what happened in the previous paragraph—rather than with the topic sentence. Lets suppose that the previous paragraph was about all kinds of animals that people are afraid of, like sharks, snakes, and spiders. Our paragraph might look like this (the topic sentence is bold):")
})

app.listen(3000, () => {
    console.log(`Porting on 3000`)
})