import _ from 'lodash';

const config: any = {};
config.app = {
    test: 'this is poker game for talia'
}

config.get = (path: string) => {return _.get(config, path)}

export default config;