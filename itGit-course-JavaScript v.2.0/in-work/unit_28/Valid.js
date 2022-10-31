class Valid {
    constructor(name, password) {
        this.name = name;
        this.password = password;
        this.isValid = false;
    }
    validate() {
        if(this.password.length < 6) {
            return false;
        }else {
            return true;
        }
    }

}