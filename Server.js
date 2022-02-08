if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
  }
  
  
  
  const http = require('http');
  const app = require('./src/App');
  let port = process.env.PORT || 5000;
  
  
  //Create Server
  const server = http.createServer(app);
  server.listen(port, () => {
    console.log(`🚀 Server is running http://localhost:${port}`);
  })