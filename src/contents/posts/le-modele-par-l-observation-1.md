---
title: Le modèle par l'observation - 1
description: Un aperçu, pour commencer
tags: data, data models
---

_Cet article est le premier d'une suite d'observations réalisées par Davide Usaï, où il détaille le processus 
par lequel ce projet propose une définition sémantique du vin, afin d'en tirer un modèle informatique._

- [Contexte, objectif et méthode](le-modele-par-l-observation-0.html)
- __[Un aperçu, pour commencer](le-modele-par-l-observation-1.html)__
- [Des bouteilles, leurs étiquettes](le-modele-par-l-observation-2.html)
- [Teneurs en sucre et en dioxyde de carbone](le-modele-par-l-observation-3.html)
- [Compréhension de la classification des vins](le-modele-par-l-observation-4.html)

## Un aperçu, pour commencer

__14/04/2015__

- Objectif : un aperçu, pour commencer
- Contributeur : Davide Usai

Je souhaite consacrer cette première séance à la découverte de ce monde. Tout d’abord ce quoi le vin. D’après l’OIV, l’Organisation International de la Vigne et du Vin, voici une définition issue du Code International des Pratiques Œnologiques :

>« Le vin est exclusivement la boisson résultant de la fermentation alcoolique complète ou partielle du raisin frais, foulé ou non, ou du moût de raisin. Son titre alcoométrique acquis ne peut être inférieur à 8,5% vol. »

Déjà cette définition, courte et simple, me donne des informations qui sont nouvelles pour moi :

- Je dois approfondir ce qui semble être une particularité du monde de la vinification ; le fait que le vin puisse être fait en utilisant soit du raisin frais soit du moût de raisin,
- Le titre alcoométrique acquis ne peut pas être inférieur à 8,5%.

Encore dans le Code International :

>«  Toutefois, compte tenu des conditions de climat, de terroir ou de cépage, de facteurs qualitatifs spéciaux ou de traditions propres à certains vignobles, le titre alcoométrique total minimal pourra être ramené à 7% vol. par une législation particulière à la région considérée.»

A ce sujet, demander à l’équipe si éventuellement il y a quelqu’un qui est intéressé à voir comment l’on calcule cette valeur en utilisant un ébullioscope ébulliomètre de Malligand. 

L’on poursuit cette découverte en appliquant la méthode.

__Raisin frais :__

> Le fruit mûr de la vigne.

On verra par la suite qu’il existe plusieurs raisins.

__Moût de raisin :__

> Produit liquide obtenu à partir du raisin frais, soit spontanément, soit par les procédés physiques tels que : foulage (*), égrappage, éraflage ou dérâpage (*), égouttage(*), pressurage (*).

On verra par la suite qu’il existe plusieurs moûts mais, tous de raisin.

Remontons d’un cran pour retourner au vin, ou aux vins car il en existe plusieurs.

Les différentes caractéristiques des vins permettent leur classification et leur codification. Pour commencer, prenons les deux premiers caractéristiques qui sont la base pour créer les premières grandes familles :

- Teneur en sucre
- Teneur en dioxyde de carbone

__Teneur en sucre__

La teneur en sucre tient en compte des quantités présentes de glucose plus celles de fructose. L’unité de mesure est g/l.
Selon la valeur, le vin est dit :

- Sec
- Demi-sec
- Demi-doux
- Doux

__Teneur en dioxyde de carbone__

L’unité de mesure est g/l.

Selon la valeur, le vin est dit :

- Tranquille
- Pétillant

Il y a une légère superposition des deux « fenêtres » ce qui fait qu’un vit peut être tranquille et pétillant. Toutefois, l’on verra plus tard, l’élaborateur a l’obligation au choix d’une de deux mentions.

Je décide d’arrête ici cette séance de découverte.

__Observations :__

- J’ai identifié deux attributs qui permettent de faire une première différenciation des vins,
- Ces deux attributs ce sont des décimaux et l’unité de mesure est la même. g/l, qui n’est pas une unité du SI compte tenu il contient l pour Litre,

Deux  dictionnaires qui contiennent une liste de valeurs possibles. Ces dictionnaires sont ainsi structurés:

- Un libellé
- Une valeur min, qui peut être vide
- Valeur max, qui peut être vide


