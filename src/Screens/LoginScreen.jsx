import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { colors } from '../Global/Colors'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSignInMutation } from '../Services/authServices'
import { isAtLeastSixCharacters, isValidEmail } from '../Validations/auth'
import { setUser } from '../Features/User/userSlice'

const LoginScreen = ({navigation}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [errorMail, setErrorMail] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    
    const dispatch = useDispatch()

    const [triggerSignIn, resultSignIn] = useSignInMutation()

    console.log(resultSignIn);

    useEffect(()=> {
      if (resultSignIn.isSuccess) {
            dispatch(
                setUser({
                    email: resultSignIn.data.email,
                    idToken: resultSignIn.data.idToken,
                    localId: resultSignIn.data.localId,
                    profileImage: ""
                })
            )
        }
    }, [resultSignIn])
   
    const onSubmit = () => {
        
        try {
            //Submit logic with validations
            const isValidVariableEmail = isValidEmail(email)
            const isCorrectPassword = isAtLeastSixCharacters(password)
            
            if (isValidVariableEmail && isCorrectPassword) {
                triggerSignIn({
                    email,
                    password,
                    returnSecureToken: true,
                })
            }

            if (!isValidVariableEmail) setErrorMail ('Email is not correct')
            else setErrorMail('')

            if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
            else setErrorPassword('')
            
        } catch (err) {
            console.log("Catch error");
            console.log(err.message);
        }
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
            <View style={[styles.buttonContainer, { borderColor: colors.secondary }]}>
                <Pressable onPress={()=> navigation.navigate('Signup')} style={styles.button}>
                    <Text style={styles.subLink}>Sign up</Text>
                </Pressable>
            </View>
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
        padding: 20,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderColor: 'transparent', 
        borderWidth: 2,  
        width: '20%',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    subLink: {
        fontFamily: "Roboto",
        fontSize: 14,
        color: colors.primary,
    },
})