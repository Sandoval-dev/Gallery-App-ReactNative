import { StyleSheet } from "react-native"



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20
    },
    formTopArea: {
        marginTop: 28,
        alignItems: 'center'
    },
    formTopImage: {
        width: "100%",
        height: 100,
        borderRadius: 50
    },
    formTopText: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold",
        marginTop: 8
    },
    formArea: {
        marginTop: 30
    },
    formNameArea:{
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#000"
    },
    formNameInput:{
        width: "90%",
        fontSize: 16,
        flex: 1,
        color: "#000",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    formNameIcon:{
        paddingHorizontal: 8,
    },
    formSurNameArea:{
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#000"
    },
    formSurNameInput:{
        width: "90%",
        fontSize: 16,
        flex: 1,
        color: "#000",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    formEmailArea: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#000"
    },
    formEmailInput: {
        width: "90%",
        fontSize: 16,
        flex: 1,
        color: "#000",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    formEmailIcon: {
        paddingHorizontal: 8,
    },
    formPasswordArea: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#000"
    },
    formPasswordInput:{
        width: "90%",
        fontSize: 16,
        flex: 1,
        color: "#000",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    formPasswordIcon:{
        paddingHorizontal: 8,
    },
    formPasswordConfirmArea: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#000"
    },
    formPasswordConfirmInput:{
        width: "90%",
        fontSize: 16,
        flex: 1,
        color: "#000",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    formLoginButton:{
        marginTop: 20,
        backgroundColor: "#000",
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10
    },
    formRegisterButton:{
        marginTop: 20,
        backgroundColor: "#000",
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10
    },
    formLoginText:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    formRegisterText:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    formCreateAccount:{
        marginTop: 10,
        alignItems:'center',
        color: "#000"
    },
    formCreateText:{
        fontSize: 14
    },
    formLoginAccount:{
        marginTop: 10,
        alignItems:'center',
        color: "#000"
    },
    formLoginText:{
        fontSize: 14
    },
    errorText:{
        color: "red",
        fontSize: 14,
    }
})

export default styles