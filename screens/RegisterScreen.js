import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Login',
        })
    }, [navigation])

    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL:
                        imageUrl ||
                        "https://scontent.fkhi11-1.fna.fbcdn.net/v/t1.6435-9/140271783_2336105126522444_62130715544042994_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=WORcqJ7K-S8AX9m0f7z&_nc_ht=scontent.fkhi11-1.fna&oh=8f578f49473d69b5a3961528b233dfd7&oe=608FC6F5",
                })
            })
            .catch((error) => alert(error.message));
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />

            <Text h4 style={{ marginBottom: 50 }}>
                Create a WhatsApp Account
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    type='text'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder="Email"
                    type='email'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    type='password'
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    placeholder="Profile Picture URL (optional)"
                    autoFocus
                    type='text'
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>

            <Button raised containerStyle={styles.button} onPress={register} title="Register" />
            <View style={{ height: 300 }} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300,
    },
});