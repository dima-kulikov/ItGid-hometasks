class Valid2 extends Valid {
    constructor(name, password) {
        super(name, password);
        this.emaiError = ' ';
        this.passwordError = ' ';
    }
    validate() {
        if(this.password.length < 6) {
            if( this.name == '') {
                this.emaiError = 'email empty';
            }
            this.passwordError = 'min length 6';
            this.isValid = false;
        }else if( this.name == '') {
            this.emaiError = 'email empty';
            this.isValid = false;
        }else {
            this.isValid = true;
        }
        
    }
}