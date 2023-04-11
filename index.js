// Add your code here
function submitData(name1, email1){
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
      body: JSON.stringify({name: `${name1}`, email: `${email1}`}) 

    })
    .then(resp => resp.json())
    .then(obj => document.querySelector("body").append(obj.id))

    .catch(function (error){ 
        alert("Somethings Not Right"); 
        document.querySelector("body").append(error.message)})
}

