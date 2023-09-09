import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var input1 = "";
var input2 = "";
var inputs1 = [];
var inputs2 = [];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, ()=>{
    console.log("Server is listening on " + port);
});

app.get("/", (req, res)=>{
    res.render("index.ejs", {
        inputs: inputs1,
    });
});

app.get("/work", (req, res)=>{
    res.render("work.ejs", {
        inputs: inputs2,
    });
});

app.post("/submit1", (req, res) =>{
    input1 = req.body.input;
    //console.log(req.body.input);
    console.log(" added " + input1 + " to daily.");
    inputs1.push(input1);
    res.render("index.ejs",{
        input: input1,
        inputs: inputs1,
    });
});

app.post("/submit2", (req, res) =>{
    input2 = req.body.input;
    //console.log(req.body.input);
    console.log(" added " + input2 + " to work.");
    inputs2.push(input2);
    res.render("work.ejs",{
        input: input2,
        inputs: inputs2,
    });
});

app.use(express.json());

// 删除指定索引的元素
app.delete('/delete/:index', (req, res) => {
    const index = req.params.index;
    console.log(index );

    if (index >= 0 && index < inputs1.length) {
        inputs1.splice(index, 1); // 从数组中删除指定索引的元素
        console.log("successfully deleted from daily");
        res.redirect("/");
    } else {
        res.sendStatus(400); // 返回错误状态码，表示删除失败
        console.log("something wrong");
    }
});

app.delete('/work/delete/:index', (req, res) => {
    const index = req.params.index;
    console.log(index );

    if (index >= 0 && index < inputs1.length) {
        inputs2.splice(index, 1); // 从数组中删除指定索引的元素
        console.log("successfully deleted from work");
        res.redirect("/");
    } else {
        res.sendStatus(400); // 返回错误状态码，表示删除失败
        console.log("something wrong");
    }
});
