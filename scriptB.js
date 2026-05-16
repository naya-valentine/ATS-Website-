const params = new URLSearchParams(window.location.search); 
//window.location.search returns all the part of the url after the sign "?"
//new URLSearchParams turns the string to something more readible, ex:
//"?id=a&name=duck" -> {id:"a", name: "duck"}
console.log(params) 

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
            document.getElementById("title").innerHTML = `<i class="fas fa-seedling"></i> ${blogContent.title} <i class="fas fa-seedling"></i>`; 
            document.getElementById("author").innerHTML = `By ${blogContent.author}`;
            document.getElementById("timeRead").innerText = blogContent.timeRead;
            const text = blogContent.content; 
            document.getElementById("paragraph1").innerText = text.paragraph1; 
            document.getElementById("paragraph2").innerText = text.paragraph2;
            document.getElementById("paragraph3").innerText = text.paragraph3;
            document.getElementById("paragraph4").innerText = text.paragraph4;
        } else {
            document.getElementById("title").innerText = "Blog Not Found"; 
        }
    })