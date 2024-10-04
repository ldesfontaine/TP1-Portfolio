# TP1 - Portfolio
## Desfontaine Lucas L3 MIAGE

[//]: # (Environement)
### Environement Testé
Le projet fonctionne sous :
- Linux Mint & LAMP
- Windows 11 & LARAGON

[//]: # (Installation)
### Installation
Pour installer le projet,
il suffit de cloner le projet dans un dossier de votre serveur web.
Sous Linux Mint, le dossier est /var/www/html. + modifier la conf apache /etc/apache2/sites-available/000-default.conf
Sous Windows, le dossier est C:\laragon\www  Laragon gere tout seul la conf apache & les Vhosts
```
git clone git@github.com:ldesfontaine/TP1-Portfolio.git
```

Ils suffit ensuite d'ouvrir votre navigateur et de taper l'adresse de votre serveur web ou 127.0.0.1 si vous etes en local.

[//]: # (Fonctionnement)


[//]: # (objectif du projet)
### Description du projet
Le projet est un portfolio qui permet de presenter mes projets et mes competences.
Il est composé de deux pages, une page d'accueil et une page "A propos".
La page d'accueil contient une liste de mes projets et une liste de mes compétences.
La page "A propos" contient une description de moi et de mon parcours.
Il y a mon contact en bas de la page Home.

[//]: # (Pourquoi ces choix)
### Pourquoi ces choix ?
Le HTML et CSS etant necessaire pour la structure et le style de la page,
j'ai choisi d'utiliser du Javascript pour rendre dynamique les projects et les competences et ajouter un peux de fun au project.
Comme nous travaillons uniquement sur du FRONT ma section contact est un simple mailto.
J'aurais en effet pu utiliser une api cote front pour le FORM mais bon on va attendre la decouverte du BACK.

[//]: # (architecture du projet)
### Architecture du projet
```
portfolio
│   assets
└───────img
└───────pdf
│   competence_card
└───────competence_card.js
│   project_card
└───────project_card.js
│   style
└───────about.css
└───────styles.css
└───────experience.css
│   index.html
│   about.html
│   experience.html
│   main.js
│   README.md

```

[//]: # (grille projet et competence)

## Language Utilisé
|  Type |           Langage            |                  Utilisation                   |
| :---: |:----------------------------:|:----------------------------------------------:|
| Front |          Javascript          | Pour rendre dynamique les projets & competence |
| Front  |             CSS              |  Le style pour que ca soit jolie + resposive   |
| Front  | HTML (c'est pas un language) |            Strucutre de la page web            |

### Particularité du projet
#### Les cards permettent de gerer dynamiquement les données de mes projets et de mes competences tous ca dynamiquement via JS.
#### J'utilise un de mes template CSS, avec des classes predefinies pour le style que j'applique directement dans le HTML (Le front c pas fun)
