import LoginPageUI from "../interface/LoginPageUI"

const loginPageUI = new LoginPageUI()

class LoginPageObject {
    inputEmail(email){
        return loginPageUI.getEmailTextbox().type(email)
    }
    inputPassword(password){
        return loginPageUI.getPasswordTextbox().type(password);
    }
    clickLoginButton(){
        return loginPageUI.getLoginButton().click()
    }
}

export default LoginPageObject