## Multi-tælleren @unplugged
![Image Description](https://newgamedk.github.io/skridt-taeller/intro.png)
![Image Description](https://newgamedk.github.io/skridt-taeller/help.png)

## Slet blokkene
* `||basic.når programmet starter||` 
* `||basic.for altid||`

## Ved ryst
* Find blokken `||input.på ryst||`. 
* **TIP: Find blokken ved at trykke på -->** `||input.på ryst||`
```blocks
input.onGesture(Gesture.Shake, function () {
})
``` 

## Tælle-variablen
Opret en variabel, til at tælle antalRyst skridt med. Kald den `||variables:antalRyst||`

## Sæt tælle-variablen
Når skridttælleren rystes, skal den tælle et skridt. Du skal altså lægge 1 til `||variables:antalRyst||`. 
* Find blokken `||variables: sæt||` og træk den ind i  `||input.på ryst||`    
* Find blokken `||math:0 + 0||` og træk den ind i `||variables: sæt||` 
* Find blokken `||variables:antalRyst||` og træk den ind i `||variables: sæt||`
* Udfyld så koden laver regnestykket: 

`||variables:antalRyst||` = `||variables:antalRyst||` + 1
 
```blocks
input.onGesture(Gesture.Shake, function () {
    antalRyst = antalRyst + 1
})
```

## Vis talte ryst
Find blokken `||basic.vis nummer||`. Indsæt variablen `||variables:antalRyst||` i `||basic.vis nummer||`

```blocks
input.onGesture(Gesture.Shake, function () {
    antalRyst = antalRyst + 1
    basic.showNumber(antalRyst)
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
* Sæt `||variables:antalRyst||` = 0

```blocks
input.onButtonPressed(Button.A, function () {
    antalRyst = 0
})
```

## Tillykke!
Nu er du færdig med din kode. Du kan nu afprøve om du kan: 
* Let: Tjekke om den tæller når du ryster den?
* Let: Undersøge hvor meget den skal rystes før den tæller?
* Mellem: Hvis du finder tidspunkter hvor den ikke tæller, kan du så svare på hvorfor du tror det? 
* Mellem: Prøve at sætte flere @boardname@ på den samme person, forskellige steder på kroppen
* Svær: Bygge en holder til din @boardname@ skridttæller.
* Svær: Finde på noget andet at bruge programmet til? Fx. hvor mange gange en dør bliver åbnet og lukket?`
* Svær: Tænk over om der mon er noget sted på rumstationen hvor den virker?