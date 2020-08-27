//COmbinando mais de um reducer para manipular diversas funcionalidades da aplicação
import { combineReducers } from 'redux';
import IMC from './CalculoImc';

export default combineReducers({
    IMC,
    //CAso tenha mais reducers
});
