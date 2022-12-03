const bn=document.getElementById("btn");
const body=document.body;
const chcolor=['red','blue','purple','green','orange','pink','gray']
body.style.backgroundColor=chcolor[0]
bn.addEventListener("click",colorchanger)
function colorchanger(){
    const n = Math.floor(Math.random()*chcolor.length)
    body.style.backgroundColor=chcolor[n]
}
