import {Alert, Platform} from 'react-native';

const server =
  Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

function showError(err) {
  if (err.response && err.response.data) {
    Alert.alert('Ops! We have a problem.', `Message: ${err.response.data}`);
  } else {
    Alert.alert('Ops! We have a problem.', `Message: ${err}`);
  }
}

function showSucess(msg) {
  Alert.alert('Success!', msg);
}

export {server, showError, showSucess};
