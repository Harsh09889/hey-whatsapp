import UseLocalStorage from "./hooks/UseLocalStorage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { SocketProvider } from "../contexts/SocketProvider";


function App() {

  const [id,setId] = UseLocalStorage('id');

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
        <Dashboard id = {id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  
  return (
    
    id ? dashboard : <Login onSubmitId = {setId}  />
    
  );
}

export default App;
