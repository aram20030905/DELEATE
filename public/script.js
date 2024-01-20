let a=document.getElementById("usname")
let b=document.getElementById("usepass")
function f1(){

   
         fetch("http://localhost:3000/addInfo", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({name:a.value,age:b.value})
        })
        }

