// permet de récupérer la largeur de la fenêtre quelque soit le navigateur.
let largeurWin = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//alert(largeurWin);
// evenement.
// si on redimensionne le navigateur, je redemande, la valeur de sa largeur.
window.onresize = function () {
    largeurWin = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    posEcranMax = largeurWin;
}

let i = 0;
let lePerso;
let creatSpan;
let divFond;
let monFond;



let posEcranXPerso, posEcranYPerso;
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

let personnage = {
     marco :{
  
        'nom': 'zombiMarche912',
        largeur: 912,
        hauteur: 45,
        nombreElement: 24,
        nombreElementY: 1,
        pasD: 3,
        bras:[
            {
                'nom': 'bras',
                largeur: 912,
                hauteur: 45,
                nombreElement: 24,
                nombreElementY: 1,
                positionBrasX: 10,
                positionBrasY: 10,
                pasD: 5,

            },
            { 
                'nom': 'brasSaut',
                largeur: 601,
                hauteur: 45,
                nombreElement: 16,
                nombreElementY: 1,
                pasD: 3,
                positionBrasX: 10,
                positionBrasY: 10,
                }, 
                { 
                'nom': 'brasTir',
                largeur: 590,
                hauteur: 29,
                nombreElement: 10,
                nombreElementY: 1,
                pasD: 5,
                positionBrasX: 10,
                positionBrasY: 10,
            }, 
        ],

        armes: [
            

        ], 

        saut : {
          'nom': 'mortVivantDroite',
            largeur: 465,
            hauteur: 45,
            nombreElement: 16,
            nombreElementY: 1,
            pasD: 3,

        },
        pause : { }
        
    },

};



let armes = [
        {
        'nom': 'brasTir',
        largeur: 590,
        hauteur: 29,
        nombreElement: 10,
        nombreElementY: 1,
        pasD: 5,
        positionArmeX: 10,
        positionArmeY: 10,
    },
];

// let bras = [

//         {
//             'nom': 'brasTir',
//             largeur: 590,
//             hauteur: 29,
//             nombreElement: 10,
//             nombreElementY: 1,
//             pasD: 5,
//             positionArmeX: 10,
//             positionArmeY: 10,
//         },

//         {
//             'nom': 'bras',
//             largeur: 912,
//             hauteur: 45,
//             nombreElement: 24,
//             nombreElementY: 1,
//             pasD: 5
//         },
//         {
//             'nom': 'brasSaut',
//             largeur: 601,
//             hauteur: 45,
//             nombreElement: 16,
//             nombreElementY: 1,
//             pasD: 3
//         }
// ];


let numPerso = 2;

// ici la dimension du span -----------------------
let nomImage;
let dimX;
let dimY;
let nombreX;

//6;mec cours 16 saute
let nombreY; //1;
let dimXtotal; //ma largeur
let dimYtotal;  // mon hauteur


let j = 0;
let monBras;
let monPerso;
var maDivPerso;

function init() {

    // je select mon personnage . zozio
    
    maDivPerso = document.createElement('div');
    maDivPerso.classList.add('monPersoEntier');

    monPerso = document.createElement('span')
    monPerso.classList.add('perso');
    monBras = document.createElement('span')
    monBras.classList.add('bras');

    
    maDivPerso.appendChild(monPerso);
    maDivPerso.appendChild(monBras);

    document.body.appendChild(maDivPerso);


    recupFond(0);
     // perso zombi marche
    recupBras(0);
    
    // je calle la taille de mon sprite personnage dans zozio


    //je positionne
    posEcranXPerso = 300;
    posEcranYPerso = 300;
    maDivPerso.style.left = posEcranXPerso + "px";
    maDivPerso.style.top = posEcranYPerso + "px";

    positionBras();
    // recup(0);
    // boucleImagePerso(nombreX, dimXtotal, nombreY, dimYtotal);
    // boucleImageBras(nombreXB, dimXtotalB, nombreYB, dimYtotalB);


}


//////////////////----------------------------------------FIN --------------------------- 

//////////////--------------LE FOND-------------------------






// var fondBack = document.querySelector('#fond .back');
// var fondFront = document.querySelector('#fond .front');





nombreY = 1;



