//Singleton-Muster
//Teile eine einzelne globale Instanz in deiner Applikation.

//Singletons sind Klassen, die nur einmal instanziiert werden können und global 
//zugänglich sind. Diese einzige Instanz kann in der gesamten Applikation geteilt werden, 
//wodurch Singletons sich ideal für das Verwalten globaler Zustände in einer Applikation eignen.

// Beispiel mit einer ES2015-Klasse

let instance;
let counter = 0;
 
class Counter {
  constructor() {
    //Es kann nur eine Instanz der Klasse "Counter" erstellt werden.
    if (instance) {
      throw new Error("Drecksau!");
    }
    instance = this;
  }
 
  getInstance() {
    return this;
  }
 
  getCount() {
    return counter;
  }
 
  increment() {
    return ++counter;
  }
 
  decrement() {
    return --counter;
  }
}

// Die Methode Object.freeze stellt sicher, dass der Singleton von anderen Code-Stellen nicht verändert werden kann.
// Eigenschaften auf der eingefrorenen Instanz können nicht hinzugefügt oder geändert werden, was das Risiko versehentlicher Überschreibungen der Werte auf dem Singleton verringert.
const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;