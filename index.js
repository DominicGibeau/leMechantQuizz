/*///////////////////////////////////////////////////////////////////////
                        LES SONS
///////////////////////////////////////////////////////////////////////*/

let sonVictoire1 = new Audio("images/jellyfishJam.mp3");

let sonR11 = new Audio("video/sonr11.mp3");

let sonR21 = new Audio("video/sonr21.mp3");

let sonR31 = new Audio("video/sonr31.mp3");

let sonR12 = new Audio("video/sonr12.mp3");

let sonR32 = new Audio("video/sonr32.mp3");

let sonR13 = new Audio("video/sonr13.mp3");

let sonR23 = new Audio("video/sonr23.mp3");

let sonR33 = new Audio("video/sonr33.mp3");

let sonR14 = new Audio("video/sonr14.mp3");

let sonR24 = new Audio("video/sonr24.mp3");

let sonR34 = new Audio("video/sonr34.mp3");

let sonR15 = new Audio("video/sonr15.mp3");

let sonR25 = new Audio("video/sonr25.mp3");

let sonR35 = new Audio("video/sonr35.mp3");

////////////////////////////////////////////////////////////////////
let sonV1 = new Audio("video/sonV1.mp3");

let sonR1 = new Audio("video/sonR1.mp3");

let sonV2 = new Audio("video/sonV2.mp3");

let sonR2 = new Audio("video/sonR2.mp3");

let sonV3 = new Audio("video/sonV3.mp3");

let sonR3 = new Audio("video/sonR3.mp3");

let sonV4 = new Audio("video/sonV4.mp3");

let sonR4 = new Audio("video/sonR4.mp3");

let sonV5 = new Audio("video/sonV5.mp3");

let sondebut = new Audio("video/commencerSon.mp3");

let sonPt0 = new Audio("video/sonPt0.mp3");

let sonPt1 = new Audio("video/sonPt1.mp3");

let sonPt2 = new Audio("video/sonPt2.mp3");

let sonPt3 = new Audio("video/sonPt3.mp3");

let sonPt4 = new Audio("video/sonPt4.mp3");

let sonPt5 = new Audio("video/sonPt5.mp3");

let sonRec1 = new Audio("video/recS1.mp3");

let musique = new Audio("video/musiqueAriere.mp3");

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////   BOUTON PARTIR  //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


let commencerLeSon = document.querySelector(".bouton-partir");
commencerLeSon.addEventListener("click", etCesReparti);

let boutonPartir = document.querySelector(".bouton-partir");
console.log(boutonPartir);

boutonPartir.addEventListener("click", demarrerJeu);

function demarrerJeu(event) {
  boutonPartir.removeEventListener("click", demarrerJeu);
  document.querySelector("body").classList.add("activation-curseur");

  document.querySelector(".toutLeQuizz").classList.add("cesParti");

  musique.play();
  musique.loop = true;
}



let repartir = document.querySelector(".recommencer");
repartir.addEventListener("click", etCesReparti);
function etCesReparti(event) {
  sondebut.play();
}


///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////   QUESTION 1  //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


/* ---------------  selectionner les bouton ----------------*/

let laProchaineQuestion2_1 = document.querySelector(".r11");
let laProchaineQuestion2_2 = document.querySelector(".r21");
let laProchaineQuestion2_3 = document.querySelector(".r31");

/*---------- quand tu clique sur le bouton 1 -----------*/
laProchaineQuestion2_1.addEventListener("click", allerAQuestion2);
/*---------- quand tu survole le bouton 1 -----------*/
laProchaineQuestion2_1.addEventListener("mouseover", jouerSon11);
laProchaineQuestion2_1.addEventListener("mouseout", jouerSon11);


/*---------- quand tu clique sur le bouton 2 -----------*/
laProchaineQuestion2_2.addEventListener("click", allerAQuestion2);
/*---------- quand tu survole le bouton 2 -----------*/
laProchaineQuestion2_2.addEventListener("mouseover", jouerSon21);
laProchaineQuestion2_2.addEventListener("mouseout", jouerSon21);