function recupPerso(param) {

    nomImage = personnage[param].nom;
    dimX = personnage[param].largeur;
    dimY = personnage[param].hauteur;
    nombreX = personnage[param].nombreElement;
    nombreY = personnage[param].nombreElementY;
    
    pasDeplacementX = personnage[param].pasD;

    dimXtotal = dimX / nombreX; //ma largeur
    dimYtotal = dimY / nombreY;  // mon hauteur


    // if(param <= 2){
        monPerso.style.width = dimXtotal + "px"; /// je calle la taille de mon image dans le css du span
        monPerso.style.height = dimYtotal + "px";
        monPerso.style.background = 'url(img/' + nomImage + '.png) no-repeat';
    
    // }else {

    // lePerso.nextElementSibling.style.background = 'url(img/' + nomImage + '.png) no-repeat';
    // lePerso.nextElementSibling.style.width = dimXtotal + "px";  /// je calle la taille de mon image dans le css du span
    // lePerso.nextElementSibling.style.height = dimYtotal + "px";  

    // }

    // 

}


class RecupObj {

        constructor(type, nomPerso){ 

                var nomImagePerso = type[nomPerso].nom;
                var dimXPerso = type[nomPerso].largeur;
                var dimYPerso = type[nomPerso].hauteur;
                var nombreXPerso = type[nomPerso].nombreElement;
                var nombreYPerso = type[nomPerso].nombreElementY;           
                var pasDeplacementXPerso = type[nomPerso].pasD;

                var dimXtotalPerso = dimXPerso / nombreXPerso; //ma largeur
                var dimYtotalPerso = dimYPerso ;  // mon hauteur


                    // creation de mes DIV et SPAN pour chaque perso
                    
                let maDivInit = document.createElement('div');
                    maDivInit.classList.add(nomImagePerso);
            
                let monPersoInit = document.createElement('span')
                    monPersoInit.classList.add(nomImagePerso+'_span');
    
    
              
                maDivInit.appendChild(monPersoInit);
    
                document.body.appendChild(maDivInit);
    
    
                monPerso.style.width = dimXtotalPerso + "px"; /// je calle la taille de mon image dans le css du span
                monPerso.style.height = dimYtotalPerso + "px";
                monPerso.style.background = 'url(img/' + nomImagePerso + '.png) no-repeat';
            

                

           let maFonc = function elem(){ 
                let tab = [];
                tab = type[nomPerso].bras;
               
                for(let ii =0; ii < tab.length ;ii++) {

                    let dimXBras = tab[ii].largeur;
                    let dimYBras = tab[ii].hauteur;
                    let nombreXBras = tab[ii].nombreElement;
                    let nombreYBras = tab[ii].nombreElementY;           
                    let pasDeplacementXBras = tab[ii].pasD;
                    let positionArmeX = tab[ii].positionArmeX 
                    let positionArmeY = tab[ii].positionArmeY


                    let monSpanBras = document.createElement('span');
                    monSpanBras.classList.add(tab[ii].nom)

                    monSpanBras.style.height = dimYBras/nombreYBras + "px";
                    monSpanBras.style.width = dimXBras/nombreXBras + "px";

                    monSpanBras.style.background = 'url(img/' + tab[ii].nom + '.png) no-repeat'; 
                    monSpanBras.style.backgroundPosition = '0';

                    document.body.appendChild(maDivPerso);

                    
                };
            }
            // maFonc();



   

                                    
            let mesObj;
                    mesObj = function Obj(){  // tout pour selectionner la div entière avec les 2 span 


                            
                            let temp = function leQuel(lequelSpan){
                                               
                                
                                    if(lequelSpan=='tout'){
                                        
                                            return maDivInit;
                                    }
                                        
                                    if(lequelSpan=='perso'){ 
                                        
                                            return monPersoInit;
                                    
                                    }

                                    if(lequelSpan=='bras'){
                                      
                                        return monBrasInit;
                                            
                                    }
                                }

                            return  temp//// je recupère mon objet soit div soit les 2 span 


                    }

        

            // if(param <= 2){
                // monPerso.style.width = dimXtotalPerso + "px"; /// je calle la taille de mon image dans le css du span
                // monPerso.style.height = dimYtotalPerso + "px";
                // monPerso.style.background = 'url(img/' + nomImagePerso + '.png) no-repeat';
            
            // }else {

            // lePerso.nextElementSibling.style.background = 'url(img/' + nomImage + '.png) no-repeat';
            // lePerso.nextElementSibling.style.width = dimXtotal + "px";  /// je calle la taille de mon image dans le css du span
            // lePerso.nextElementSibling.style.height = dimYtotal + "px";  

            // let src = document.

            
          

            // var maBoucle;
            // maBoucle = function boucler(){
                
            //         var boucle = function boucleInterne (nombreXPerso, dimXtotalPerso, nombreYPerso, dimYtotalPerso,){

            //             i++;
            //             if (i >= nombreXPerso) {
            //                 i = 0;
            //                 j++;
            //                 if (j>=nombreYPerso-1){j=0}
            //             }
                    
            //             let DXx = -dimXtotalPerso * i; 
            //             let DYy = -dimYtotalPerso * j;
                    
            //             if(!saut_b){i=0}

            //             monPerso.style.backgroundPosition = "" + DXx + "px  " + DYy + "px";
                
            //          }
                    
            //         return boucle;
            // }


            
            var maBoucle;
            maBoucle = function boucler(){
                
                    var boucle = function boucleInterne (oBJ){

                        i++;
                        if (i >= nombreXPerso) {
                            i = 0;
                            j++;
                            if (j>=nombreYPerso-1){j=0}
                        }
                    
                        let DXx = -dimXtotalPerso * i; 
                        let DYy = -dimYtotalPerso * j;
                    
                        if(!saut_b){i=0}

                        monPerso.style.backgroundPosition = "" + DXx + "px  " + DYy + "px";
                
                    }
                    
                    return boucle;
            }

            

            let tabloData = []; 
            
            // boucleImagePerso(nombreXPerso, dimXtotalPerso, nombreYPerso, dimYtotalPerso);

             // je retourne les valeur des propriete des mes perso ou arme bras 
            tabloData.nomImagePerso = nomImagePerso;
            tabloData.dimXPerso = dimXPerso;
            tabloData.dimYPerso = dimYPerso;
            tabloData.nombreXPerso= nombreXPerso;
            tabloData.dimXtotalPerso=dimXtotalPerso;
            tabloData.dimYtotalPerso=dimYtotalPerso;
            tabloData.nombreYPerso=nombreYPerso;
            tabloData.pasDepPerso= pasDeplacementXPerso;
            tabloData.boucle = maBoucle();
            tabloData.getDivPerso = mesObj();
            // tabloData.getSpanPerso = recupObjetSpan();
            // tabloData.getDivBras = recupObjetBras();




            return tabloData; 

        }
        
}


