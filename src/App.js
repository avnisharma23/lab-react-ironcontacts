import "./App.css";
import contactArray from './contacts.json';

function App() {

  const firstFiveContacts = contactArray.slice(0,5);
  const [contacts,setContacts] = useState(firstFiveContacts);
     
  return <div className="App">
    
    <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>popularity</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
  </div>;
}
export default App;