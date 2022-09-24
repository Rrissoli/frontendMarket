import '../../styles/login.css'
import FormSignIn from '../../components/formSignIn';
function SignIn({ signInUSer, setSignInUser }) {
    return (
        <div className="container_login">
            <FormSignIn signInUSer={signInUSer} setSignInUser={setSignInUser} />
        </div>
    )
}
export default SignIn;