import RegisterMenu from '../../modules/menu/register';
import usePostData from 'api/usePostData';

function Register(props) {
  const [results, postData] = usePostData();

  return <RegisterMenu results={results} postData={postData} />;
}

/**
 * Jika membutuhkan data di awal / sebelum component load
 */
// Login.getInitialProps = async () => {
// const response = await axios("URL")
//   return { response: response,  }
// }

export default Register;
