---
title: "Data formats"
description: "Data Formats in OpenWines"
tags: data, work-in-progress
---

Being a semantic data project, OpenWines needed to choose a/more format(s) to handle the open data it exposes.

Semantic Data Models are currently represented using various data schemas, such as RDFa, Microformats, Microdata, RDF/JSON or JSON-LD.

Semantic data are eventually exposed via a [SPARQL endpoint](http://www.w3.org/wiki/SparqlEndpoints)

At the moment we are _thinking_ of:
- [JSON-LD](http://json-ld.org) as method of transporting Linked Data using JSON
- [Hydra](http://fr.slideshare.net/lanthaler/hydra-a-vocabulary-for-hypermediadriven-web-apis) as a vocabulary for Hypermedia-Driven Web API, and this page presents arguments of such choice.
- [Symfony2 + HydraBundle](https://github.com/lanthaler/HydraBundle) as an HATEOAS API endpoint


## The JSON-LD choice

- JSON-LD is a JSON-based Serialization for Linked Data. It represents graphs
- It is primarily intended to be a way to use Linked Data in Web-based programming environments, to build interoperable Web services, and to store Linked Data in JSON-based storage engines. Since JSON-LD is 100% compatible with JSON, the large number of JSON parsers and libraries available today can be reused.
- It is also designed to be usable as RDF, if desired, for use with other Linked Data technologies like SPARQL.
- It is designed to be usable directly as JSON, with no knowledge of RDF.
- JSON-LD is a concrete RDF syntax. JSON-LD document is both an RDF document and a JSON document and correspondingly represents an instance of an RDF data model. However, JSON-LD also extends the RDF data model to optionally allow JSON-LD to serialize Generalized RDF Datasets.
- People intending to use JSON-LD with RDF tools will find it can be used like any other RDF syntax.
- It is capable of serializing any RDF graph or dataset and most, but not all, JSON-LD documents can be directly interpreted as RDF.
- Even though JSON-LD serializes generalized RDF Datasets, it can also be used as a RDF graph source.
- A JSON-LD document serializes a generalized RDF Dataset, which is a collection of graphs.
- It can be used to express semantic data marked up in other linked data formats such as Turtle, RDFa, Microformats, and Microdata. These sections are merely provided as evidence that JSON-LD is very flexible in what it can express across different Linked Data approaches.

(source: [JSON-LD 1.0 W3C Recommendation](http://www.w3.org/TR/json-ld/), 16 January 2014)

Here is a sample JSON-LD document:

These 2 samples exposes 2 persons identities, using different vcabulary contexts as refs:

```json
{
    "@context": "http://schema.org",
    "@type": "Winery",
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "47.195314",
        "longitude": " -1.292487"
    },
    "name": "Domaine Jean-Luc VIAUD",
    "sameAs": "http://www.domainejeanlucviaud.fr/"
},
{
    "@context": {
        "name": "http://xmlns.com/foaf/0.1/name",
        "homepage": {
            "@id": "http://xmlns.com/foaf/0.1/workplaceHomepage",
            "@type": "@id"
        },
        "Person": "http://xmlns.com/foaf/0.1/Person"
    },
        "@id": "https://www.erobertparker.com",
        "@type": "Person",
        "name": "Robert Parker",
        "homepage": "https://www.erobertparker.com"
}
```


## RESTful, HATEOAS API Vs SPARQL endpoints

> Just as public SQL endpoints are uncommon nowadays, public SPARQL endpoints are not expected to become widespread in the near future.
> This is because it is considerably more expensive to expose SQL or SPARQL endpoints than easier-to-optimize RESTful service interfaces.

(source : [Third Generation Web APIs - Bridging the Gap between REST and Linked Data](http://www.markus-lanthaler.com/research/third-generation-web-apis-bridging-the-gap-between-rest-and-linked-data.pdf))

Exposing a Semantic ressources using a SPARQL endpoint would mean setting up a not a widely spread kinfd of software. We assume choosing an Hypermedia-Driven Web API as a better endpoint, offering the possibilities of a Linked Data based information architecture.

We are actually studying the opportunity of adopting Hydra Core Vocabulary as a vocabulary for an Hypermedia-Driven Web API.

Some refs:

- [Hydra Community Group](http://www.hydra-cg.com/)
- [The Hydra Community Group at W3C](https://www.w3.org/community/hydra/)
- [The JSON-LD W3C Recommendation](http://www.w3.org/TR/json-ld/)
- [The HYDRA tooling & implementations](http://www.hydra-cg.com/#tooling)

Hydra architecture style is not a definitive choice: it's our actual intuition, and we're open to suggestions.
