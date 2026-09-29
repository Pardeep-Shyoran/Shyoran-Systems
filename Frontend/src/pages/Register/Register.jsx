import styles from './Register.module.css'
import {Helmet} from 'react-helmet'

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register || MyApp</title>
        <meta name="description" content="Register page for MyApp" />
      </Helmet>
    <div className={styles.register}>Register</div>
    </>
  );
}

export default Register