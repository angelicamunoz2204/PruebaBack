const express =  require ('express');
const app = express();
const routes = require('./routes/index');
const cors = require('cors');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//routes
app.use('/',routes);
app.listen(3001);
console.log('servidor escuchando en puerto 3001')