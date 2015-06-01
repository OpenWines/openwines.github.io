---
title: Le modèle par l'observation (introduction)
description: Contexte, objectif et méthode
tags: data, data models
---

_Cet article est le premier d'une suite d'observations réalisées par Davide Usaï, où il détaille le processus 
par lequel ce projet propose une définition sémantique du vin, afin d'en tirer un modèle informatique._

- __[Contexte, objectif et méthode](le-modele-par-l-observation-0.html)__
- [Un aperçu, pour commencer](le-modele-par-l-observation-1.html)
- [Des bouteilles, leurs étiquettes](le-modele-par-l-observation-2.html)
- [Teneurs en sucre et en dioxyde de carbone](le-modele-par-l-observation-3.html)
- [Compréhension de la classification des vins](le-modele-par-l-observation-4.html)


## Contexte, objectif et méthode

_Dans cette série d'article Davide Usai y détaille sa méthode, fort de son expérience et de sa pratique professionnelle
dans le domaine de l'interopérabilité sémantique. L'approche de Davide est celle de l'observation qui aboutie à des définitions, 
c'est une approche terminologique. Cette approche complète heureusement une autre méthode, plus classique,
qui consiste à définir la sémantique du vin par une approche ontologique, en se raccrochant à des modèles pré-existants._

## Contexte & objectif

La première édition de l’événement Hackagriculture a eu lieu à Nantes le 21-22 mars 2015. OpenWines était un des projets présentés qui a fédéré autour de lui une équipe initiale à laquelle s’ajoutent des contributeurs avec le temps. OpenWines se fixe comme objectif de construire un entrepôt de données concernant le secteur du vin de France et d’ailleurs. Un des éléments clés du projet c’est que les données seront distribuées sous licence Odbl.
Etant OpenWines un projet de dataset, il faut comme tout projet touchant aux données, réfléchir à l’organisation de ces dernières dans un modèle partagé.
Ce document a pour objectif de décrire la démarche et l’état du projet dans ce sens.

## La méthode

Parmi les méthodes d’analyse existantes, celle qui me semblait la plus intéressante est celle qui passe par l’observation hypertextuelle des objets que l’on voit, que l’on peut toucher. Cette méthode consiste à décrire un objet qui sert comme point de départ. La description contient des termes qui servent à décrire  l’objet au niveau d’abstraction que l’on a choisi. Les termes peuvent se situer au niveau juste en dessus ou en dessous par rapport à l’objet observé. Ces termes seront le point de départ d’une nouvelle observation. La direction que j’ai choisi c’est d’aller du haut vers le bas. Le point de départ devrait donc être « la bouteille de vin ». La bouteille étaient juste le conditionnement d’un produit nous pouvons partir directement du breuvage, le vin. Ceci dit, le conditionnement sera lui aussi un élément pris en compte mais cela dans un deuxième temps. 
Un des objectifs du modèle finale est d’être exhaustif, un autre est celui d’être simple. Un modèle exhaustif peut être relativement simple à réaliser si l’on se met des limites. En revanche, il y a souvent le problème que le modèle est d’emblée compliqué donc difficile à comprendre, à partager. Il ne faut se surprendre si l’analyse peut être parfois compliquée. C’est souvent une analyse lourde qui porte à produire un modèle simple.
Nous aborderons sans doute des concepts que nous ne maitrisons pas, ou pas très bien, sur lesquels il faudra surement y revenir. Compte tenu de l’organisation de ce projet nous procéderons par séances de travail répétitives. Chaque séance sera donc précédée de la date et d’un titre et du contributeur. Cette organisation a au moins deux avantages : d’une part il permet à chacun de contribuer à sa manière à l’évolution du modèle par l’observation selon ses envies et son temps, d’autre part le document garde l’historique de nos évolutions. L’inconvénient c’est qu’il ne présente pas de manière directe l’état de l’analyse.
Ceci est pour le moment surtout un document à usage interne. Si l’on souhaite un document destiné à des utilisateurs finaux d’OpenWines, il faudra réfléchir à un document classiquement organisé à chapitres thématiques.


