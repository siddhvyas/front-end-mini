let  nameNode, emailNode, errorNode1, errorNode2;

$(function(){
    nameNode = $("#name");
    emailNode = $("#email");
    errorNode1 = $("#errNode1");
    errorNode2 = $("#errNode2");

    nameNode.blur(()=>validateName());
    emailNode.blur(()=>validateEmail());
})

function validateName(){
    let name=nameNode.val();
    let regex=new RegExp("^[a-zA-z]+([\s][a-zA-Z]+)+$");
    errorNode1.html("");
    if(name===''){
        errorNode1.html("<small>First name is required</small>");
        nameNode.css({border:"2px solid red"});
        return false;
    }
    else if(regex.test(name)==false){
        errorNode1.html("<small>First name must have only letters</small>");
        nameNode.css({border:"2px solid red"});
        return false;
    }
    else{
        fnameNode.css({border:""});
        return true;
    }
}

function validateEmail(){
    let email=emailNode.val();
    errorNode2.html("");
    if(email===''){
        errorNode2.html("<small>Email is required</small>");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode2.html("<small>Please enter valid email</small>");
        emailNode.css({border:"2px solid red"});
        return false;
    }
    else{
        emailNode.css({border:"2px solid grren"});
        return true;
    }
}

// let nameNode=document.getElementById("name");
// let emailNode=document.getElementById("email");

// let errorNode1=document.getElementById("errNode1");
// let errorNode2=document.getElementById("errNode2");

// function validateName(){
//     let name=nameNode.value;
//     let regex=new RegExp("^[a-zA-z]+([\s][a-zA-Z]+)+$");
//     errorNode1.innerHTML="";
//     if(name===''){
//         errorNode1.innerHTML="<small>Name is required</small>";
//         nameNode.style.border="2px solid red";
//         return false;
//     }
//     else if(regex.test(name)==false){
//         errorNode1.innerHTML="<small>Name must have only letters</small>";
//         nameNode.style.border="2px solid red";
//         return false;
//     }
//     else{
//         nameNode.style.border="";
//         return true;
//     }
// }

// function validateEmail(){
//     let email=emailNode.value;
//     errorNode2.innerHTML="";
//     if(email===''){
//         errorNode2.innerHTML="<small>Email is required</small>";
//         emailNode.style.border="2px solid red";
//         return false;
//     }
//     else if(!email.includes('@') || email.endsWith('@')){
//         errorNode2.innerHTML="<small>Please enter valid email</small>";
//         emailNode.style.border="2px solid red";
//         return false;
//     }
//     else{
//         emailNode.style.border="";
//         return true;
//     }
// }