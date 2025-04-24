

function renderPhotos(photos) {
    photos.forEach((img) => { 
        const imgEl = document.createElement("img")
        imgEl.setAttribute("src", `https://picsum.photos/seed/${img.id}/150`)
        document.getElementById("Output").appendChild(imgEl);
   })
}   

async function getPhotos() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=30`)
        const photos = await response.json()
        renderPhotos(photos)
    } catch(error) {
        console.log('fetch error: ', error)
    }
   
}


getPhotos();