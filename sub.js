const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id)

fetch("http://michaljaworski.dk/wordpress/wp-json/wp/v2/Event/"+id)
.then(res=>res.json())
.then(showPost)


function showPost(post) {
    console.log(post)

    
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
    
    
}



    