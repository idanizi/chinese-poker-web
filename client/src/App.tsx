import React from 'react';
import styles from './App.module.scss';
import _config from './config';
import api from './helpers/api';
import url from './helpers/url';

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
      <img src={url.buildImgSrc('/cards/2_of_clubs.svg')} alt="" />
    </div>
  );
}

export default App;
