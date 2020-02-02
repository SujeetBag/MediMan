import React from 'react';
import {Button} from 'react-native';

const Login = props => {
    return (
        <Button title="Login" onPress={props.onLogin} />
    )
};

export default Login;