## Multi-tælleren
Nu skal du lave en skridttæller med din @boardname@. 
* Følg med her, så er koden klar om lidt! :-) 
* Du kan også se videoen [her](http://example.com "testvideoen") for en gennemgang af denne tutorial.

## Slet de to blå blokke
* `||basic.når programmet starter||` 
* `||basic.for altid||`

## Ved ryst
Skridttælleren virker ved at registrere når @boardname@ bliver rystet. 
* Find blokken `||input.på ryst||`  

```blocks
input.onGesture(Gesture.Shake, function () {
})
``` 

## Tælle-variablen
Opret en variabel, til at tælle antal skridt med. Kald den `||variables:antalSkridt||`

## Sæt tælle-variablen
Når skridttælleren rystes, skal den tælle et skridt. Du skal altså lægge 1 til `||variables:antalSkridt||`. 
* Find blokken `||variables: sæt||` og træk den ind i  `||input.på ryst||`    
* Find blokken `||math:0 + 0||` og træk den ind i `||variables: sæt||` 
* Find blokken `||variables:antalSkridt||` og træk den ind i `||variables: sæt||`
* Udfyld så koden laver regnestykket: 

`||variables:antalSkridt||` = `||variables:antalSkridt||` + 1
 
```blocks
input.onGesture(Gesture.Shake, function () {
    antalSkridt = antalSkridt + 1
})
```

## Vis antal skridt
Find blokken `||basic.vis nummer||`. Indsæt variablen `||variables:antalSkridt||` i `||basic.vis nummer||`

```blocks
input.onGesture(Gesture.Shake, function () {
    antalSkridt = antalSkridt + 1
    basic.showNumber(antalSkridt)
})
```

## Nulstil skridttælleren
* Find blokken `||input:når der trykkes på knap A||`. 

```blocks
input.onButtonPressed(Button.A, function () {
})
```

## Nulstil skridttælleren
* Find blokken `||variables: sæt||` og sæt den ind i `||input:når der trykkes på knap A||`
* Sæt `||variables:antalSkridt||` ind i `||variables: sæt||`  
* Sæt `||variables:antalSkridt||` = 0

```blocks
input.onButtonPressed(Button.A, function () {
    antalSkridt = 0
})
```

## Tillykke!
Nu er du færdig med din kode. Du kan nu afprøve om du kan: 
* Let: Tjekke om den tæller rigtigt?
* Let: Undersøge hvor meget den skal rystes før den tæller
* Mellem: Hvorfor tror du den ikke tæller helt rigtigt?
* Mellem: Prøve at sætte flere @boardname@ på den samme person, forskellige steder på kroppen
* Svær: Bygge en holder til din @boardname@ skridttæller.
* Svær: Finde på noget andet at bruge programmet til? Fx. hvor mange gange en dør bliver åbnet og lukket?`
* Svær: Tænk over om der mon er noget sted på rumstationen hvor den virker?