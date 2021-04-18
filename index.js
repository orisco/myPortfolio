import express from 'express';
import mongoose from './db/mongooseConfig.js';
import cors from 'cors';
import routes from './routes/websites.js'
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();


// MIDDLEWARE
app.use(cors())
app.use(express.json())

// if (process.env.NODE_ENV === 'production') {
  // Serve only the static files form the dist directory
  app.use(express.static(__dirname + '/client/build'));
  app.get('/*', function(req,res) {  
  res.sendFile(path.join(__dirname+'/client/built/index.html'));
  });
// }

// ROUTES
app.use('/admin', routes )

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log("server is running")
})