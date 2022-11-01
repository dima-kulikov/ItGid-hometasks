class Valid {
    constructor(name, password) {
        this.name = name;
        this.password = password;
        this.isValid = false;
    }
    validate() {
        this.isValid = false;
        if(this.password.length < 6) {
            this.isValid = false;
            return this.isValid;
        }
        this.isValid = true;
        return this.isValid;
    }

}