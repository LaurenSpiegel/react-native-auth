import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = { email: '', password: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder='whatevs@signmein.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={typing => this.setState({ email: typing })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        isSecure={true}
                        placeholder='password'
                        label='Password'
                        value={this.state.password}
                        onChangeText={typing => this.setState({ password: typing })}

                    />
                </CardSection>
                <CardSection>
                    <Button>
                    Log in
                    </Button>
                </CardSection>

            </ Card>
        )
    }
}

export default LoginForm;
