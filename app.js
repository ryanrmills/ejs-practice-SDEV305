import express from 'express';
const app = express();
const PORT = 3006;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res)=> {
    const person = { name: 'Donald Duck', occupation: 'plumber' };
    res.render('home', { person });
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});