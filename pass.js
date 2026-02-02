let correctPassword = "admin@123";
let attempts = 0;
let user_pass = prompt("Enter your password:");

if (user_pass === correctPassword) {
  console.log("Access granted");
} else if (user_pass !== correctPassword && attempts < 3) {
  attempts++;
  console.log(
    "Incorrect password. You have " + (4 - attempts) + " attempts left.",
  );
  user_pass = prompt("Enter your password:");
} else if (user_pass !== correctPassword && attempts >= 3) {
  console.log("Account blocked");
}
