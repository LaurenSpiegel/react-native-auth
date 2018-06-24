import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common/index';
import firebaseConfig from '../config/firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp(
            firebaseConfig
        )

        // listener fired on sign in or sign out
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        })
    }

    renderContent() {
        if(this.state.loggedIn) {
            return (
                <Card>
                    <CardSection>
                    <Button onPressProp={() => {firebase.auth().signOut()}}>
                        Log Out
                    </Button>
                    </CardSection>
                </Card>
            )
        } else if (this.state.loggedIn === false){
            return <LoginForm />
        } else {
            return <Spinner size='large' />
        }
        
    }

    render () {
        return (
            <View>
                <Header headerText='Auth App'/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;