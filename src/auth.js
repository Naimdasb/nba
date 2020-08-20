class Auth {
    constructor() {
        this.authenticated = false
    }

    login(user, pass, cb) {
        let isAuth = localStorage.getItem(user);
        if(isAuth === pass) {
            localStorage.setItem("currentSession",user)
            this.authenticated = true;
            cb()
        }
    }

    logout(cb) {
        this.authenticated = false
        localStorage.setItem("currentSession", "")
        cb()
    }

    register(user, pass) {
        if(user !== "" && pass !== "") {
            localStorage.setItem(user,pass)
            this.authenticated = true
            
        }
        
        this.authenticated = false
       
    }

    isAuthenticated () {
        return this.authenticated
    }
}

export default new Auth ();