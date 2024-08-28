export default function Header(props) {
    return (
        <h1>
            Hello {props.userModel.user.firstname} {props.userModel.user.lastname}.
            {props.userModel.message}
        </h1>
    );
  }
  