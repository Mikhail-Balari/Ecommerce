import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { colors } from '../Global/Colors'
//agregado
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSignInMutation } from '../Services/authServices'
import { isAtLeastSixCharacters, isValidEmail } from '../Validations/auth'
import { setUser } from '../Features/User/userSlice'

const LoginScreen = ({navigation}) => {

    //pegado
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")

    const [triggerSignIn, result] = useSignInMutation()
    const dispatch = useDispatch()

    console.log(result);

    useEffect(()=> {
      if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
        }
    }, [result])
    //hasta aca llega

    const onSubmit = () => {
        //pegado
        try {
            
            //Submit logic with validations
            const isValidVariableEmail = isValidEmail(email)
            const isCorrectPassword = isAtLeastSixCharacters(password)
            

            if (isValidVariableEmail && isCorrectPassword) {
                const request = {
                    email,
                    password,
                    returnSecureToken: true
                }
                triggerSignIn(request)
            }

            if (!isValidVariableEmail) setErrorMail ('Email is not correct')
            else setErrorMail('')

            if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
            else setErrorPassword('')
            

        } catch (err) {
            console.log("Catch error");
            console.log(err.message);
        }
        //hasta aca llega
    }
  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Text style={styles.title}>Login to start</Text>
            <InputForm 
                label={"email"}
                onChange={setEmail}
                error={errorMail}
            />
            <InputForm 
                label={"password"}
                onChange={setPassword}
                error={errorPassword}
                isSecure={true}
            />
            <SubmitButton 
                onPress={onSubmit}
                title = "Send"
            />
            <Text style={styles.sub}>Not have an account?</Text>
            <Pressable onPress={()=> navigation.navigate('Signup')}>
                <Text style={styles.subLink}>Sign up</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.darkmatter,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontFamily: 'Roboto',
        color: colors.secondary,
    },
    sub: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: colors.secondary,
    },
    subLink: {
        fontSize: 14,
        color: colors.primary,
    }
})