window.addEventListener("DOMContentLoaded", init);

function init () {
    
    
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");
    const id = urlParams.get("id");
    const category = urlParams.get("category");
    
    if(search){
        getSearchData;
        
    } else if(id){
        getSingleEvent();
        
    } else if(category){
        
        getCategoryData();
        
    } else {
            getFrontpageData();
        
}

    
    getNavigation()
}

function getNavigation(){
       fetch("http://michaljaworski.dk/wordpress/wp-json/wp/v2/categories?per_page=100")
    .then(res=>res.json())
    .then(data=>{
//           console.log(data)
           
        data.forEach(addLink)
       })

}

function addLink(oneItem){
    console.log(oneItem.name)
//    document.querySelector("nav").innerHTML=oneItem.name
    
    if(oneItem.parent === 29){
       
    
   const link = document.createElement("a");
    link.textContent=oneItem.name;
    link.setAttribute("href", "events.html?category="+oneItem.id);
    document.querySelector("nav").appendChild(link);
}
    
}


function getSearchData() {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");
    fetch("http://michaljaworski.dk/wordpress/wp-json/wp/v2/Event?_embed&?search="+search)
        .then(res => res.json())
        .then(handleData)
}

function getFrontpageData(){
    fetch("http://michaljaworski.dk/wordpress/wp-json/wp/v2/Event/?categories=34&?=embed")
    .then(res=>res.json())
    .then(handleData)

}

function getCategoryData(catId){  
    console.log(catId)
       fetch("http://michaljaworski.dk/wordpress/wp-json/wp/v2/categories"+catId)
    .then(res=>res.json())
    .then(handleData)
}

function getSingleEvent() {
    const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("http://michaljaworski.dk/wordpress/wp-json/wp/v2/Event/"+id)
.then(res=>res.json())
.then(showEvent)


function showEvent(event) {
    console.log(event)
        
    document.querySelector("h1").textContent=event.title.rendered;
    
        img.setAttribute("src", post.event_image.guid)
    img.setAttribute("alt", "Photo " + post.title.rendered)
    


}
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
    
    const img = postCopy.querySelector("img.cover");
    
    img.setAttribute("src", post.event_image.guid)
    img.setAttribute("alt", "Photo " + post.title.rendered)
    
    const a = postCopy.querySelector("a");
    a.href="sub.html?id="+post.id;
    
    
       const event_type = postCopy.querySelector(".event_type");
   event_type.innerHTML=post.event_type;
 
   const event_price = postCopy.querySelector(".event_price");
   event_price.innerHTML=post.event_price;
    
    
   const event_location = postCopy.querySelector(".event_location");
   event_location.innerHTML=post.event_location;
    
    
   
    document.querySelector("#posts").appendChild(postCopy)

    }