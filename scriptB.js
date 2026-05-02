const params = new URLSearchParams(window.location.search); 
//window.location.search returns all the part of the url after the sign "?"
//new URLSearchParams turns the string to something more readible, ex:
//"?id=a&name=duck" -> {id:"a", name: "duck"}
const id = params.get("id")
fetch("blogContent.json")   //promise a response 
    //1st way
    //.then(function(response) {
    //  return response.json()})
    //2nd way
    .then(response => response.json())  //takes the response, fetch() will return objects as a string, so we need to turn it into a json format first to be used
    .then(data => {
        const blogContent = data[id]

        if (blogContent) {
            document.getElementById("title").innerText = blogContent.title; 
            document.getElementById("content").innerText = blogContent.content
        }
    })