// let recup = class {     /////////////////////////////////////// //////////////////////////////////////////   ma  fonction recup  olb

//         constructor(param, type){


//             if(type==personnage){

//                 var nomImagePerso = type[param].nom;
//                 var dimXPerso = type[param].largeur;
//                 var dimYPerso = type[param].hauteur;
//                 var nombreXPerso = type[param].nombreElement;
//                 var nombreYPerso = type[param].nombreElementY;           
//                 var pasDeplacementXPerso = type[param].pasD;

//                 var dimXtotalPerso = dimXPerso / nombreXPerso; //ma largeur
//                 var dimYtotalPerso = dimYPerso ;  // mon hauteur

//                 monPerso.style.width = dimXtotalPerso + "px"; /// je calle la taille de mon image dans le css du span
//                 monPerso.style.height = dimYtotalPerso + "px";
//                 monPerso.style.background = 'url(img/' + nomImagePerso + '.png) no-repeat';
//             }

//             if(type==armes){

//                 var nomImagePerso = type[param].nom;
//                 var dimXPerso = type[param].largeur;
//                 var dimYPerso = type[param].hauteur;
//                 var nombreXPerso = type[param].nombreElement;
//                 var nombreYPerso = type[param].nombreElementY;           
//                 var pasDeplacementXPerso = type[param].pasD;

//                 var dimXtotalPerso = dimXPerso / nombreXPerso; //ma largeur
//                 var dimYtotalPerso = dimYPerso ;  // mon hauteur

//                 monArme.style.width = dimXtotalPerso + "px"; /// je calle la taille de mon image dans le css du span
//                 monArme.style.height = dimYtotalPerso + "px";
//                 monArme.style.background = 'url(img/' + nomImagePerso + '.png) no-repeat';
//             }
            
//             if(type==bras){

//                 var nomImagePerso = type[param].nom;
//                 var dimXPerso = type[param].largeur;
//                 var dimYPerso = type[param].hauteur;
//                 var nombreXPerso = type[param].nombreElement;
//                 var nombreYPerso = type[param].nombreElementY;           
//                 var pasDeplacementXPerso = type[param].pasD;

