## Rum-skridt-tæller
Nu skal du lave en skridttæller med din @boardname@. 
* Følg med her, så er koden klar om lidt! :-) 
* Du kan eventuelt se videoen [her](http://example.com "testvideoen") for en gennemgang af denne tutorial.
* Start med at slette de to blå blokke: "når programmet starter" og "for altid".

## Ved ryst
Skridttælleren virker ved at registrere når @boardname@ bliver rystet. Start derfor med at finde en `||input.på ryst||` blok. 

* Du kan få et hint ved at trykke på ledetråd knappen. 

```blocks
input.onGesture(Gesture.Shake, function () {
})
``` 

## Tælle-variablen
Derudover skal du oprette en variabel, til at tælle antal skridt med. Kald den `||variables:antalSkridt||`. Du behøver ikke trække den ind endnu.

## Sæt antalSkridt
Når skridttælleren rystes, skal den tælle et skridt. Du skal altså tage variablen `||variables:antalSkridt||` og lægge 1 til. Det kan du gøre med en matematikblok, og lave regnestykket `||variables:antalSkridt||` = `||variables:antalSkridt||` + 1

* Du kan få et hint ved at trykke på ledetråd knappen. 

```blocks
input.onGesture(Gesture.Shake, function () {
    antalSkridt = antalSkridt + 1
})
```

## Vis antal skridt
Find blokken `||basic.vis nummer||` og indsæt den. Indsæt variablen `||variables:antalSkridt||` i `||basic.vis nummer||`

* Du kan få et hint ved at trykke på ledetråd knappen. 
```blocks
input.onGesture(Gesture.Shake, function () {
    antalSkridt = antalSkridt + 1
    basic.showNumber(antalSkridt)
})
```

## Nulstil skridttælleren
Det er smart at kunne nulstille skridttælleren. Det gør du ved at sætte variablen `||variables:antalSkridt||` = 0

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
* SVÆR: Bygge en holder til din @boardname@ skridttæller.
* SVÆR: Finde på noget andet at bruge programmet til? Fx. hvor mange gange en dør bliver åbnet og lukket?`
* SVÆR: Tænk over om der mon er noget sted på rumstationen hvor den virker?