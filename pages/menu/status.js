import CekStatus from '../../modules/menu/cek-status';
import usePostData from 'api/usePostData';

function Status(props) {
  const [results, postToken] = usePostData();

  /**
   * Didapat dari getInitialProps di bawah
   */
  console.log(props.response);

  return <CekStatus results={results} postToken={postToken} />;
}

/**
 * Jika membutuhkan data di awal / sebelum component load
 */
// Login.getInitialProps = async () => {
// const response = await axios("URL")
//   return { response: response,  }
// }

export default Status;
