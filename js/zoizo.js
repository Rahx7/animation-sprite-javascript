// permet de récupérer la largeur de la fenêtre quelque soit le navigateur.
let largeurWin = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//alert(largeurWin);

let i = 0;
let leZoizo;
let creatSpan;
let divFond;
let monFond;



let posEcran, posEcranY;
let posEcranMax = largeurWin;
let pasDeplacementX = 3;


//--------------------------------------------------raoul---------------------------------------------
// je pose les variables de la position images
let posImx, posImy = 0;

//----------------------------------------------------l'image - ses valeurs 

// let machaine = `mon chiffre est ${lmavar}`;
let lesFonds = [
    {
        nom: 'fond1',
        largeur: 3114,
        hauteur: 222,
        // nombreElement: 16,
        // pasD: 3

    }
    ,
    {
        'nom': 'decorSable',
        largeur: 982,
        hauteur: 234,
        // nombreElement: 16,
        // pasD: 3
    }
    ,
    {
        'nom': 'decorsHaut',
        largeur: 1823,
        hauteur: 283,
        // nombreElement: 16,
        // pasD: 3

    }

    ,
    {
        'nom': 'decorsFond',
        largeur: 1823,
        hauteur: 283,
        // nombreElement: 16,
        // pasD: 3

    }
    

]

let personnage = [
    {
        'nom': 'mortVivantDroite',
        largeur: 465,
        hauteur: 45,
        nombreElement: 16,
        pasD: 3

    },
    {
        'nom': 'BoatMan2fin',
        largeur: 179,
        hauteur: 49,
        nombreElement: 6,
        pasD: 6
    },
    {
        'nom': 'zombiMarche912',
        largeur: 912,
        hauteur: 45,
        nombreElement: 24,
        pasD: 3
    },
    {
        'nom': 'brasTir',
        largeur: 432,
        hauteur: 23,
        nombreElement: 10,
        pasD: 5
    },
    {
        'nom': 'bras',
        largeur: 912,
        hauteur: 45,
        nombreElement: 24,
        pasD: 5
    },
    {
        'nom': 'brasSaut',
        largeur: 601,
        hauteur: 45,
        nombreElement: 16,
        pasD: 3
    }
];

let numPerso = 2;

// ici la dimension du span -----------------------

let nomImage = personnage[numPerso].nom;
let dimX = personnage[numPerso].largeur;
let dimY = personnage[numPerso].hauteur;
let nombreX = personnage[numPerso].nombreElement;
pasDeplacementX = personnage[numPerso].pasD;




//6;mec cours 16 saute
let nombreY = 1; //1;



let dimXtotal = dimX / nombreX; //ma largeur
let dimYtotal = dimY / nombreY;  // mon hauteur


let j = 0;



function init() {

    // je select mon personnage . zozio
    leZoizo = document.querySelector('.zoizo');
    // je cree mon span bras
    creatSpan = document.createElement('span');
    creatSpan.classList.add('bras');
    //que j'ajoute
    leZoizo.insertAdjacentElement('afterend',creatSpan);

    // je calle la taille de mon sprite personnage dans zozio
    leZoizo.style.width = dimXtotal + "px"; /// j
    leZoizo.style.height = dimYtotal + "px";

    //je positionne
    posEcran = 300;
    posEcranY = 300;
    leZoizo.style.left = posEcran + "px";
    leZoizo.style.top = posEcranY + "px";






    recupFond(0);



}


//////////////////----------------------------------------FIN --------------------------- 

//////////////--------------LE FOND-------------------------






// var fondBack = document.querySelector('#fond .back');
// var fondFront = document.querySelector('#fond .front');



let nomImageF; //mes fond s
let dimXF; /// les tailles 
let dimYF;




function recupPerso(param) {

    nomImage = personnage[param].nom;
    dimX = personnage[param].largeur;
    dimY = personnage[param].hauteur;
    nombreX = personnage[param].nombreElement;
    pasDeplacementX = personnage[param].pasD;


    dimXtotal = dimX / nombreX; //ma largeur
    dimYtotal = dimY / nombreY;  // mon hauteur
    leZoizo.style.width = dimXtotal + "px"; /// je calle la taille de mon image dans le css du span
    leZoizo.style.height = dimYtotal + "px";

}

let tailleXfond, tailleYfond,xFond,yFond; // position et largeur du fond

tailleXfond= 1200;
tailleYfond = 260;

xFond = 200;
yFond = 150;


