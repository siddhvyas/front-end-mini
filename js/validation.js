let nameNode=document.getElementById("fullName");
let contactNode=document.getElementById("contact");
let emailNode=document.getElementById("email");
let pwdNode=document.getElementById("password");
let conPwdNode=document.getElementById("confirmPassword");

let errorNode1=document.getElementById("errNode1");
let errorNode2=document.getElementById("errNode2");
let errorNode3=document.getElementById("errNode3");
let errorNode4=document.getElementById("errNode4");
let errorNode5=document.getElementById("errNode5");

function validateForm(){
    let v1 = v2 = v3 = v4 = v5 = false;
    v1=validateName();
    v2=validateContact();
    v3=validateEmail();
    v4=validatePwd();
    v5=validateConPwd();
    return (v1 && v2 && v3 && v4 && v5 && v6 && v7); 
}

function validateName(){
    let name=nameNode.value;
    let regex=new RegExp("^[a-zA-z]+([\s][a-zA-Z]+)+$");
    errorNode1.innerHTML="";
    if(name===''){
        errorNode1.innerHTML="<small>Name is required</small>";
        nameNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(name)==false){
        errorNode1.innerHTML="<small>Name must have only letters</small>";
        nameNode.style.border="2px solid red";
        return false;
    }
    else{
        nameNode.style.border="";
        return true;
    }
}

function validateContact(){
    let contact=contactNode.value;
    errorNode2.innerHTML="";
    let regex=new RegExp("^[0-9]{10}$");

    if(contact===''){
        errorNode2.innerHTML="<small>Mobile number is required</small>";
        contactNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(contact)===false){
        errorNode2.innerHTML="<small>Mobile number must be 10 digits number</small>";
        contactNode.style.border="2px solid red";
        return false;
    }
    else{
        contactNode.style.border="";
        return  true;
    }
}

function validateEmail(){
    let email=emailNode.value;
    errorNode3.innerHTML="";
    if(email===''){
        errorNode3.innerHTML="<small>Email is required</small>";
        emailNode.style.border="2px solid red";
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode3.innerHTML="<small>Please enter valid email</small>";
        emailNode.style.border="2px solid red";
        return false;
    }
    else{
        emailNode.style.border="";
        return true;
    }
}

function validatePwd(){
    let pass=pwdNode.value;
    errorNode4.innerHTML="";
    let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if(pass===''){
        errorNode4.style.display = 'block';
        errorNode4.innerHTML="<small>Password is required</small>";
        pwdNode.style.border="2px solid red";
        return false;
    }
    else if(regx.test(pass)==false){
        errorNode4.style.display = 'block';
        errorNode4.innerHTML="<small>Password should be 6 to 12 characters long Password should have atleast</small>";
        let ulNode=document.createElement('ul');
        errorNode4.append(ulNode);
        ulNode.style.fontSize="10px";
        let ar=['Capital Letter','Small Letter','Digit','Special Symbol'];
        for(let val of ar){
            let liNode=document.createElement('li');
            liNode.textContent=val;
            ulNode.append(liNode);
        }
        passNode.style.border="2px solid red";
        return false;
    }
    else{
        passNode.style.border="";
        return true;
    }
}

function validateConPwd(){
    let conPass=conPwdNode.value;
    let pass=pwdNode.value;
    errorNode5.innerHTML="";
    if(conPass===''){
        errorNode5.innerHTML="<small>Password is required</small>";
        conPwdNode.style.border="2px solid red";
        return false;
    }
    else if(conPass!=pass){
        errorNode5.innerHTML="<small>Both passwords should match</small>";
        conPwdNode.style.border="2px solid red";
        return false;
    }
    else{
        conPwdNode.style.border="";
        return true;
    }
}

