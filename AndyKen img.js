var imgArray = new Array ();
imgArray[0] = "https://cdn.imweb.me/thumbnail/20210317/1a81cca65cdaf.jpg"
imgArray[1] = "https://cdn.imweb.me/thumbnail/20210316/19e91ce480b25.jpg"
imgArray[2] = "https://cdn.imweb.me/thumbnail/20210317/2bf2175a9333d.jpg"
imgArray[3] = "https://cdn.imweb.me/thumbnail/20210316/c6afe20abd243.jpg"
imgArray[4] = "https://cdn.imweb.me/thumbnail/20210316/24070b37fe459.jpg"

function showImage(){
    var imgNum = Math.floor(Math.random()*4);
    var objImg = document.getElementById("mainImg");
    objImg.src = imgArray[imgNum];
}