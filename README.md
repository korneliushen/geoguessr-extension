# Geoguessr-extension

Chrome extension med database og express server.

Med denne extensionen kan man enkelt starte et party i geoguessr og kjappere få deltakere inn i lobbyen. Istedenfor å måtte dele lenken  eller koden, så aktiverer leder av lobbyen extensionen og deltakere kan gå inn på (nettsted) for å bli med. 

### Installeringsprosess

Gå på chrome sin webstore og søk opp IMGG og installer extension derifra

### Hvordan bruke den

Leder av lobbyen er den som aktiverer extensionen, deltakere bruker ikke extensionen.

Gå inn på [geoguessr](https://www.geoguessr.com) og lag et party, deretter klikk på invite players 
![Illustrasjon av hvor man finner knapp](https://i.ibb.co/6Wx0Sm4/Screenshot-2024-04-10-at-13-22-42.png)


For å aktivere extension trykker man på extension som er oppe i det høyre hjørnet. Dette kan se litt annerledes ut avhengig av hvilken nettleser du bruker.

<code>Merk at du må være på invite players siden for at extension skal fungere</code>

![Illustrasjon over extension](https://i.ibb.co/sWqd9t1/Screenshot-2024-04-10-at-12-40-55.png)

Deltakere kan gå til [dette nettstedet]() for å bli med.

### Hvordan det fungerer og teknologier

I prosjektet brukes det javascript for chrome extensionen, express.js for server, Next.js i frontend og postgresql som database. 

##### Hva som skjer i bakgrunnen

* I det extension aktiveres/trykkes på vil lenken til party/lobbyen bli sendt til databasen via express serveren. 
* Frontend henter så den lenken som ble lagt til sist og viser den på nettsiden/games og sender deltaker videre til lobbyen. 
