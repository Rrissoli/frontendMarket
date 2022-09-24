import '../../styles/login.css'
import Formlogin from '../../components/formLogin';
function Login({ user, setUser }) {
    return (
        <div className="container_login">
            <Formlogin user={user} setUser={setUser} />
        </div>
    )
}
export default Login;