export default class Validator {
    validateUsername(userName){
        const regExp = /[^a-zA-Z0-9 _-]|\d{4,}|^[-_0-9]|[-_0-9]$/
        if (!regExp.test(userName)) {
            return true
        } else {return false}
    }
}