//                 var dimXtotalPerso = dimXPerso / nombreXPerso; //ma largeur
//                 var dimYtotalPerso = dimYPerso ;  // mon hauteur

//                 monBras.style.width = dimXtotalPerso + "px"; /// je calle la taille de mon image dans le css du span
//                 monBras.style.height = dimYtotalPerso + "px";
//                 monBras.style.background = 'url(img/' + nomImagePerso + '.png) no-repeat';
//             }
            
          
           
            
//             // }else {

//             // lePerso.nextElementSibling.style.background = 'url(img/' + nomImage + '.png) no-repeat';
//             // lePerso.nextElementSibling.style.width = dimXtotal + "px";  /// je calle la taille de mon image dans le css du span
//             // lePerso.nextElementSibling.style.height = dimYtotal + "px";  

//             // let src = document.

            
//             var maBoucle;
//             maBoucle = function boucler(){
                
//                 var boucle = function boucleInterne (nombreXPerso, dimXtotalPerso, nombreYPerso, dimYtotalPerso,){

//                 i++;
//                 if (i >= nombreXPerso) {
//                     i = 0;
//                     j++;
//                     if (j>=nombreYPerso-1){j=0}
//                 }
            
//                 let DXx = -dimXtotalPerso * i; 
//                 let DYy = -dimYtotalPerso * j;
            
//                 if(!saut_b){i=0}
//                 monPerso.style.backgroundPosition = "" + DXx + "px  " + DYy + "px";
            
//             }
                
//                 return boucle;

//             }
            
            
//            let tabloPersoData = []; 
            
//             // boucleImagePerso(nombreXPerso, dimXtotalPerso, nombreYPerso, dimYtotalPerso);

//              // je retourne les valeur des propriete des mes perso ou arme bras 
//             tabloPersoData.nomImagePerso = nomImagePerso;
//             tabloPersoData.dimXPerso = dimXPerso;
//             tabloPersoData.dimYPerso = dimYPerso;
//             tabloPersoData.nombreXPerso= nombreXPerso;
//             tabloPersoData.dimXtotalPerso=dimXtotalPerso;
//             tabloPersoData.dimYtotalPerso=dimYtotalPerso;
//             tabloPersoData.nombreYPerso=nombreYPerso;
//             tabloPersoData.pasDepPerso= pasDeplacementXPerso;
//             tabloPersoData.fonctionBoucle = maBoucle();
//             return tabloPersoData;

//         }
// }


/////////////// les fonds /////////////////////////////////////////////////////////

let tailleXfond, tailleYfond,xFond,yFond; // position et largeur du fond

tailleXfond= 1200;
tailleYfond = 260;

xFond = 200;
yFond = 150;


let nomImageF; //mes fond s
let dimXF; /// les tailles de fond
let dimYF;

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

    nomImageB = bras[indexBras].nom;
    dimXB = bras[indexBras].largeur;
    dimYB = bras[indexBras].hauteur;
    nombreXB = bras[indexBras].nombreElement;
    pasDeplacementXB = bras[indexBras].pasD;

    dimXtotalB = dimXB / nombreXB; //ma largeur
    dimYtotalB = dimYB / nombreYB;  // mon hauteur
    monBras.style.width = dimXtotalB + "px"; /// je calle la taille de mon image dans le css du span
    monBras.style.height = dimYtotalB + "px";

    // lePerso.firstChild.style.left= 0;
    // lePerso.firstChild.style.top = 0;
    
    monBras.style.background = 'url(img/' + nomImageB + '.png) no-repeat';

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
// let Top, Left;




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
        loop_b = false;
         
    }
}

var saut_b = false;
let positionYinit;


