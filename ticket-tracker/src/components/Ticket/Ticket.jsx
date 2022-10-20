import { useState } from "react";


const Ticket = ({employee, role}) => {
    


        const [counter, setCounter] = useState(0)


            
        const counterAdd = () => {
            setCounter(counter +1);
            console.log("+ is being clicked", counter)
        };
        
        const counterSubtract = () => {

            if (counter === 0)
            setCounter(0)
            else{
            setCounter(counter -1);
            console.log("- is being clicked", counter)}
        }



    return (

        
        
        <div className = "ticket ticket__body">
        <h3 className="ticket__name">{employee.name}</h3>
        <h6 className="ticket__role">{employee.role}</h6>


        <div className="ticket__counter">
        <h3>Counter</h3>
        
        <button onClick={counterAdd} className="counter__plus">+</button>
        <span className="counter__number">{counter}</span>
        <button onClick={counterSubtract} className="counter__minus">-</button>
            
        </div>

        </div>
    



    )
}

export default Ticket;