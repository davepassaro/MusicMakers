var UserProfile = (function() {
    var email = "";
  
    var getEmail = function() {
      return email;
    };
  
    var setEmail = function(new_email) {
        email = new_email;     
      // Also set this in cookie/localStorage
    };
  
    return {
        getEmail: getEmail,
        setEmail: setEmail
    }
  
  })();
  
  export default UserProfile;