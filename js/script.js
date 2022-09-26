// Fichier JS - Portefolio Chloé Assassin - Développement et Intégration Web

let maxWidth = $(window).width();

//CV PROGRESSBAR JQUERY UI
    $( function() {
        $( "#Anglais" ).progressbar({
        value: 89
        });
    } );
    $( function() {
        $( "#Html" ).progressbar({
        value: 90
        });
    } );
    $( function() {
        $( "#Css" ).progressbar({
        value: 92
        });
    } );
    $( function() {
        $( "#Js" ).progressbar({
        value: 75
        });
    } );
    $( function() {
        $( "#Php" ).progressbar({
        value: 55
        });
    } );
    $( function() {
        $( "#Mysql" ).progressbar({
        value: 50
        });
    } );
    $( function() {
        $( "#Photoshop" ).progressbar({
        value: 82
        });
    } );

//FORMULAIRE DE CONTACT
    $( function() {
        var tooltips = $( "[title]" ).tooltip({
        position: {
            my: "left top",
            at: "right+5 top-5",
            collision: "none"
        }
        });
    } );

    function envoi(){
        alert("Merci pour votre message! Cependant, la base de donnée n'est pas encore connectée (cela ne devrait pas tarder). Mes coordonnées se trouvent toutefois dans mon curriculum vitae. En espérant avoir de vos nouvelle très vite! ")
    };

//ANIMATION DES PIXELS COLORÉS EN BAS DE PAGE
    $('footer').hover(function(){
        let carre = $('#carrerouge');
        carre.animate({left : maxWidth}, 1000);
        carre.animate({left : 0}, 2000);
    });

    $('footer').hover(function(){
        let carre = $('#carreorange');
        carre.animate({left : maxWidth}, 2000);
        carre.animate({left : 0}, 1000);
    });

    $('footer').hover(function(){
        let carre = $('#carrejaune');
        carre.animate({left : maxWidth}, 1500);
        carre.animate({left : 0}, 1500);
    });
    $('footer').hover(function(){
        let carre = $('#carrerose');
        carre.animate({left : maxWidth}, 2200);
        carre.animate({left : 0}, 800);
    });
    $('footer').hover(function(){
        let carre = $('#carreviolet');
        carre.animate({left : maxWidth}, 800);
        carre.animate({left : 0}, 2200);
    });
    $('footer').hover(function(){
        let carre = $('#carrebleu');
        carre.animate({left : maxWidth}, 1200);
        carre.animate({left : 0}, 1800);
    });
    $('footer').hover(function(){
        let carre = $('#carrevert');
        carre.animate({left : maxWidth}, 1800);
        carre.animate({left : 0}, 1200);
    });