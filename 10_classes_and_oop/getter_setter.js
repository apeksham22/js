class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}apeksha`
    }

    set password(value){
        this._password = value
    }
}

const apeksha = new User("a@apeksha.ai", "abc")
console.log(apeksha.email);