/*---------- quand tu clique sur le bouton 3 -----------*/
laProchaineQuestion2_3.addEventListener("click", allerAQuestion2);
/*---------- quand tu survole le bouton 3 -----------*/
laProchaineQuestion2_3.addEventListener("mouseover", jouerSon31);
laProchaineQuestion2_3.addEventListener("mouseout", jouerSon31);


/*========= bouger le quiz =============*/
function allerAQuestion2(event) {
  document.querySelector(".toutLeQuizz").classList.add("prochaineQuestion2");
}


/////////////////////////////////////////   JOUER LES SONS APPROPRIÉ   //////////////////////////////////////// 

///////////  SON BOUTON  1  //////////

function jouerSon11(event) {
  if (event.type == "mouseover") {
    sonR11.play();
  } else {
    sonR11.pause();
    sonR11.currentTime = 0;
  }
}

///////////  SON BOUTON  2  //////////

function jouerSon21(event) {
  if (event.type == "mouseover") {
    sonR21.play();
  } else {
    sonR21.pause();
    sonR21.currentTime = 0;
  }
}

///////////  SON BOUTON  3  //////////

function jouerSon31(event) {
  if (event.type == "mouseover") {
    sonR31.play();
  } else {
    sonR31.pause();
    sonR31.currentTime = 0;
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////   QUESTION 2  //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

/* ---------------  selectionner les bouton ----------------*/

let laProchaineQuestion3_1 = document.querySelector(".r12");
let laProchaineQuestion3_2 = document.querySelector(".r22");
let laProchaineQuestion3_3 = document.querySelector(".r32");


/*---------- quand tu clique sur le bouton 1 -----------*/
laProchaineQuestion3_1.addEventListener("click", allerAQuestion3);
/*---------- quand tu survole le bouton 1 -----------*/
laProchaineQuestion3_1.addEventListener("mouseover", jouerSon12);
laProchaineQuestion3_1.addEventListener("mouseout", jouerSon12);


/*---------- quand tu clique sur le bouton 2 -----------*/
laProchaineQuestion3_2.addEventListener("click", allerAQuestion3);
/*---------- quand tu survole le bouton 2 -----------*/
laProchaineQuestion3_2.addEventListener("mouseover", jouerSon22);
laProchaineQuestion3_2.addEventListener("mouseout", jouerSon22);

/*---------- quand tu clique sur le bouton 3 -----------*/
laProchaineQuestion3_3.addEventListener("click", allerAQuestion3);
/*---------- quand tu survole le bouton 3 -----------*/
laProchaineQuestion3_3.addEventListener("mouseover", jouerSon32);
laProchaineQuestion3_3.addEventListener("mouseout", jouerSon32);


/*========= bouger le quiz =============*/
function allerAQuestion3(event) {
  document.querySelector(".toutLeQuizz").classList.add("prochaineQuestion3");
}

/////////////////////////////////////////   JOUER LES SONS APPROPRIÉ   //////////////////////////////////////// 


///////////  SON BOUTON  1  //////////

function jouerSon12(event) {
  if (event.type == "mouseover") {
    sonR12.play();
  } else {
    sonR12.pause();
    sonR12.currentTime = 0;
  }
}

///////////  SON BOUTON  2  //////////

function jouerSon22(event) {
  if (event.type == "mouseover") {
    sonR12.play();
  } else {
    sonR12.pause();
    sonR12.currentTime = 0;
  }
}

///////////  SON BOUTON  3  //////////

function jouerSon32(event) {
  if (event.type == "mouseover") {
    sonR12.play();
  } else {
    sonR12.pause();
    sonR12.currentTime = 0;
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////   QUESTION 3  //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

/* ---------------  selectionner les bouton ----------------*/

let laProchaineQuestion4_1 = document.querySelector(".r13");
let laProchaineQuestion4_2 = document.querySelector(".r23");
let laProchaineQuestion4_3 = document.querySelector(".r33");


/*---------- quand tu clique sur le bouton 1 -----------*/
laProchaineQuestion4_1.addEventListener("click", allerAQuestion4);
/*---------- quand tu survole le bouton 1 -----------*/
laProchaineQuestion4_1.addEventListener("mouseover", jouerSon13);
laProchaineQuestion4_1.addEventListener("mouseout", jouerSon13);


/*---------- quand tu clique sur le bouton 2 -----------*/
laProchaineQuestion4_2.addEventListener("click", allerAQuestion4);
/*---------- quand tu survole le bouton 2 -----------*/
laProchaineQuestion4_2.addEventListener("mouseover", jouerSon23);
laProchaineQuestion4_2.addEventListener("mouseout", jouerSon23);


/*---------- quand tu clique sur le bouton 3 -----------*/
laProchaineQuestion4_3.addEventListener("click", allerAQuestion4);
/*---------- quand tu survole le bouton 3 -----------*/
laProchaineQuestion4_3.addEventListener("mouseover", jouerSon33);
laProchaineQuestion4_3.addEventListener("mouseout", jouerSon33);


/*========= bouger le quiz =============*/
function allerAQuestion4(event) {
  document.querySelector(".toutLeQuizz").classList.add("prochaineQuestion4");
}

/////////////////////////////////////////   JOUER LES SONS APPROPRIÉ   //////////////////////////////////////// 

///////////  SON BOUTON  1  //////////

function jouerSon13(event) {
  if (event.type == "mouseover") {
    sonR13.play();
  } else {
    sonR13.pause();
    sonR13.currentTime = 0;
  }
}

///////////  SON BOUTON  2  //////////

function jouerSon23(event) {
  if (event.type == "mouseover") {
    sonR23.play();
  } else {
    sonR23.pause();
    sonR23.currentTime = 0;
  }
}

///////////  SON BOUTON  3  //////////

function jouerSon33(event) {
  if (event.type == "mouseover") {
    sonR33.play();
  } else {
    sonR33.pause();
    sonR33.currentTime = 0;
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////   QUESTION 4  //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

/* ---------------  selectionner les bouton ----------------*/

let laProchaineQuestion5_1 = document.querySelector(".r14");
let laProchaineQuestion5_2 = document.querySelector(".r24");
let laProchaineQuestion5_3 = document.querySelector(".r34");

laProchaineQuestion5_1.addEventListener("click", allerAQuestion5);
laProchaineQuestion5_1.addEventListener("mouseover", jouerSon14);
laProchaineQuestion5_1.addEventListener("mouseout", jouerSon14);

laProchaineQuestion5_2.addEventListener("click", allerAQuestion5);
laProchaineQuestion5_2.addEventListener("mouseover", jouerSon24);
laProchaineQuestion5_2.addEventListener("mouseout", jouerSon24);

laProchaineQuestion5_3.addEventListener("click", allerAQuestion5);
laProchaineQuestion5_3.addEventListener("mouseover", jouerSon34);
laProchaineQuestion5_3.addEventListener("mouseout", jouerSon34);

function allerAQuestion5(event) {
  document.querySelector(".toutLeQuizz").classList.add("prochaineQuestion5");
}

/////////////////////////////////////////   JOUER LES SONS APPROPRIÉ   //////////////////////////////////////// 

///////////  SON BOUTON  1  //////////

function jouerSon14(event) {
  if (event.type == "mouseover") {
    sonR14.play();
  } else {
    sonR14.pause();
    sonR14.currentTime = 0;
  }
}

///////////  SON BOUTON  2  //////////

function jouerSon24(event) {
  if (event.type == "mouseover") {
    sonR24.play();
  } else {
    sonR24.pause();
    sonR24.currentTime = 0;
  }
}

///////////  SON BOUTON  3  //////////

function jouerSon34(event) {
  if (event.type == "mouseover") {
    sonR34.play();
  } else {
    sonR34.pause();
    sonR34.currentTime = 0;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////   QUESTION 5  //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

/* ---------------  selectionner les bouton ----------------*/

let laProchaineQuestion6_1 = document.querySelector(".r15");
let laProchaineQuestion6_2 = document.querySelector(".r25");
let laProchaineQuestion6_3 = document.querySelector(".r35");

laProchaineQuestion6_1.addEventListener("click", allerAQuestion6);
laProchaineQuestion6_1.addEventListener("mouseover", jouerSon15);
laProchaineQuestion6_1.addEventListener("mouseout", jouerSon15);

laProchaineQuestion6_2.addEventListener("click", allerAQuestion6);
laProchaineQuestion6_2.addEventListener("mouseover", jouerSon25);
laProchaineQuestion6_2.addEventListener("mouseout", jouerSon25);

laProchaineQuestion6_3.addEventListener("click", allerAQuestion6);
laProchaineQuestion6_3.addEventListener("mouseover", jouerSon35);
laProchaineQuestion6_3.addEventListener("mouseout", jouerSon35);

let meilleurScore = localStorage.getItem("meilleurScore") || 0;

function allerAQuestion6(event) {
  document.querySelector(".toutLeQuizz").classList.add("prochaineQuestion6");
  setTimeout(jugementFinal, 2500);



  // -  vérification de la valeur plus bas
  //L'élément de la page pour indiquer le meilleur score
  meilleurScore = Math.max(meilleurScore, pointage);

  localStorage.setItem("meilleurScore", meilleurScore);

  let elmMeilleurScore = document.querySelector(".h8");

  elmMeilleurScore.innerText = meilleurScore;
}
function jugementFinal(event) {
  if (pointage == 0) {
    sonPt0.play();
    document.querySelector("body").classList.add("zeroPoint");
  }
  if (pointage == 1) {
    sonPt1.play();
    document.querySelector("body").classList.add("unPoint");
  }
  if (pointage == 2) {
    sonPt2.play();
    document.querySelector("body").classList.add("deuxPoint");
  }
  if (pointage == 3) {
    sonPt3.play();
    document.querySelector("body").classList.add("troisPoint");
  }
  if (pointage == 4) {
    sonPt4.play();
    document.querySelector("body").classList.add("quatrePoint");
  }
  if (pointage == 5) {
    sonPt5.play();
    document.querySelector("body").classList.add("cinqPoint");
  }
}

/////////////////////////////////////////   JOUER LES SONS APPROPRIÉ   //////////////////////////////////////// 

///////////  SON BOUTON  1  //////////

function jouerSon15(event) {
  if (event.type == "mouseover") {
    sonR15.play();
  } else {
    sonR15.pause();
    sonR15.currentTime = 0;
  }
}

///////////  SON BOUTON  2  //////////

function jouerSon25(event) {
  if (event.type == "mouseover") {
    sonR25.play();
  } else {
    sonR25.pause();
    sonR25.currentTime = 0;
  }
}

///////////  SON BOUTON  3  //////////

function jouerSon35(event) {
  if (event.type == "mouseover") {
    sonR35.play();
  } else {
    sonR35.pause();
    sonR35.currentTime = 0;
  }
}

//////////////////////////////////////////////////////////////////////////

let bonneReponse1 = document.querySelector(".r11");
let bonneReponse2 = document.querySelector(".r22");
let bonneReponse3 = document.querySelector(".r33");
let bonneReponse4 = document.querySelector(".r14");
let bonneReponse5 = document.querySelector(".r35");

bonneReponse1.addEventListener("click", plusDePoint1);
bonneReponse1.addEventListener("click", facher);

bonneReponse2.addEventListener("click", plusDePoint2);
bonneReponse2.addEventListener("click", facher);

bonneReponse3.addEventListener("click", plusDePoint3);
bonneReponse3.addEventListener("click", facher);

bonneReponse4.addEventListener("click", plusDePoint4);
bonneReponse4.addEventListener("click", facher);

bonneReponse5.addEventListener("click", plusDePoint5);
bonneReponse5.addEventListener("click", facher);

////////////////////////////////////////////////////////////////////////////

let mauvaiseReponse1 = document.querySelector(".r21");
let mauvaiseReponse2 = document.querySelector(".r31");
let mauvaiseReponse3 = document.querySelector(".r12");
let mauvaiseReponse4 = document.querySelector(".r32");
let mauvaiseReponse5 = document.querySelector(".r13");
let mauvaiseReponse6 = document.querySelector(".r23");
let mauvaiseReponse7 = document.querySelector(".r24");
let mauvaiseReponse8 = document.querySelector(".r34");
let mauvaiseReponse9 = document.querySelector(".r15");
let mauvaiseReponse10 = document.querySelector(".r25");

mauvaiseReponse1.addEventListener("click", rater1);
mauvaiseReponse1.addEventListener("click", content);

mauvaiseReponse2.addEventListener("click", rater2);
mauvaiseReponse2.addEventListener("click", content);

mauvaiseReponse3.addEventListener("click", rater3);
mauvaiseReponse3.addEventListener("click", content);

mauvaiseReponse4.addEventListener("click", rater4);
mauvaiseReponse4.addEventListener("click", content);

mauvaiseReponse5.addEventListener("click", rater5);
mauvaiseReponse5.addEventListener("click", content);

mauvaiseReponse6.addEventListener("click", rater6);
mauvaiseReponse6.addEventListener("click", content);

mauvaiseReponse7.addEventListener("click", rater7);
mauvaiseReponse7.addEventListener("click", content);

mauvaiseReponse8.addEventListener("click", rater8);
mauvaiseReponse8.addEventListener("click", content);

mauvaiseReponse9.addEventListener("click", rater9);
mauvaiseReponse9.addEventListener("click", content);

mauvaiseReponse10.addEventListener("click", rater10);
mauvaiseReponse10.addEventListener("click", content);

function rater1(event) {
  document.querySelector(".r21").classList.add("pasBon");
  sonR21.pause();
  sonR1.play();
}

function rater2(event) {
  document.querySelector(".r31").classList.add("pasBon");
  sonR31.pause();
  sonR1.play();
}

function rater3(event) {
  document.querySelector(".r12").classList.add("pasBon");
  sonR12.pause();
  sonR2.play();
}

function rater4(event) {
  document.querySelector(".r32").classList.add("pasBon");
  sonR32.pause();
  sonR2.play();
}

function rater5(event) {
  document.querySelector(".r13").classList.add("pasBon");
  sonR13.pause();
  sonR3.play();
}

function rater6(event) {
  document.querySelector(".r23").classList.add("pasBon");
  sonR23.pause();
  sonR3.play();
}

function rater7(event) {
  document.querySelector(".r24").classList.add("pasBon");
  sonR24.pause();
  sonR4.play();
}

function rater8(event) {
  document.querySelector(".r34").classList.add("pasBon");
  sonR34.pause();
  sonR4.play();
}

function rater9(event) {
  document.querySelector(".r15").classList.add("pasBon");
  sonR15.pause();
  sonV5.play();
}

function rater10(event) {
  document.querySelector(".r25").classList.add("pasBon");
  sonR25.pause();
  sonV5.play();
}

////////////////////////////////////////////////////////////////////////////

function content(event) {
  document.querySelector("body").classList.remove("activation-curseur");
  document.querySelector("body").classList.add("vrai");
  setTimeout(retourALaNormal, 2000);
}

function facher(event) {
  document.querySelector("body").classList.remove("activation-curseur");
  document.querySelector("body").classList.add("faux");
  setTimeout(retourALaNormal, 2000);
}

function retourALaNormal(event) {
  document.querySelector("body").classList.remove("vrai");
  document.querySelector("body").classList.remove("faux");
  document.querySelector("body").classList.add("activation-curseur");
}

////////////////////////////////////////////////////////////////////////////
let tuLADeja1 = 0;
let tuLADeja2 = 0;
let tuLADeja3 = 0;
let tuLADeja4 = 0;
let tuLADeja5 = 0;

let lesPoint = document.querySelector(".h7");

let pointage = 0;
lesPoint.innerText = pointage;

function plusDePoint1(event) {
  if (tuLADeja1 != 1) {
    sonR11.pause();
    sonV1.play();
    document.querySelector(".r11").classList.add("reusis");
    tuLADeja1 = 1;
    pointage = pointage + 1;
    lesPoint.innerText = pointage;
  }
}
function plusDePoint2(event) {
  if (tuLADeja2 != 1) {
    sonR12.pause();
    sonV2.play();
    document.querySelector(".r22").classList.add("reusis");
    tuLADeja2 = 1;
    pointage = pointage + 1;
    lesPoint.innerText = pointage;
  }
}
function plusDePoint3(event) {
  if (tuLADeja3 != 1) {
    sonR33.pause();
    sonV3.play();
    document.querySelector(".r33").classList.add("reusis");
    tuLADeja3 = 1;
    pointage = pointage + 1;
    lesPoint.innerText = pointage;
  }
}
function plusDePoint4(event) {
  if (tuLADeja4 != 1) {
    sonR14.pause();
    sonV4.play();
    document.querySelector(".r14").classList.add("reusis");
    tuLADeja4 = 1;
    pointage = pointage + 1;
    lesPoint.innerText = pointage;
  }
}
function plusDePoint5(event) {
  if (tuLADeja5 != 1) {
    sonR35.pause();
    sonV5.play();
    document.querySelector(".r35").classList.add("reusis");
    tuLADeja5 = 1;
    pointage = pointage + 1;
    lesPoint.innerText = pointage;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let recommencer = document.querySelector(".recommencer");
recommencer.addEventListener("click", cestReparti);
recommencer.addEventListener("mouseover", sonRecommencer);
recommencer.addEventListener("mouseout", sonRecommencer);

function sonRecommencer(event) {
  if (event.type == "mouseover") {
    sonRec1.play();
  } else {
    sonRec1.pause();
    sonRec1.currentTime = 0;
  }
}



recommencer.addEventListener("mouseover", arreterResultat);

function arreterResultat(event) {
  sonPt0.pause();
  sonPt0.currentTime = 0;
  sonPt1.pause();
  sonPt1.currentTime = 0;
  sonPt2.pause();
  sonPt2.currentTime = 0;
  sonPt3.pause();
  sonPt3.currentTime = 0;
  sonPt4.pause();
  sonPt4.currentTime = 0;
  sonPt5.pause();
  sonPt5.currentTime = 0;
}

function cestReparti(event) {
  pointage = 0;

  document.querySelector(".r35").classList.remove("reusis");
  document.querySelector(".r14").classList.remove("reusis");
  document.querySelector(".r33").classList.remove("reusis");
  document.querySelector(".r22").classList.remove("reusis");
  document.querySelector(".r11").classList.remove("reusis");

  tuLADeja1 = 0;
  tuLADeja2 = 0;
  tuLADeja3 = 0;
  tuLADeja4 = 0;
  tuLADeja5 = 0;

  document.querySelector(".r25").classList.remove("pasBon");
  document.querySelector(".r15").classList.remove("pasBon");
  document.querySelector(".r34").classList.remove("pasBon");
  document.querySelector(".r24").classList.remove("pasBon");
  document.querySelector(".r23").classList.remove("pasBon");
  document.querySelector(".r13").classList.remove("pasBon");
  document.querySelector(".r32").classList.remove("pasBon");
  document.querySelector(".r12").classList.remove("pasBon");
  document.querySelector(".r31").classList.remove("pasBon");
  document.querySelector(".r21").classList.remove("pasBon");

  document.querySelector(".toutLeQuizz").classList.remove("prochaineQuestion6");
  document.querySelector(".toutLeQuizz").classList.remove("prochaineQuestion5");
  document.querySelector(".toutLeQuizz").classList.remove("prochaineQuestion4");
  document.querySelector(".toutLeQuizz").classList.remove("prochaineQuestion3");
  document.querySelector(".toutLeQuizz").classList.remove("prochaineQuestion2");
  document.querySelector(".toutLeQuizz").classList.add("cesParti");

  document.querySelector("body").classList.remove("zeroPoint");

  document.querySelector("body").classList.remove("unPoint");

  document.querySelector("body").classList.remove("deuxPoint");

  document.querySelector("body").classList.remove("troisPoint");

  document.querySelector("body").classList.remove("quatrePoint");

  document.querySelector("body").classList.remove("cinqPoint");
}
