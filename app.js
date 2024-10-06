const image = document.getElementById("img")



let dataRaw = fetch("https://restcountries.com/v3.1/all")
.then(data =>data.json())
.then((data) => {
   let imageUrl = data[0].flags.svg
    image.setAttribute("src", imageUrl)
    // console.log(imageUrl);
    

})




  


    // console.log(datagotten);
    

// console.log (image.getAttribute("src"))



// document.body.innerHTML=`<img src="${data}"/>`