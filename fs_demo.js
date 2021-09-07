// Démonstration de la librairie fs (file system)
// - lecture d'un fichier
// - renommmer un fichier
// - vérification de la présence/lecture/écriture d'un fichier/dossier
// Auteur : JBV
// 7 septembre 2021

const fs = require('fs');
const path = require('path');

//pour lire le contenu d'un fichier
    /* fs.readFile(
        path.join(__dirname, 'data', 'data.txt'),
        'utf-8', 
        (err, data) => {
            if (err) throw err;
            console.log(data);
        }
    );

    

//pour renommer un fichier...
    fs.rename(
        path.join(__dirname, 'data', 'data.txt'),
        path.join(__dirname, 'data', 'nouveauNom.txt'),
        (err) => {
            if (err) throw err;
            console.log('Le fichier a été renommé!!');
        }
    );

    */

    let nomFichier = path.join(__dirname, 'data', 'data.txt');
    let nomDossier = path.join(__dirname, 'data');
    fs.access( nomDossier, fs.constants.R_OK, err => {
        if (err)
            console.log(`Le dossier "${nomDossier}" n'est pas lisible ou n'existe pas`);
        else
        console.log(`Le dossier "${nomDossier}" existe et est lisible`);
    });

    fs.access( nomFichier, fs.constants.R_OK, err => {
        if (err)
            console.log(`Le fichier "${nomFichier}"  n'est pas lisible ou n'existe pas`);
        else
        lectureFichier(nomFichier);
    });


    console.log('Fin du programme');

function lectureFichier(nomFichier) {
    console.log('Le fichier existe et voici son contenu:');
        //pour lire le contenu d'un fichier
            fs.readFile(
                nomFichier,
                'utf-8',
                (err, data) => {
                    if (err) throw err;
                    console.log(data);
                }
            );    
}