/*
    Provider Pattern
    
    Manchmal müssen wir in einer Anwendung Daten vielen oder sogar allen Komponenten zur Verfügung stellen. Wir können dies tun,
    indem wir Daten an Komponenten mit sogenannten Props weitergeben. Aber wenn fast alle Komponenten auf die Daten zugreifen müssen,
    wird es schwierig, sie richtig weiterzugeben. Das nennt man Prop-Drilling.
    Das Problem dabei ist, dass der Code schwer zu ändern ist und es schwer ist zu verstehen, wo bestimmte Daten herkommen.
    Zum Beispiel, wenn wir eine App-Komponente mit bestimmten Daten haben und weit unten im Baum eine ListItem-, 
    Header- und Text-Komponente, die alle diese Daten benötigen, müssen wir sie durch mehrere Ebenen von Komponenten weitergeben.

    Mit dem Provider Pattern können wir Daten für mehrere Komponenten verfügbar machen. 
    Anstatt diese Daten durch Props an jede Komponente weiterzugeben, können wir alle Komponenten in einem Provider umschließen.
    Ein Provider ist eine Higher-Order-Komponente, die uns vom Context-Objekt bereitgestellt wird. Wir können ein Context-Objekt erstellen, indem wir die von React bereitgestellte createContext-Methode verwenden.
    Der Provider erhält eine value-Prop, die die Daten enthält, die wir weitergeben möchten. Alle Komponenten, die von diesem Provider umschlossen sind, haben Zugriff auf den Wert der value-Prop.
*/
const DataContext = React.createContext();

function App() {
    const data = { ... }

    return (
        <div>
            <SideBar />
            <Content />
        </div>
    )
}

/*  Komponenten, die den Datenwert nicht verwenden, müssen sich nicht mit Daten befassen. 
    Wir müssen uns keine Gedanken mehr darüber machen, Props durch mehrere Ebenen von Komponenten weiterzugeben, 
    die den Wert der Props nicht benötigen. Das macht Refactoring viel einfacher. 
*/

const SideBar = () => <List />
const List = () => <ListItem />
const Content = () => <div><Header /><Block /></div>


function ListItem() {
    const { data } = React.useContext(DataContext);
    return <span>{data.listItem}</span>;
}

function Text() {
    const { data } = React.useContext(DataContext);
    return <h1>{data.text}</h1>;
}

function Header() {
    const { data } = React.useContext(DataContext);
    return <div>{data.title}</div>;
}

/*  Das Provider Pattern ist sehr nützlich, um globale Daten gemeinsam zu nutzen. Ein häufiges Anwendungsbeispiel für
    das Provider Pattern ist die gemeinsame Nutzung des UI-Themes-Status mit vielen Komponenten.
*/