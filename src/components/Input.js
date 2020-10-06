// import React, {useState} from 'react'
// import {useSpring, animated} from 'react-spring'

// function Input() {
//     const [registrationFormStatus, setRegistartionFormStatus] = useState(true);

//   const loginBtnProps = useSpring({
//     borderBottom: registrationFormStatus ? 'solid 2px transparent' : 'solid 2px #1059FF'
//   })


//   function loginClicked() {
//     setRegistartionFormStatus(false);
//   }

//   return(
//     <animated.input id="loginBtn" className="active" onFocus={loginClicked} style={loginBtnProps}></animated.input>
//   )
// }

// export default Input;