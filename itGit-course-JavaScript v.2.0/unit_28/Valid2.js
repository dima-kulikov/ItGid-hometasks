class Valid2 extends Valid {
    constructor(name, password) {
        super(name, password);
        this.emaiError = ' ';
        this.passwordError = ' ';
    }
    validate() {
        this.emaiError = ' ';
        this.passwordError = ' ';
        super.validate();

        if (!this.isValid) {
          this.passwordError = 'min length 6';
          return this.isValid;
        }
       
       if( this.name == '') {
                this.emaiError = 'email empty';
                this.isValid = false;
                return this.isValid;
      }
      this.isValid = true;
      return this.isValid;  
    }
}