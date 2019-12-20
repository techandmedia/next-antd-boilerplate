import LoginModule from '../modules/login'
import usePostData from "api/usePostData";

const API = "user/login";

function Login(props) {
  const [results, postLogin] = usePostData()

  // React.useEffect(() => {
  //   postLogin(API, { username: "17111004", password: "111" })
  // }, [])

  return <LoginModule results={results} postLogin={postLogin} />

};

// Login.getInitialProps = async () => {

//   // console.log("Login.getInitialProps", response)

//   return { response: "Andri" }
// }

export default Login