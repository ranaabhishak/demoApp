import React from 'react';
import { View, Text } from 'react-native';
import ComponentsWithTypescript from './src/ComponentsWithTypescript';
import AppNavigator from './src/AppNavigator';
import Notes from './src/Notes';
import { Provider} from 'react-redux'
import { store} from './src/redux/store';
const App = () => {
    return (
        // <Provider store={store}>
        // <Notes/>

        // </Provider>
        <AppNavigator/>
        // <ComponentsWithTypescript name={'Abhi'} email={'abhi@gmail.com'} age={26} />
    );
};

export default App;



// import { View, Text } from 'react-native'
// import React from 'react'
// import AppNavigator from './src/navigation/AppNavigator'
// import { Provider } from 'react-redux'
// import MyStore from './src/redux/MyStore'

// const App = () => {
//   return (
//     <Provider store={MyStore}>

    
//    <AppNavigator/>
//    </Provider>
//   )
// }

// export default App