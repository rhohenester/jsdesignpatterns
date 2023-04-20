/* Proxy-Muster
    Abfangen und Steuern von Interaktionen auf Zielobjekte.
    Mit einem Proxy-Objekt haben wir mehr Kontrolle über die Interaktionen mit bestimmten Objekten. Ein Proxy-Objekt kann das Verhalten bestimmen, 
    wann immer wir mit dem Objekt interagieren, z.B. wenn wir einen Wert abrufen oder einen Wert setzen.

    Generell bedeutet ein Proxy, dass jemand anders als Stellvertreter fungiert. Anstatt direkt mit dieser Person zu sprechen,
    sprechen Sie mit der Proxy-Person, die die Person repräsentiert, mit der Sie Kontakt aufnehmen wollten. 
    Dasselbe passiert in JavaScript: Anstatt direkt mit dem Zielobjekt zu interagieren, interagieren wir mit dem Proxy-Objekt.
*/

const person = {
    name: "Gisele Bündchen",
    age: 42,
    nationality: "brasilianerin",
};

//Reflect
/*

    Das Reflect-Namespace-Objekt enthält statische Methoden zum Aufrufen von abfangbaren internen JavaScript-Objektmethoden. 
    Die Methoden sind dieselben wie die von Proxy-Handlern.

    JavaScript bietet ein integriertes Objekt namens Reflect, das es uns erleichtert, das Zielobjekt bei der Arbeit mit Proxies zu manipulieren.
    Früher haben wir versucht, Eigenschaften im Zielobjekt innerhalb des Proxys zu ändern und darauf zuzugreifen, indem wir die Werte direkt mit der Klammer-Notation
    abgerufen oder gesetzt haben. Stattdessen können wir das Reflect-Objekt verwenden. Die Methoden des Reflect-Objekts haben denselben Namen wie die Methoden des
    Handler-Objekts. Anstatt auf Eigenschaften über obj[prop] zuzugreifen oder Eigenschaften über obj[prop] = value zu setzen,
    können wir auf Eigenschaften des Zielobjekts über Reflect.get() und Reflect.set() zugreifen oder diese ändern. 
    Die Methoden erhalten dieselben Argumente wie die Methoden des Handler-Objekts.
*/
const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        if (!obj[prop]) {
            console.log(`Hmm ... diese Eigenschaft scheint auf dem Zielobjekt nicht zu existieren.`);
        } else {
            console.log(`Der Wert von ${prop} ist ${Reflect.get(obj, prop)}`);
        }

    },
    set: (obj, prop, value) => {
        console.log(`${prop} wurde von ${obj[prop]} zu ${value} geändert.`)
        Reflect.set(obj, prop, value);
    },
});

