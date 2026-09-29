import styles from './Login.module.css'
import {Helmet} from 'react-helmet'

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login || MyApp</title>
        <meta name="description" content="Login to your account" />
      </Helmet>
      <div className={styles.login}>Login</div>
    </>
  );
}

export default Login