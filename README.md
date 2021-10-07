# Cours Typescript


## Notes

* ts-node command = combin tsc compiler and node; use it for compile and run your js file

## Lien utiles

* https://www.typescriptlang.org/docs/handbook/basic-types.html
* https://www.typescriptlang.org/docs/handbook/advanced-types.html
* https://www.typescriptlang.org/docs/handbook/utility-types.html

## Types annotations and Types inferences

* `annotations` => code we add to tell what type of value a variable refer to
* `inferences` => typescript try to figure out what type of value a variable refer to; works only if we declare and initialize our variable in one expression

## Types Definition

* npm install @types/node si on veut utiliser les packages préinstallés de node
* npm install @types/{nom_package} pour les packages externes

## Types

### primitives 
* `boolean`
* `number`
* `void`
* `string`
* `undefined`
* `null`
* `symbol`
* `unknown`
  
### object types 
* `array`
* `function`
* `classe`
* `object`
* `tuple` => permettent d'exprimer un tableau avec un nombre fixe d'éléments dont les types sont connus, mais n'ont pas besoin d'être les mêmes
* `enum`
* `any` => L’utilisation de Any pour les array est aussi intéressante. Il est possible de définir un mix de différents types au sein d’un même Array
* `never` => Function returning never must not have a reachable end point

### built in objects
* `Date`
* ...

# Notes

* quand on utilise un ou (|) pour déclarer plusieurs types, typescript va nous laisser uniquement les propriétés communes aux deux types précisés, ce qui peut parfois poser problème. On peut utiliser des Type Guards (if statements) pour restaurer l'accès complet aux méthodes d'un type de l'union type

## Interface vs Abstract classes
* Interfaces = Use when we have very differents objects that we want to work together, promotes loose coupling
* Abstracts = Use when we are trying to build up a definition of an object, strongly couple classes together
* Essayer de préférence d'utiliser les interfaces, à moins de devoir utiliser des objets se ressemblant beaucoup


## Inheritance VS Composition
* Une implémentation basé sur des classes abstraites avec des classes enfants qui les héritent suit le modèle d'`Inheritance`. C'est caractérisé par une relation `est un` entre deux classes
* Une implémentation basé sur des interfaces, faisant référeance à d'autres objets, interfaces.., suit le modèle de `Composition`. C'est caractérisé par une relation `possède un` entre deux classes
* Voir la vidéo du cours sur la partie Inheritance VS Composition, composition propose plus de flexibilité (example des fenêtres carrès et rondes, voir les screens)

## Enum
* Utiliser les enum pour signaler aux autres développeurs les différentes valeurs que peut prendre une variable
* Utiliser quand les valeurs sont les valeurs sont fortements reliés entre elles, et quand les valeurs ne vont pas être modifiés souvent (exemple d'utilisation: couleurs d'un color picker, taille de boisson dans un menu etc)

## Types Assertion

* Override the default typescript system behavior

## Generics
* Like function arguments, but for type in class/function definition
* Allow us to define the type of a property/value/argument value at a future point
* Used heavily when writing reusable code


## Advanced Generics
* Typescript peut détecter automatiquement le type d'une instance de Generics meme si on ne précise pas le type (Type Inference)