function sauter() {

            clearInterval(inter);
             
            clavier_b = false;
            positionYinit = posEcranYPerso;
            //
            
 
 
            // console.log('%o', new recup(0))

        if (!saut_b) {    

           let tabPerso = new RecupObj(personnage, 'marco'); // je recup ma classe recupObj de personnage en parametre quel tablo
             
            recupBras(1);

            saut_b = true ;
                   
           
            var lePersoTout = tabPerso.getDivPerso('tout'); // je recupere mes element html, le perso
            var leSpanPerso = tabPerso.getDivPerso('perso'); 
            var leSpanBras = tabPerso.getDivPerso('bras'); 

            
                      
        interSaut = setInterval(() => {
            
            positionBras(leSpanBras); 
            
            tabPerso.fonctionBoucle(tabPerso.nombreXPerso,tabPerso.dimXtotalPerso,tabPerso.nombreYPerso,tabPerso.dimYtotalPerso);
            // boucleImageBras(nombreXB, dimXtotalB, nombreYB, dimYtotalB); // 

           

            m++;


            if (m > 7 && m < 11) { posEcranYPerso -= 7 } // a quel image on saute 
            if (m > 11 && m < 15) { posEcranYPerso += 7 }


            if(droite ){ posEcranXPerso += tabPerso.pasDepPerso; }
            if(gauche ) { posEcranXPerso -= tabPerso.pasDepPerso; }
            
            if (cote_b) {monPerso.style.transform = 'scale(1,1)' ;monBras.style.transform = 'scale(1,1)' }
            else { monPerso.style.transform = 'scale(-1,1)'; monBras.style.transform = 'scale(-1,1)'  }

            // 3)UTILISATION de la variable posEcran
            monPerso.style.left = posEcranXPerso + "px";
            monPerso.style.top = posEcranYPerso + "px";
            
            positionBras(leSpanBras);
            
            
            if (m >= tabPerso.nombreXPerso - 1) { clearInterval(interSaut); saut_b = false; // quand la boucle est fini
                
                nombreXB=0;
                m=0;
                recupBras(0);

                if(haut || bas || gauche || droite) {clearInterval(inter); loop2(); clavier_b = true}
            
            };
            
           

        }, 75);
        // saut_b=false;
        
        
    }

}



let tour=0;
function positionBras(objB){ // appelé a chaque interval
 
    let classSpan = objB.className;
    let objTemp = document.getElementsByClassName(classSpan);  

    let Top  = posEcranYPerso ;
    let Left  = posEcranXPerso;
    Top +=2;
    
    if( !saut_b){ 
        if(cote_b){Left+=14}
        else{Left-=14} 
    } 
    else { 
        Top -=2;
        if(cote_b){Left+=7 }
        else {Left-=15 } }
    
    
        objTemp.style.top = Top+'px' ; 
        objTemp.style.left = Left+'px';



    if (cote_b) {objTemp.style.transform = 'scale(1,1)' }
    else { objTemp.style.transform = 'scale(-1,1)'  }


    

    


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
let loop_b = false

function loop2() {


    if(!loop_b){
        recupPerso(2); // perso zombi marche
        recupBras(0);
        loop_b= true;
     }


    if(saut_b){recupBras(1);} // bras bouge



    
    positionBras();


    inter = setInterval(() => {

        
        boucleImagePerso(nombreX, dimXtotal, nombreY, dimYtotal);
        boucleImageBras(nombreXB, dimXtotalB, nombreYB, dimYtotalB);


        //je gère ma position d'image ici en css
 

        


        //------------------------------------------------------------- FIN


        // Déplacement à l'écran
        //----------------------------
        // 1)MODIFICATION de la variable posEcran
        if (droite) { posEcranXPerso += pasDeplacementX; monPerso.style.transform = 'scale(1,1)' }
        if (gauche) { posEcranXPerso -= pasDeplacementX; monPerso.style.transform = 'scale(-1,1)' }
        if (haut) { if(posEcranYPerso >= yMin){ posEcranYPerso -= pasDeplacementX;}  }
        if (bas) { if(posEcranYPerso <= yMax ){ posEcranYPerso += pasDeplacementX;} }


        // 2)VERIFICATION de la variable posEcran
        if (posEcranXPerso > posEcranMax) {
            posEcranXPerso = -dimXtotal;
        }

        // 3)UTILISATION de la variable posEcran
        monPerso.style.left = posEcranXPerso + "px";
        monPerso.style.top = posEcranYPerso + "px";

       


         positionBras();


    }, 75);


    

}
let DX;
let DY;
function boucleImagePerso(nbx, dXt, nby, dYt){


    i++;
    if (i >= nbx) {
        i = 0;
    }

    DX = -dXt * i; 
    DY = -dYt * 0;

    monPerso.style.backgroundPosition = "" + DX + "px  " + DY + "px";
}
let dimmX;
let dimmY;
function boucleImage(nbx, dXt, nby, dYt, src){ 

    i++;
    if (i >= nbx) {
        i = 0;
    }

    dimmX = -dXt * i; 
    dimmY = -dYt * 0;
  
    src.style.backgroundPosition = "" + DX + "px  " + DY + "px";
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

   
    monBras.style.backgroundPosition = "" + DXB + "px  " + DYB + "px";
   
}


window.onload = init();




