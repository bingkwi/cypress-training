import LoginBoostPageUI from "../interface/LoginBoostPageUI"

const loginBoostPageUI = new LoginBoostPageUI()

class LoginBoostPageObject {

    inputEmail(email){
        return loginBoostPageUI.getEmailTextbox.type(email)
    }
    inputPassword(password){
        return loginBoostPageUI.getEmailTextbox.type(password);
    }
    clickLoginButton(){
        return loginBoostPageUI.getLoginButton.click()
    }
}

export default LoginBoostPageObject