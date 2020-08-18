class Auth {
    constructor() {
        this.authenticated = false
    }

    login(user,pass,cb) {
    let isAuth = localStorage.getItem(user);
    if(isAuth === pass) {
        this.authenticated = true;
        
        cb()
    }
     
        
    }

    logout(cb) {
        this.authenticated = false
        cb()
    }

    register(user,pass,cb) {
        localStorage.setItem(user,pass)

        this.authenticated = true
        cb()
    }

  

    isAuthenticated () {
        return this.authenticated
    }
}

export default new Auth ();