function recupFond(param2) {
    // je cree la div fond  
    divFond = document.createElement('div');
    divFond.classList.add('fond');
    document.body.appendChild(divFond);

    nomImageF = lesFonds[param2].nom;
    dimXF = lesFonds[param2].largeur;
    dimYF = lesFonds[param2].hauteur;

   

    divFond.style.background = 'url(img/fonds/'+ nomImageF+'.png) no-repeat';


    divFond.style.backgroundPositionX = 0; 
    divFond.style.backgroundPositionY = 0;

    divFond.style.top=yFond+'px';
    divFond.style.left=xFond+'px';

    divFond.style.height=tailleYfond+'px';
    divFond.style.width=tailleXfond+'px';


}


let nomImageB ;
let nombreXB ;
let nombreYB = 1 ;
let dimXtotalB;
let dimYtotalB;
let dimXB,dimYB, pasDeplacementXB;
let cote_b = true;

function recupBras(indexBras){

    nomImageB = personnage[indexBras].nom;
    dimXB = personnage[indexBras].largeur;
    dimYB = personnage[indexBras].hauteur;
    nombreXB = personnage[indexBras].nombreElement;
    pasDeplacementXB = personnage[indexBras].pasD;

    dimXtotalB = dimXB / nombreXB; //ma largeur
    dimYtotalB = dimYB / nombreYB;  // mon hauteur
    leZoizo.nextElementSibling.style.width = dimXtotalB + "px"; /// je calle la taille de mon image dans le css du span
    leZoizo.nextElementSibling.style.height = dimYtotalB + "px";

    // leZoizo.firstChild.style.left= 0;
    // leZoizo.firstChild.style.top = 0;


}


// evenement.
// si on redimensionne le navigateur, je redemande, la valeur de sa largeur.
window.onresize = function () {
    largeurWin = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    posEcranMax = largeurWin;
}



// Toutes les 100ms, j'appel la fonction loop();




window.addEventListener("keydown", maFonctionClavier, false);
window.addEventListener("keyup", maFonctionClavierUp, false);
//window.addEventListener

// 100ms => 10 images / seconde
var m =0;
var k = 0;
var l; // les variable pour le saut
var cal;

// une fois les 100ms passés, j'appel la fonction toto();
// comme une temporisation
var haut = false, bas = false, gauche = false, droite = false;
var inter, interSaut;
var clavier_b = false;
let Top, Left;




function maFonctionClavier(e) {



    console.log(e.keyCode);
    // if(e.keyCode==32){ saut(); k=0 }

    switch (e.keyCode) {
        case 38:

            haut = true;
            if (!clavier_b && !saut_b) { loop2(); clavier_b = true }

            break;
        case 40:
            bas = true;

            if (!clavier_b && !saut_b) { loop2(); clavier_b = true }

            break;
        case 37:
            gauche = true;
            cote_b = false;
            if (!clavier_b && !saut_b) { loop2(); clavier_b = true ; }
            break;
        case 39:
            droite = true;
            cote_b = true;

            if (!clavier_b && !saut_b) { loop2(); clavier_b = true; }
            break;

    }

    if (e.keyCode == 32) { sauter();  }
    if (e.keyCode == 37 || e.keyCode == 39) { cote_b != cote_b}


}

function maFonctionClavierUp(e) {
    console.log(e);

    switch (e.keyCode) {

        case 38:
            haut = false;
            console.log(' GGOOOORRSSSSS ');
            break;
        case 40:
            bas = false;
            console.log(' GGOOOORRSSSSS ');
            break;
        case 37:
            gauche = false;

            if(droite) cote_b = true; 
            console.log(' GGOOOORRSSSSS ');
            break;
        case 39:
            droite = false; 
            if(gauche) cote_b = false;     
            console.log(' GGOOOORRSSSSS ');
            break;
    }


    if (haut == false && bas == false && gauche == false && droite == false) {

        clearInterval(inter);
        clavier_b = false;
         
    }
}

var saut_b = false;
let positionYinit;


