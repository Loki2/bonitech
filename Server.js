if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
  }
  
  
  
  const http = require('http');
  const app = require('./src/App');
  const port = process.env.APP_PORT || 5000;
  
  
  //Create Server
  const server = http.createServer(app);
  server.listen(port, "0.0.0.0", () => {
    console.log(`🚀 Server is running http://localhost:${PORT}`);
  })