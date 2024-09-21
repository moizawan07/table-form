var namevaluearr = [];
var passvaluearr = [];
var emailvaluearr = [];
var adressvaluearr = [];
var statevaluearr = [];


//  Stored each input value in variable inside the function

function submit_form (){
    let namevalue = document.getElementById("full-name").value;
    let  passvalue = document.getElementById("Password").value;
    let  emailvalue = document.getElementById("email").value;
    let Adressvalue = document.getElementById ("Address").value;
    let statevalue = document.getElementById("State").value;

    // PUSH VARIABLE IN ARRAYS

    namevaluearr.push(namevalue);
    passvaluearr.push(passvalue)
    emailvaluearr.push(emailvalue)
    adressvaluearr.push(Adressvalue)
    statevaluearr.push(statevalue)

    let userdata =  document.getElementById("tabl");
    
    //  FIRST ROW DATA
    
    var nameShow = document.getElementById("forname");
    var passShow = document.getElementById("forpass");
    var emailShow = document.getElementById("foremail");
    var adressShow = document.getElementById("foradress");
    var phoneShow = document.getElementById("forphone");
    
    nameShow.innerHTML = `
     ${namevaluearr[0]}`
    
    passShow.innerHTML = `
     ${passvaluearr[0]}`
    
    emailShow.innerHTML = `
     ${emailvaluearr[0]}`
    
    adressShow.innerHTML = `
     ${adressvaluearr[0]}`
    
    phoneShow.innerHTML = `
     ${statevaluearr[0]}`


     if(namevaluearr[1] === undefined){
      nameShow1.innerHTML = `
      ${hello}`
    }
    // SECOND ROW DATA
    
    var nameShow2 = document.getElementById("forname2");
    var passShow2 = document.getElementById("forpass2");
    var emailShow2 = document.getElementById("foremail2");
    var adressShow2 = document.getElementById("foradress2");
    var phoneShow2 = document.getElementById("forphone2");
    
    nameShow2.innerHTML = `
    ${namevaluearr[1]}`

    passShow2.innerHTML = `
    ${passvaluearr[1]}`

    emailShow2.innerHTML = `
    ${emailvaluearr[1]}`

    adressShow2.innerHTML = `
    ${adressvaluearr[1]}`
    
    phoneShow2.innerHTML = `
    ${statevaluearr[1]}`
    
    
    if(namevaluearr[2] === undefined){
      nameShow2.innerHTML = `
      ${hello}`
    }
  
    // THIRD ROW DATA

    var nameShow3 = document.getElementById("forname3");
    var passShow3 = document.getElementById("forpass3");
    var emailShow3 = document.getElementById("foremail3");
    var adressShow3 = document.getElementById("foradress3");
    var phoneShow3 = document.getElementById("forphone3");

    nameShow3.innerHTML = `
    ${namevaluearr[2]}`

     passShow3.innerHTML = `
    ${passvaluearr[2]}`

     emailShow3.innerHTML = `
    ${emailvaluearr[2]}`

     adressShow3.innerHTML = `
    ${adressvaluearr[2]}`

     phoneShow3.innerHTML = `
    ${statevaluearr[2]}`


    if(namevaluearr[3] === undefined){
      nameShow3.innerHTML = `
      ${hello}`
    }
    // FOURTH ROW DATA

    var nameShow4 = document.getElementById("forname4");
    var passShow4 = document.getElementById("forpass4");
    var emailShow4 = document.getElementById("foremail4");
    var adressShow4 = document.getElementById("foradress4");
    var phoneShow4 = document.getElementById("forphone4");

    nameShow4.innerHTML = `
    ${namevaluearr[3]}`

     passShow4.innerHTML = `
    ${passvaluearr[3]}`

     emailShow4.innerHTML = `
    ${emailvaluearr[3]}`

     adressShow4.innerHTML = `
    ${adressvaluearr[3]}`

     phoneShow4.innerHTML = `
    ${statevaluearr[3]}`
  }
