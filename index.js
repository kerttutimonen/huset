window.addEventListener("DOMContentLoaded", getData);

function getData(){
    console.log("getData")
    fetch("http://michaljaworski.dk/wordpress/wp-json/wp/v2/Event/?include=154")
    .then(res=>res.json())
    .then(handleData)

}

function handleData(myData){
    myData.forEach(showPost)
}

function showPost(post) {
    console.log(post)   
    
   const template = document.querySelector(".postTemplate").content;
    const postCopy = template.cloneNode(true);
    
    const h1 = postCopy.querySelector("h1");
    h1.textContent=post.title.rendered;
    
    const p = postCopy.querySelector("p");
    p.innerHTML=post.content.rendered;
    

   
//    const content = postCopy.querySelector("section");
//    content.innerHTML=post.content.rendered;
    
    document.querySelector("#posts").appendChild(postCopy)
}