import express from 'express';
import data from '../../data.json' with {type: "json"}
const app = express();

app.use(express.json());

app.get("/mercados", function(req, res){
    res.json(data);
})


app.listen(3000, function(){
    console.log('server run...')
})