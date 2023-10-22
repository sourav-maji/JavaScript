class User{
    constructor(email , password){
        this.email = email
        this.password = password
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }

// getter and setter for email
    get email(){
        return `${this.email}`
    }

}

const hitesh = new User("hitesh@hitesh.ai", "123abc")

console.log(hitesh.password);