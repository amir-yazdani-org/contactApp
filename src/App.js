import AddContact from "./components/AddContact/AddContact";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import { Route, Switch } from "react-router-dom";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import EditContact from "./components/editContact/editContact";

function App() {
  return (
    <main className="App">
      <h1>contact app</h1>
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={ContactDetail} />
        <Route path="/add" component={AddContact} />
        <Route path="/" exact component={ContactList} />
      </Switch>
    </main>
  );
}

export default App;
