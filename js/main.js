//-----Random Banner Images-----



const imgRandom =()=>{

    let arrayImgBanner = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];
    let posRandom = Math.floor(Math.random() * arrayImgBanner.length)
    


    let imgBanner = document.getElementById("imgBanner")
    imgBanner.src = `assets/FOTOS_BANNERS/${arrayImgBanner[posRandom]}`

    //Check img route
    console.log(imgBanner.src)
}


//console.log(imgRandom())


imgRandom ()