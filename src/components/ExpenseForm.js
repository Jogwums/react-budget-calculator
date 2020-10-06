import React, {useState} from 'react'
import {MdSend} from 'react-icons/md';
import {useSpring, animated} from 'react-spring'


export const ExpenseForm = ({amount, charge, handleSubmit, handleAmount, handleCharge, edit}) => {
    //Animated input
    const [chargeBorder, setChargeBorder] = useState(true);
    const [amountBorder, setAmountBorder] = useState(true);
    const [amountLabel, setAmountLabel] = useState(true);
    const [chargeLabel, setChargeLabel] = useState(true);
    const loginBtnProps = useSpring({
      borderBottom: chargeBorder ? 'solid 2px white' : 'solid 2px #1059FF'
    })
    const loginBtnProps2 = useSpring({
        borderBottom: amountBorder ? 'solid 2px white' : 'solid 2px #1059FF'
      })
    function chargeClicked() {
        setChargeBorder(false);
        setChargeLabel(false);
    }
    function amountClicked() {
        setAmountBorder(false);
        setAmountLabel(false);
      }
    
      //Label Animation
      const showLabel = useSpring({
        opacity: amountLabel ? '0' : '1'
      })

      const showLabel2 = useSpring({
        opacity: chargeLabel ? '0' : '1'
      })
      
    //End of animated input
    //<animated.input id="loginBtn" className="active" onFocus={loginClicked} style={loginBtnProps}></animated.input>
    // Useable element above 
    
    return (
        <form className="form" onSubmit={handleSubmit}>
           <div className="form-center">
                <div className="form-group">
                    <animated.label htmlFor="charge" style={showLabel2}>Charge</animated.label>
                    <animated.input type="text" 
                            id="charge" 
                            name="charge" 
                            className="form-control"
                            placeholder={"e.g.credit "}
                            value={charge}
                            onFocus={chargeClicked}
                            style={loginBtnProps}
                            onChange={handleCharge}
                            autocomplete="off">
                    </animated.input>
                </div>
                <div className="form-group">
                    <animated.label htmlFor="expense" style={showLabel} >Amount</animated.label>
                    <animated.input type="number" 
                            id="amount" 
                            name="amount" 
                            className="form-control"
                            placeholder="e.g.1000 "
                            value={amount}
                            onFocus={amountClicked}
                            style={loginBtnProps2}
                            onChange={handleAmount}
                            autocomplete="off"
                            >
                    </animated.input>
                </div>

           </div>
           <button className="send-btn ">
            {edit? 'edit':'submit'} {""}
            <MdSend className="send-icon" />
           </button>
        </form>
    )
}
