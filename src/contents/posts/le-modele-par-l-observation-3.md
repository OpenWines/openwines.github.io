---
title: Le modèle par l'observation - 3
description: Teneurs en sucre et en dioxyde de carbone
tags: data, data models
---

_Cet article est le premier d'une suite d'observations réalisées par Davide Usaï, où il détaille le processus 
par lequel ce projet propose une définition sémantique du vin, afin d'en tirer un modèle informatique._

- [Contexte, objectif et méthode](le-modele-par-l-observation-0.html)
- [Un aperçu, pour commencer](le-modele-par-l-observation-1.html)
- [Des bouteilles, leurs étiquettes](le-modele-par-l-observation-2.html)
- __[Teneurs en sucre et en dioxyde de carbone](le-modele-par-l-observation-3.html)__
- [Compréhension de la classification des vins](le-modele-par-l-observation-4.html)

## Teneurs en sucre et en dioxyde de carbone

__28/04/2015__

- Objectif : les deux premiers dictionnaires, teneur en sucre et en dioxyde de carbone
- Contributeur : Davide Usai

Il s’agit de créer deux tables avec les libellés et les valeurs de frontière.
Teneur en sucre

Une représentation graphique d’un modèle simplifiée peut être la suivante :

![mpo2.png](/assets/images/posts/mpo2.png)

| Libellé       | > Vmin (g/l)  | <= Vmax (g/l) |
| ------------- |:-------------:| -------------:|
| Sec           | -             |     4         |   
| Demi-sec      | 4             |     12        |
| Demi-doux     | 12            |     45        |
| Doux          | 45            |     -         |


__Nota bene :__

- Ce modèle simplifié ne tient pas compte du shift que l’on faire si l’on prend en compte la teneur en acidité totale, exprimée en grammes d’acide tartrique par litre,
- La frontière entre demi-doux et doux reste ambiguë car la valeur 45 est possible pour les deux mentions. Ceci-dit, j’ai l’impression d’être une analyse qui manque de précision. Ça me tente de faire un message à l’OIV.

__Teneur en dioxyde de carbone__

Une représentation graphique peut-être la suivante :

![mpo3.png](/assets/images/posts/mpo3.png)

| Libellé                   | => Vmin (g/l)  | < Vmax (g/l) |
| ------------------------- |:-------------:| -------------:|
| Tranquille                | -             | 3             |   
| Pétillant ou Tranquille   | 3             | 4             |
| pétillant                 | 4             | 5             |


Cette table ne permet pas de représenter avec précision une frontière car l’on doit faire un choix sur Vmax. Car Vmax=5 g/l pour un vin pétillant.

Je poursuis cette séance sur une tâche de traduction : comment l’on écrit ces différents libellés dans une autre langue ?

Juste pour commencer, je me fixe comme objectif l’italien d’Italie et l’anglais d’Angleterre.

__Teneur en sucre__

| fr-FR     | sec       | demi-dec      | demi-doux     | doux  |
| --------- | --------- | ------------- | ------------- | ----- |
| it-IT     | asciutto  | abboccato     | amabile       | dolce |
| en-GB     | dry       | medium dry    | medium        | sweet |

__Teneur en dioxyde de carbone__

| fr-FR     | tranquille            | pétillant    |
| --------- | --------- | --------- | ------------ |
| it-IT     | tranquillo (o fermo)  | frizzante    |
| en-UK     | still                 | sparkling    |

J’arrête ici cette séance.

__Observations :__

- En faisant des recherches je trouve d’autres sources, aussi légitimes que celle de l’OIV, qui ne présentent pas les choses de la même manière. Notamment, la Commission Regulation 607/2009 de la Communauté Européenne (fichier CELEX-32009R0607-EN-TXT.pdf).
- Notamment, le document ci-dessus montre une manière différente d’aborder la classification par ces deux teneurs. Il semblerait que les intervalles d’une teneur change au regard de la valeur de l’autre. Vraiment très intéressant
- Je propose à Ronan de faire un mail à l’OIV concernant l’ambiguïté de la frontière 45 g/l pour la définition complémentaire « teneur en sucre »
- Il existe un certain nombre de synonymes pour les appellations des intervalles. Pour une source de donnée, il existe probablement un terme par défaut et d’autres qui sont d’usage
- Je me rends compte qu’il n’est pas possible d’avoir une teneur en dioxyde de carbone supérieure à 5 g/l. Une question de culture générale est : est-ce que après ce seuil il ne s’agit plus de vin et cela devient un autre produit où celle-ci est la concentration la plus grande que l’on peut absorber ? Il faut que je demande à mes collègues médecins
- Il n’est pas important de résoudre ces ambiguïtés pour pouvoir poursuivre notre travail d’analyse. Au fait, il n’y a rien de bloquant car on est pour le moment sur un détail d’un dictionnaire.