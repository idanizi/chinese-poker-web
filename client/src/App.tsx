import React from 'react';
import styles from './App.module.scss';
import _config from './config';
import api from './helpers/api';

const config = _config.get('app');

function App() {
  const [res, setRes]: [any, any] = React.useState('');

  React.useEffect(() => {
    api.get('/').then((res) => {
      if (res.ok) {
        setRes(res.data);
      }
    });
  }, []);

  return (
    <div className={styles.app}>
      {config.test}
      <div>{'res: ' + res}</div>
    </div>
  );
}

export default App;
