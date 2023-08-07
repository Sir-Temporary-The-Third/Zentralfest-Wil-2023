const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

const h_elements = 5
const v_elements = 10

const names = []
names.push("IMG_0052.gif", "IMG_0053.gif", "IMG_0054.gif", "IMG_0055.gif", "IMG_0056.gif")

function getImage() {
    return names[Math.floor(Math.random()*names.length)];
}

for (let j = 0; j < v_elements; j++) {
    for (let i = 0; i < h_elements; i++) { 
        var img = document.createElement("img");
        img.src = getImage();
        img.width = width / h_elements - 5
        var src = document.getElementById("body");
        // console.log(src)
        src.appendChild(img);
      }
    src.appendChild(document.createElement("br"))
}


