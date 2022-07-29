// function likeProperty(){
//     if (document.getElementById("heart").src == 'http://127.0.0.1:5500/img/favorite_border_black_24dp.svg'){
//         document.getElementById("heart").src = 'img/favorite_black_24dp.svg';
//     }
//     else {
//         document.getElementById("heart").src = 'img/favorite_border_black_24dp.svg'
//     }
//     console.log(typeof(document.getElementById("heart").src));
// }

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('unload').style.visibility="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility="hidden";
           document.getElementById('unload').style.visibility="visible";
        },1000);
    }
}

function likeProperty(source){
    if (source.src == 'http://127.0.0.1:5500/img/favorite_border_black_24dp.svg'){
        source.src = 'img/favorite_black_24dp.svg';
    }
    else{
        source.src = 'img/favorite_border_black_24dp.svg';
    }
    console.log(source)
}

function showInfo(source){
    let block1 = source.nextSibling.nextSibling;
    let block2 = source.nextSibling.nextSibling.nextSibling.nextSibling;
    if (block1.style.display == "" || block1.style.display == 'none') {
        block1.style.display = "grid";
        block2.style.display = "grid";
        source.style.display = "none";
    }
}

function hideInfo(source){
    if (source.className == "block2"){
        source.style.display = "none";
        source.nextSibling.nextSibling.style.display = "none";
        source.previousSibling.previousSibling.style.display = "";
    }
    else if (source.className == "block3"){
        source.style.display = "none";
        source.previousSibling.previousSibling.style.display = "none";
        source.previousSibling.previousSibling.previousSibling.previousSibling.style.display = "";
    }
}
