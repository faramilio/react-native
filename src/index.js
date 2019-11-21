import React from 'react'

import { View, Text, TextInput } from 'react-native'

class perfil extends React.Component {
    state = {
        name: ''
    }
    render() {
        return (
            <View>
                <TextInput placeholder='nome' onChangeText={(Text)=> this.setState({name: Text})}></TextInput>
                <Text >nome: {this.state.name}</Text>
            </View>
        )
    }
}
export default perfil