function sauter() {


        if (!saut_b) {    
            recupPerso(0);
            // positionBrasRectif();
            recupBras(5);

            leZoizo.style.background = 'url(img/' + nomImage + '.png) no-repeat';
            leZoizo.nextElementSibling.style.background = 'url(img/' + nomImageB + '.png) no-repeat';

            clearInterval(inter);
            
            clavier_b = false;
            positionYinit = posEcranY;
            saut_b = true ;
            

        /// mon saut ///////////
            let DY;
            let DX;
           
        interSaut = setInterval(() => {
            
           
            
            positionBras();
            boucleImageBras(nombreXB, dimXtotalB, nombreYB, dimYtotalB); // 
            
            m++;
            if (m >= nombreX) {
                m = 0;
            }


            DX = -dimXtotal * m;
            DY = -dimYtotal * 0;

            
            leZoizo.style.backgroundPosition = "" + DX + "px  " + DY + "px";


            if (m > 7 && m < 11) { posEcranY -= 7 } // a quel image on saute 
            if (m > 11 && m < 15) { posEcranY += 7 }


            if(droite ){ posEcran += pasDeplacementX; }
            if(gauche ) { posEcran -= pasDeplacementX; }
            
            if (cote_b) {leZoizo.style.transform = 'scale(1,1)' ;leZoizo.nextElementSibling.style.transform = 'scale(1,1)' }
            else { leZoizo.style.transform = 'scale(-1,1)'; leZoizo.nextElementSibling.style.transform = 'scale(-1,1)'  }

            // 3)UTILISATION de la variable posEcran
            leZoizo.style.left = posEcran + "px";
            leZoizo.style.top = posEcranY + "px";
            
            positionBras(); 
            
            if (m >= nombreX - 1) { clearInterval(interSaut); saut_b = false;
                
                nombreXB=0;
                recupBras(4);

                if(haut || bas || gauche || droite) {clearInterval(inter); loop2(); clavier_b = true}
            
            };
            
           

        }, 75);
        // saut_b=false;
        
        positionBras();
    }

}



let tour=0;
function positionBras(){ // appelé a chaque interval
 
    
   

    Top  = posEcranY ;
    Left  = posEcran;
    Top +=2;
    
    if( !saut_b){ 
        if(cote_b){Left+=14}
        else{Left-=14} 
    } 
    else { 
        Top -=2;
        if(cote_b){Left+=7 }
        else {Left-=15 } }
    
    
    leZoizo.nextElementSibling.style.top = Top+'px' ; 
    leZoizo.nextElementSibling.style.left = Left+'px';



    if (cote_b) {leZoizo.nextElementSibling.style.transform = 'scale(1,1)' }
    else { leZoizo.nextElementSibling.style.transform = 'scale(-1,1)'  }


    

    


    if(saut_b){ 

        if (tour < 3 ) { Left -= 3;  };
        if (tour > 3 && tour < 9) { Left += 1 };

        // if(!cote_b){  !Left ; }

        if (tour < 4 ) { Top += 0;  }; // a quel image on saute 
        if (tour > 4 && tour < 8) { Top -= 2 };

    }


  

}


let yMin = 277;
let yMax = 321;

function loop2() {


    recupPerso(2); // perso zombi marche
    recupBras(4);
    if(saut_b){recupBras(5);} // bras bouge

    leZoizo.style.background = 'url(img/' + nomImage + '.png) no-repeat';
    leZoizo.nextElementSibling.style.background = 'url(img/' + nomImageB + '.png) no-repeat';

    
    positionBras();


    inter = setInterval(() => {

        
        boucleImagePerso(nombreX, dimXtotal, nombreY, dimYtotal);
        boucleImageBras(nombreXB, dimXtotalB, nombreYB, dimYtotalB);


        //je gère ma position d'image ici en css
 

        


        //------------------------------------------------------------- FIN


        // Déplacement à l'écran
        //----------------------------
        // 1)MODIFICATION de la variable posEcran
        if (droite) { posEcran += pasDeplacementX; leZoizo.style.transform = 'scale(1,1)' }
        if (gauche) { posEcran -= pasDeplacementX; leZoizo.style.transform = 'scale(-1,1)' }
        if (haut) { if(posEcranY >= yMin){ posEcranY -= pasDeplacementX;}  }
        if (bas) { if(posEcranY <= yMax ){ posEcranY += pasDeplacementX;} }


        // 2)VERIFICATION de la variable posEcran
        if (posEcran > posEcranMax) {
            posEcran = -dimXtotal;
        }

        // 3)UTILISATION de la variable posEcran
        leZoizo.style.left = posEcran + "px";
        leZoizo.style.top = posEcranY + "px";

       


         positionBras();


    }, 75);


    

}
let DX;
let DY;
function boucleImagePerso(nbx, dXt, nby, dYt){


    i++;
    if (i == nbx) {
        i = 0;
    }

    DX = -dXt * i;
    DY = -dYt * 0;

    leZoizo.style.backgroundPosition = "" + DX + "px  " + DY + "px";
}

let DXB;
let DYB;

function boucleImageBras(nbx, dXt, nby, dYt){

    k++;
    if (k >= nbx) {
        k = 0;
    }

    let DXB = -dXt * k;
    let DYB = -dYt * 0;

   
    leZoizo.nextElementSibling.style.backgroundPosition = "" + DXB + "px  " + DYB + "px";
   
}


window.onload = init();




