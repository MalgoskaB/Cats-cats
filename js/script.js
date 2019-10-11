const API_KEY = 'G6kXwknvYe9ySlomlkKe5LAbQuvHWkL8';

let url_cats = `http://api.giphy.com/v1/gifs/search?q=cats&api_key=${API_KEY}&limit=25`;

function getCatsPicture() {
    fetch(url_cats)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let pictureList = data.data;
            createGallery(pictureList);

        });

};

getCatsPicture()

let gallery = document.getElementById('content');



function createGallery(dataList) {
    for (let i = 0; i < 25; i ++) {
        let img = document.createElement('img');
        let id = dataList[i].id;
        let imgPath = `http://giphygifs.s3.amazonaws.com/media/${id}/giphy.gif`;
        img.src = imgPath;        
        let size = dataList[i].images.fixed_width_small_still.size;
        console.log(size);
        img.style.size = size;
        gallery.appendChild(img);
}
};

function myFunction() {
    window.open("https://www.w3schools.com");
  }







