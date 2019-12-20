import LoginModule from '../../modules/menu/login'
import usePostData from "api/usePostData";

function Login(props) {
  const [results, postLogin] = usePostData()

  /**
   * Didapat dari getInitialProps di bawah
   */
  console.log(props.response)

  return <LoginModule results={results} postLogin={postLogin} />

};

/**
 * Jika membutuhkan data di awal / sebelum component load
 */
// Login.getInitialProps = async () => {
// const response = await axios("URL")
//   return { response: response,  }
// }

export default Login