export default function Header(props) {
    let darkMode = false;
    const changeMode = () => {
        darkMode = !darkMode;
        if(darkMode){
            console.log("Darkmode on", darkMode);
        } else{
            console.log("LightMode on", !darkMode);
        }
    };

    return (
        <h1>
            Hello {props.userModel.user.firstname} {props.userModel.user.lastname}.
            {props.userModel.message}
        </h1>,

        <button onClick={changeMode}>Change Mode</button>
    );
  }
  