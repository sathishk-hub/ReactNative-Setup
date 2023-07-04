import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.configure()
    .useReactNative({
        asyncStorage: false, // there are more options to the async storage.
        networking: {
            // optionally, you can turn it off with false.
            ignoreUrls: /symbolicate/,
        },
        editor: false, // there are more options to editor
        overlay: false, // just turning off overlay
    })
    .use(reactotronRedux())
    .use(sagaPlugin({ except: [''] }))
    .connect();

export default reactotron;
