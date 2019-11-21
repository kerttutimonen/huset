window.addEventListener("DOMContentLoaded", getData);

function getData() {


    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");

    fetch("http://michaljaworski.dk/wordpress/wp-json/wp/v2/Event?_embed&?search="+search)
        .then(res => res.json())
        .then(handleData)

}

function handleData(myData) {
    myData.forEach(showPost)
}

function showPost(post) {
    console.log(post)

    const template = document.querySelector(".postTemplate").content;
    const postCopy = template.cloneNode(true);

    const h1 = postCopy.querySelector("h1");
    h1.textContent = post.title.rendered;

    const a = postCopy.querySelector("a");
    a.href = "sub.html?id=" + post.id;


    const event_type = postCopy.querySelector(".event_type");
    event_type.innerHTML = post.event_type;

    const event_price = postCopy.querySelector(".event_price");
    event_price.innerHTML = post.event_price;


    const event_location = postCopy.querySelector(".event_location");
    event_location.innerHTML = post.event_location;




    document.querySelector("#posts").appendChild(postCopy)
}
