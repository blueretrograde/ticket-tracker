
import './App.scss';
import team from "./data/team.js"
import Ticket from '../../ticket-tracker/src/components/Ticket/Ticket.jsx'



const App = () => {

const employees = team.map((employee, role , number) => <Ticket employee={employee} role={role} number={number}/>)




return (
  <div>
  <div className='display'>{employees}</div>
  </div>
)
;
};
export default App;
