let userRole = "enrolled member";
let isAuthorized = true;
let AuthorizationLevel;

if (isAuthorized) {
  if (userRole === "employee") {
    AuthorizationLevel = "You have full access to Dietary Services";
  } else if (userRole === "enrolled member") {
    AuthorizationLevel =
      "You have full access to Dietary Services and one-on-one interaction with dietician";
  } else if (userRole === "subscriber") {
    AuthorizationLevel = " You have partial access to Dietary Services";
  } else {
    AuthorizationLevel =
      "You need to enroll or at least subscribe first to gain access";
  }
}

console.log("Authorization Level:", AuthorizationLevel);
