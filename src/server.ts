import express from 'express';

const app = express();

app.get("/", (request, response) => {
    //return response.send("Hello World");
    return response.json({ msg: "Hello World" });
});


app.post("/", (request, response) => {
    return response.json({ msg: "Os dados foram salvos com sucesso!" })
});
app.listen(3333, () => console.log("server is running!"));