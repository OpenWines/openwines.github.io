---
title: "Datasets"
description: "Open Data Sets we produce"
tags: data, work-in-progress
---

## French "Loire-Atlantique" department Wine Appellations

Geojson files set for IGP/AOC within French "Loire-Atlantique" department (Loire vineyards, France):

- [Muscadet](https://github.com/OpenWines/Open-Data/blob/master/dept_44/aoc_2341.geojson)
- [Muscadet Coteaux de la Loire](https://github.com/OpenWines/Open-Data/blob/master/dept_44/aoc_2342.geojson)
- [Muscadet Sèvre et Maine](https://github.com/OpenWines/Open-Data/blob/master/dept_44/aoc_195.geojson)
- [Muscadet Sèvre et Maine Le Pallet](https://github.com/OpenWines/Open-Data/blob/master/dept_44/aoc_2335.geojson)
- [Muscadet Sèvre et Maine Gorges](https://github.com/OpenWines/Open-Data/blob/master/dept_44/aoc_2334.geojson)
- [Muscadet Sèvre et Maine Clisson](https://github.com/OpenWines/Open-Data/blob/master/dept_44/aoc_2332.geojson)
- [Muscadet Côtes de Grandlieu](https://github.com/OpenWines/Open-Data/blob/master/dept_44/aoc_194.geojson)
- [Coteaux d'Ancenis](https://github.com/OpenWines/Open-Data/blob/master/dept_44/aoc_2175.geojson)
- [Gros Plant du Pays nantais](https://github.com/OpenWines/Open-Data/blob/master/dept_44/aoc_2171.geojson)

### Démo : Coteaux d'Ancenis

Le __Coteaux d'Ancenis__ est un vin d'Appellation d'Origine Contrôlée produit à cheval sur une partie de la Loire-Atlantique et du Maine-et-Loire.

Il s'agit surtout de vins rouges, ainsi que de quelques blancs et rosés secs. Cette appellation VDQS depuis le 22 janvier 1954 est devenue AOC le 7 décembre 2011

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.css" />
<div id="map" style="width: 100%; height: 400px"></div>
<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
<script>
var map = L.map('map').setView([47.3, -1.3], 10);

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i875mjb7'
    }).addTo(map);

    $.getJSON("https://rawgit.com/OpenWines/Open-Data/master/dept_44/aoc_2175.geojson", function(response) {
        console.log("response", response);
        var geojsonLayer = new L.GeoJSON(response);
        geojsonLayer.addTo(map);    
    });
</script>

More:

- Available format: GeoJSON
- Sources & download: [OpenWines/Open-Data on Github](https://github.com/OpenWines/Open-Data/tree/master/dept_44)
- Author : [Thomas Gratier](https://github.com/ThomasG77)
- License: [ODbL](http://opendatacommons.org/licenses/dbcl/1.0/)

## OpenWine's Nantes Appellations map ([uMap](https://umap.openstreetmap.fr/en/map/openwine_33763#10/47.1743/-1.4989))

<iframe width="100%" height="600px" class="embed-responsive-item" src="https://umap.openstreetmap.fr/en/map/openwine_33763?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe><p><a href="https://umap.openstreetmap.fr/en/map/openwine_33763" class="btn btn-default">See full screen<span class="glyphicon glyphicon-resize-full"></span></a></p>

- See it on OpenStreetMap.fr: [fullscreen uMap](https://umap.openstreetmap.fr/en/map/openwine_33763#10/47.1743/-1.4989)
- Sources & raw data download: [OpenWines/Open-Data on Github](https://github.com/OpenWines/Open-Data/tree/master/dept_44)
- Author : [Thomas Gratier](https://github.com/ThomasG77)
- License: [ODbL](http://opendatacommons.org/licenses/dbcl/1.0/)

## Carte de flux d'export de vins en valeur en Mars 2015 entre la France et les autres pays

- [Démo (rawgit)](https://rawgit.com/ThomasG77/datadouane_raw/master/flux_vin_export_mars_2015.html)

Réalisation: Thomas Gratier ([@ThomasG77](https://twitter.com/ThomasG77)) dans le cadre de l'[Open Data Camp sur les données de la douane](https://www.etalab.gouv.fr/event/open-data-camp-sur-les-donnees-de-la-douane), à titre professionnel pour [WebGeoDataVore](http://webgeodatavore.net/) et à titre d'engagement personnel pour [OpenWines](http://openwines.eu/))

- Source : [Thomas on Github](https://github.com/ThomasG77/datadouane_raw)
- License: [Ask Thomas!](https://twitter.com/ThomasG77)

<iframe width="100%" height="600px" class="embed-responsive-item" src="https://rawgit.com/ThomasG77/datadouane_raw/master/flux_vin_export_mars_2015.html"></iframe><p><a href="https://rawgit.com/ThomasG77/datadouane_raw/master/flux_vin_export_mars_2015.html" class="btn btn-default">See full screen<span class="glyphicon glyphicon-resize-full"></span></a></p>
