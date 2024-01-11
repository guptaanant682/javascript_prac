// event delegation = jab aap event listener se kai saare different elements ke events ko handle kr ske

// even listener ko parent par lagao aur unko id, class ya fir tags ke basis par differentiate krke different tasks karao.

// var parent = document.querySelector('#parent');
// parent.addEventListener("click", function(){
//     console.log("works");
// })
// na humne play button pe event listener lgaya h aur na hi pause button pe
// prr fir bhi ye kaam krega kyunki jab event listener ko kis child pe event ko check uske parent par kia jayega aur and so on..


/////////////////////iss cheez ko event bubbling khte hain 

var parent = document.querySelector('#parent');
parent.addEventListener("click", function(details){ // hum yha details ki jagah kuch bhi naam rkh skte h
    console.log(details);
    // details mein saari details hongi kispe event listener chla, kiski wajah se chla sbbb
    console.log(details.target);

    if(details.target.id === "play"){
        console.log("play song");
    }

    else if(details.target.id === "pause"){
        console.log("pause song");
    }
}
);

// jse humne yha pe ek event listener lgake multiple events kie h, isi cheez ko event delegation khte h


