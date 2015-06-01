---
title: Le modèle par l'observation - 2
description: Des bouteilles, leurs étiquettes
tags: data, data models
---

_Cet article est le premier d'une suite d'observations réalisées par Davide Usaï, où il détaille le processus 
par lequel ce projet propose une définition sémantique du vin, afin d'en tirer un modèle informatique._

- [Contexte, objectif et méthode](le-modele-par-l-observation-0.html)
- [Un aperçu, pour commencer](le-modele-par-l-observation-1.html)
- __[Des bouteilles, leurs étiquettes](le-modele-par-l-observation-2.html)__
- [Teneurs en sucre et en dioxyde de carbone](le-modele-par-l-observation-3.html)
- [Compréhension de la classification des vins](le-modele-par-l-observation-4.html)

## Des bouteilles, leurs étiquettes

__22/04/2015__

- Objectif : des bouteilles, leurs étiquettes
- Contributeur : Davide Usai

Faisons maintenant un exercice en partant de l’observation d’une étiquette. Quelles sont les informations que l’on peut y retrouver ?

![mpo1.png](/assets/images/posts/mpo1.png)

Il y a un certain nombre d’informations de différentes natures qui sont transmises au travers de l’étiquette :

- Des données du domaine œnologique, par exemple une appellation,
- Des données administratives, par exemple une adresse,
- Des données de domaine de la propriété intellectuelle, par exemple le logo

Parcourons l’ensemble du haut vers le bas :

__La localisation géographique de production__

Produit de France

__Année de production__ (appelé millésime sous certaines conditions)

1989

__Désignation fantaisiste du lieu de production__

Château La Tomaze

__Une représentation graphique__

Le beau château

__Désignation du produit__

Coteaux du Layon Rablay

__Désignation de l’appellation d’origine__

Appellation Coteaux du Layon Rablay Controlée

__Information supplémentaire concernant la logistique de production__

Mis en bouteille au château 

__Raison sociale et adresse__

Vignoble Lecointre 49380 Champ sur Layon – France

__Titre alcoométrique__

13% vol.

__Volume du produit contenu__

750 ml

__Information non identifiée__

LCR80

__Information rappelant la présence de sulfites dans une concentration supérieure à 10 mg/l__

Contains sulfites

J’arrête ici cette séance.

Observations :

- L’on retrouve la notion d’appellation d’origine
- L’information comme quoi ce vin est produit en France nous laisse deviner que cela est important dans un contexte d’import/export. Pour des raisons d’interopérabilité c’est probablement une des codifications ISO qui est utilisée pour identifier la zone géographique
- La désignation du produit rappelle des mots de l’appellation d’origine. Il me semble d’avoir lu quelque part que cela est obligatoire par la législateur européen
