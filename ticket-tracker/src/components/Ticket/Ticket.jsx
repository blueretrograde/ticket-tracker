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
        
        <div className="ticket__info">

        <h4 className="ticket__name">{employee.name}</h4>
        <h6 className="ticket__role">{employee.role}</h6>

        </div>


        <div className="ticket__counter">
        
        <button onClick={counterSubtract} className="counter__minus">-</button>
        <span className="counter__number">{counter}</span>

        <button onClick={counterAdd} className="counter__plus">+</button>
        </div>


        <div className="admit__border">

        <h3 className="ticket__admit">ADMIT ONE</h3>

        <p className="ticket__serial">123456789</p>

        </div>

        </div>
    



    )
}

export default Ticket;