import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/index';
import firebaseConfig from '../config/firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(
            firebaseConfig
        )
    }

    render () {
        return (
            <View>
                <Header headerText='Auth App'/>
                <LoginForm />
            </View>
        );
    }
}

export default App;