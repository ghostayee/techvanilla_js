function check_password() {
    let correct_password = "admin@123"
    let attempts = 4
    let result = ""

    for (let i = 1; i <= attempts; i++) {
        let password = prompt("Enter your password")
        if (password === correct_password) {
            result = "Access granted"
            break
        } else {
            let remaining = attempts - i
            if (remaining > 0) {
                alert("Incorrect password. You have " + remaining + " attempt(s) remaining.")
                result = "Incorrect password"
            } else {
                alert("Attempts exceeded. Your account is blocked.")
                result = "Attempts exceeded, account blocked"
            }
        }
    }

    return result
}

let pass = check_password()
console.log(pass)
alert(pass)