let im = document.getElementById('im')
let img = document.getElementById('img')

im.onmouseover = function() {
    im.style.backgroundColor = "E5004F"
    im.style.width = "700px"
    im.style.height = "700px"
    im.style.marginLeft = "400px"
    img.style.width = "700px"
    img.style.height= "700px"
    img.style.marginTop= "45px"
}

im.onmouseout = function(){
    im.style.backgroundColor = "white"
    img.style.width = "800px"
    img.style.height= "700px"
}