---
title: "Meetings minutes"
description: "Minutes of our last meetings"
tags: work-in-progress
---


## Réunion 22 septembre 2015 (Skype confcall)

Merci à Anthony d'avoir lancé l'idée d'une confcall pour faire le point sur le projet. Le rdv avait été diffusé sur Google Groups. Le prochain rdv fera l'objet d'une annonce à part.

### Présents

- Davide U.
- Ronan G. (rapporteur)
- Anthony F.
- Thomas G.


### Ronan (bilan des derniers mois)

- rencontre avec le syndicat de défense d’AOC des Pays de la Loire cet été, à l'initiative de Yannick. Nous avons convenu de nous revoir (d’ici fin 2015 ?) pour évaluer ensemble quelles données chez eux pourraient être libérées
- les chantiers sur la modélisation (cf. ci-dessous) : on arrive à des brouillons de modèles pour le vin, le cépage, l’appellation et les vignerons. C’est un peu la condition pour commencer à produire des jeux de données qui suivent une modélisation minimale.
- Contacts en cours avec OpenFoodFact (cf. le proto d'OCR), contacts réguliers avec LiberTIC, et prochaine participation de Thomas, Ronan et Davide à l'operation-libre.org à Chéméré le week-end prochain.

Conclusion : ca avance doucement, c'est un projet de longue haleine, donc pas un rythme de startup. Chacun donne de son temps selon ses disponibilités.

### Thomas (SIG, infocartographie)

Pour Chéméré, on pourrait

- Réaliser un calage sur les cartes proposées par les Archives Départemental. Pour cela il faut il prendre des photos des plans aux Archives (suggestion émise par Claire de LiberTIC). Thomas pourrait passer aux Archives, mais aucune garantie
- Faire une fiche sur le Gros Plant sur Wikipedia (manquante, dixit Davide)
- Faire des contours de parcelles, mais c’est un peu un problème juridique car il n’y a qu’un seul exploitant, et cela aurait pour effet de révéler son patrimoine personnel, ce qui n’est pas autorisé (cf. l’anonymisation des données)
- Rencontrer l’unique exploitant de Chéméré et lui exposer nos modèles et réflexions, pour validation

Thomas relance l'idée d'une demi-journée technique sur le thème de la carto et des sets d'open-data existants. Ronan lui propose de partager en interne l'accès à une instance PostgreSQL pour que chacun puisse travailler (contribuer, nettoyer, qualifier, etc.) sur des données, même à l'état de brouillon.

### Davide (sur la modélisation)

- Après m'être occupé de la terminologie sur les bouteilles et des cépagnes, je compte m'occuper des appellations.
- Je définis mes modèles sémantiques dans un logiciel adhoc, [Sparx System](http://www.sparxsystems.fr/) mais je peux préparer un export dans un format ouvert compatible [modelio.org](https://www.modelio.org)
- Je suis en relation avec un éditeur de [PIM](https://fr.wikipedia.org/wiki/Product_information_management) (non open-source) présent dans les Pays de la Loire, travaillant avec les grandes surfaces, qui pourrait nous partager sa nomenclature sur le domaine du vin.
- Davide est par ailleurs motivé pour exporter l'idée de Chéméré en Italie (en Sardaigne ?!). Ronan est méga partant. Y'a plus qu'à trouver des sous pour le billet d'avion.

### Anthony (qui part participer au VinoCamp à Londre)

Anthony représentera notre groupe à Londres, Ronan lui donne les clefs du compte Twitter s'il souhaite communiquer pour OpenWines durant l'évènement.
Anthony propose de refaire un point projet d'ici un mois, Ronan lance l'info sur GoogleGroups

Ronan a annoncé la participation d'Anthony à Vinocamp London [ici sur Twitter](https://twitter.com/openwines) et [là sur le forum de vinocamp](http://vinocamp.fr/forums/sujet/open-data-for-wines-vinocamp/)



## Réunion du 24 avril 2015 à Nantes (au Verre Bouteille)

### Présents :

- Davide U.
- Ronan G. (rapporteur)
- Samuel F.
- Thomas G.
- Yannick L.

### 1. Le site web

[Openwines.eu](http://openwines.eu) le site web avance : Sam et Ronan ont monté le site statique sur [Github Pages](https://pages.githb.com/),
les [sources sont sur sur notre compte Github](https://github.com/OpenWines/openwines.github.io).
C'est [`gulp`](http://gulpjs.com/) qui permet de transformer les fichiers markdown en pages HTML.
Sam souhaite plus de liberté, au moins pour le design de la page d'accueil, donc s'il est plus simple de faire de l'HTML que du markdown, on le fera. 


### 2. Propositions d'Anthony Faucogney au sujet des startups, et suite à donner

Comment remercier, récompenser un fournisseur de données, quel format de données convient le mieux :

Ronan reprend les points proposés par Anthony et les présente à l'équipe pour avis :

- "Coté license : ce qui est important (selon l'avis d'Anthnoy) c'est que le fournisseur puisse être informé d'une MAJ de sa donnée (correction et/ou ajout d'information connexe)" => Le fait de publier les données sur une plateforme publique d'open-data basée sur CKAN (comme par exemple [open-data.europa.eu](https://open-data.europa.eu)) pourrait permettre d'être notifié des modifications. Cela fait partie des fonctionnalités de CKAN mais on ne sait pas si cela est systématiquement mis en oeuvre. Un autre moyen pour les startups est de s'abonner ("Watch") sur Github au dépôt [github.com/OpenWines/Open-Data](https://github.com/OpenWines/Open-Data) pour être tenu au courant des modifications (commits) sur les données partagées. Un système de notifications plus élaboré, avec emails, reste à élaborer et à créer.
- "(Inciter) les startups à ouvrir ces données" => Ronan propose qu'Anthony rédige le contenu d'une page web dédiée à cette question : nous avions imaginé avec Sam de proposer sur la homepage du site 3-4 entrées en fonction du profil de l'internaute : "Vous êtes un particulier / un vigneron / une startup / une organisation professionnelle / une administration publique". La page "Vous êtes une startup" est celle qu'Anthony pourrait rédiger. Certains éléments pourraient également être repris dans notre projet de FAQ, il suffit de les rédiger au format "question / réponse" 
- "Coté format, le JSON me parait le mieux" => le format JSON-LD semble connaître un succès d'estime, c'est celui vers lequel nous nous dirigeons, le détail de ce choix proposé est [argumenté ici sur Openwines.eu](http://openwines.eu/data-models.html), avec plusieurs citations de la [Recommendation du W3C sur JSON-D 1.0](http://www.w3.org/TR/json-ld/).
- [La discussion en cours sur OpenWineFacts](http://fr.wiki.openfoodfacts.org/Projet:OpenWineFacts) (démarche créée au dernier [VinoCamp](http://vinocamp.fr/)) => Merci pour le lien ! J'ai soumis cela à Davide qui travaille sur une modélisation formelle. Il a déjà fait un compte-rendu de son travail, basé sur l'observation - j'espère pouvoir publier cela bientôt sur le site web, peut-être sous forme de posts de blog, car c'est pour Davide une démarche de recherche itérative 


### 3. Proposition de collaboration de Stéphane G. avec OpenFoodFacts France

Stéphane nous a parlé sur ce Google Group de la taxonomie (en catégories) qui organise les bouteilles de vin présentes sur le site d'OpenFoodFacts France.

Ronan propose que nous tenions informé OpenFoodFacts de nos travaux sur la modélisation et que nous leur soumettions nos premiers drafts, pour avoir leurs retours. Work in progress!


### 4. Yannick et Annaïg : Relation avec les organismes publics et professionnels

Yannick nous a fait un compte-rendu de la rencontre avec Romain Mayet, ingénieur technique au Syndicat de Défense du Muscadet SDAOC.

Ingénieur technique, Romain fait partie du personnel salarié du SDAOC Muscadet, il n'est donc pas responsable de la libération ou non des données.
Il se montre intéressé en particulier par notre travail de cartographie (il utilise des cartes papier pour gérer son travail sur l'AOC).
Romain s'est bien proposé de nous aider à mieux appréhender le milieu viticole et à rencontrer des professionnels susceptibles d'être des relais d'opinion.

Les autres organismes intéressants à rencontrer sont listés par Yannick. Ronan a proposé que Yannick et Annaïg se charge de nos relations publiques, avec comme objectifs

- se faire connaître et nouer des partenariats
- valider notre compréhension des données du vin, en particulier via le modèle de données que Davide établit
- récupérer des données sous une licence ODbL

Autres tâches que Yannick s'est proposée de réaliser pour le projet :

- référencer l'existant en Open data agricole (cf. son mail du 30 mars)
- transmettre à l'équipe son schéma des différents acteurs (format papier brièvement présenté ce vendredi)
- créer une FAQ sur quelques termes clefs du vin (déjà évoqué lors de notre réunion précédente aux Carafés), pour expliquer les termes utilisés dans les jeux de donnée, par exemple les distinctions entre « vin bio », « vin en biodynamie » et « vin naturel », comment lire une capsule, etc.
- inviter Romain à notre prochaine rencontre pour évaluer avec lui s'il est prêt à nous céder des données sous une licence ODbL. Intérêt : savoir par exemple s’il existe des produits hors AOC / IGP, par exemple ceux sous le label « produits de qualité », qui ne seraient connus que par les chambres d'agriculture
- organiser un plan de rencontre des différents organismes et partager avec l'équipe un compte-rendu de chaque rencontre


### 5. Où publier nos données, sous quelle licence, sous quel format ?

Pour la publication collaborative, Ronan propose d'utiliser Git dans la mesure ou nous pouvons ainsi assurer la traçabilité des contributions.
Pour la distribution, il propose de viser un site multilingue, une plateforme type CKAN déjà dédiée à l'open-data et qui, par système de moissonnage, est elle-même ré-indexée sur d'autres plateformes. Plutôt que [data.gouv.fr](https://www.data.gouv.fr/fr/) Ronan propose de viser [open-data.europa.eu/fr/data](https://open-data.europa.eu/fr/data) (s'il est possible de publier des données dessus) ou [publicdata.eu](http://publicdata.eu) (qui permet de s'y faire référencer).

Concernant la licence, Ronan et Thomas penchent pour l'ODbL, mais avant d'arrêter ensemble un choix de principe, Ronan doit faire un récap' des résultats du [sondage mis en ligne](http://openwines.eu/license.html#help-us-choose-the-best-open-data-license-for-openwines-) sur le site au sujet du choix de licence. Avis bienvenus.

Concernant le format des données, la question du JSON est en cours de réflexion, elle a été motivée par Ronan [sur cette page](http://openwines.eu/data-models.html), avis bienvenus

Concernant le format des documents de travail (question de Davide), Ronan et Davide proposent le format libre et ouvert [OpenDocument](http://fr.wikipedia.org/wiki/OpenDocument) (.odt, etc.) et à côté de cela un export PDF systématique, facilitant la lecture sur navigateur web. Ronan va faire un modèle de document avec en-tête et logo, à moins que quelqu'un veuille s'y coller.

### 6. Modélisation des données (Davide)

Davide tient une sorte de journal de son travail de modélisation, Ronan lui propose de transformer cela en post de blog sur le site.

Le résultat (la modélisation dans un format standard et ouvert, RDF ou JSON-LD) sera soumis sous la forme d'une RFC, pour avis, à OpenFoodFacts et à d'autres partenaires, par exemple une personne du LINA qui travaille sur le web sémantique.

Ronan a partagé à Davide plusieurs liens :

- [http://dbpedia.org/ontology/Wine](http://dbpedia.org/ontology/Wine)
- [http://linkeddata.org/](http://linkeddata.org/)
- [http://openwines.eu/data-models.html](http://openwines.eu/data-models.html)
- [http://fr.wiki.openfoodfacts.org/Projet:OpenWineFacts](http://fr.wiki.openfoodfacts.org/Projet:OpenWineFacts), cité par Anthony (que nous rencontrerons mardi soir)
- [http://www.w3.org/TR/owl-test/misc-000-guide](http://www.w3.org/TR/owl-test/misc-000-guide) : le vin est souvent pris en exemple pour expliquer le Web Ontology Language (WOL)
- [http://www.ksl.stanford.edu/projects/wine/explanation.html](http://www.ksl.stanford.edu/projects/wine/explanation.html) : une étude sur l'ontologie du vin


### 7. Proposition de partage de donnée provenant de Projet DOPMaps en Italie : 

Davide nous a partagé le souhait de [Carlo Zucca](https://www.linkedin.com/in/carlozucca), auteur d'une [cartographie des AOP en Italie](http://mangomap.com/maps/17547/DOP%20Maps%20-%20example%20-%20C.%20Zucca?preview=true#) (projet [DOPMaps](https://www.facebook.com/pages/DOPmaps/1452323921724004?sk=info&tab=page_info)) qui nous propose de partager ses données ([projet présenté ici](http://unless.altervista.org/produzioni-d-o-p/) en italien). Davide propose que Thomas rentre en contact avec Carlo (qui parle anglais).


### 8. Réflexions de Thomas au sujet des cartes que nous partageons 

La production des premières cartes des AOCs amène à quelques conclusions :

- on peut constater qu'une commune peut se voir attribuer jusqu'à 73 AOC ! Il n'est pas évident ni pertinent de représenter une telle superposition d'information
- la base de données des AOC par commune, de l'INAO, ne colle pas toujours avec la liste des communes recencées par l'INSEE : chaque année des communes disparaissent (elles fusionnent). Nous ne savons pas si les communes fusionnées se voient attribuées automatiquement ces mêmes AOC, ou pas.
- Thomas est réticent à mettre en ligne les contours des parcelles car ce serait faire concurrence à un service payant (le cadastre) et ce sont des données éventuellement impactées par des problématiques d’anonymisation, en particulier sur des communes très petites, où l’on peut savoir - dans le cas d’un seul producteur sur la commune, qui possède combien de terrain et produit combien d’hectolitres de vin. Il arrive, dans les jeux de données, que ces informations soient absentes (données marquées comme « non available ») et Davide conforme l'existence d'une "règle des 3 » équivalente en Italie : pas de données si 3 personnes physiques ou moins sont concernés par une statistiques. 
- Ce dernier point est peut-être à modérer : on parle en réalité de données concernant des personnes morales (des entités commerciales, comme un domaine) qui par ailleurs sont déjà disponibles via les déclarations de production faites aux Douanes et à d'autres organismes publiques, qui ne les anonymisent pas forcément. A creuser.

Thomas fait une proposition de scénario de navigation pour la superposition de couches, à valider sur une maquette qu'il se propose de produire :

- je survole les communes, je vois à droite la liste des AOC sur la commune
- au survol du tableau d’AOC sur la droite, on _highlight_ cette AOC sur la carte

Concernant les usages de ces données, Thomas se propose :

- à partir de la [base de données e-sprit](http://www.e-sprit.fr/le-projet-e-sprit/) sur les évènements touristiques, d’envisager des parcours touristiques par AOC
- de récupérer par exemple des [Tables de Nantes](http://www.lestablesdenantes.fr/) la liste des restaurateurs qui vendent des vins de Loire dans leur restaurant. L'intérêt : savoir où manger et boire des vins sans sulfites (problèmes des allergies) ou compatible avec ou tel ou tel régime, ou provenant de telle ou telle AOC.


### 9. Préparation de la présentation du 28 avril, lors de la restitution à Nantes Villes Comestible

Ronan va proposer une présentation d'ici mardi midi.