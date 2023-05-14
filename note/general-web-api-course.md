Terminologie : REQ = Requête (client), RES = Response (du backend).  
Note d'instructions sur le projet à la fin.

# API
API permet une interface entre deux terminaux.
Souvent les données sont retournées au format JSON parfois sous format XML.  

# API REST
***REpresentation State Transfer***. C'est un standard de construction des APIs.
Le rôle est de créer une liste d'URI (ressemble à une URL), ***Uniform Resource Identifier***.  *Insérer une définition*
  
Une API doc c'est une liste d'URIs. Par exemple : Weather forecast API ou PokeAPI une api pokémon.  

Le client désigne la machine qui recherche les ressources API. 

### Côté client  
La requête HTTP auprès du back avec un format comme :  
> VERB /resource  

***Headers*** contient les métadonnées de la requête HTTP. Application/JSON
> *Accept*  
> *Authorization* : via token par exemple. Durabilité du token joue sur la sécurité via un renouvellement régulier.  
> *Body*  

#### Les VERB
>GET  
>POST  
>PATCH  
>DELETE  
>PUT  
>...  
  
API endpoint ... *à définir*  
  
La réponse d'une requête HTTP avec un status code :  
- 2xx : implique une réussite
- 3xx : lié  aux redirection
- 4xx : un problème lié au client, problème de communication avec le back
- 5xx : crash de l'API (problème du serveur par exemple), le développeur aurait pu par exemple catch les erreurs pour éviter que le client voit que le problème vient de l'API  

UNe API REST est **STATELESS**, c'est à dire que les terminaux ne doivent pas partager d'informations. Une ressource c'est une requête sans réel dialogue, soit une récupération sans stockage d'information de transition. Les requêtes sont indépendantes et selon microsoft, les requêtes peuvent arriver dans n'importe quel ordre.  


### Structure Web historique :  
>LAMP
>- Linux
>- Apache
>- Mysql
>- Php  

### Les nouvelles structures web :
>MEAN
> - MongoDB
> - Express
> - Angular
> - Node  

>MERN
> - MongoDB
> - Express
> - Next
> - Node  


# Instruction sur le projet
En .md, citer les sources.

En logiciel outil pour tester les API, on le droit à : Postman, Insomnia. Si on est à l'ancienne CURL.  

Utilisation de Express