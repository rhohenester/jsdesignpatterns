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
    nationality: "brasilianischen",
};

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        if (!obj[prop]) {
            console.log(`Hmm ... diese Eigenschaft scheint auf dem Zielobjekt nicht zu existieren.`);
        } else {
            console.log(`Der Wert von ${prop} ist ${obj[prop]}`);
        }

    },
    set: (obj, prop, value) => {
        console.log(`${prop} wurde von ${obj[prop]} zu ${value} geändert.`)
        obj[prop] = value;
    },
});