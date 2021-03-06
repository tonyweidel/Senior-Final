var exports = module.exports = {};

function PasswordMessage(m){
  this.name = "Password Message";
  this.message = m;
}

function inRange(char,min,max){
  let unicode = char.charCodeAt(0);
  if(unicode>=min && unicode<=max){
    return true;
  }
  else{
    return false;
  }
}

exports.checkLength = function(str){
  let valid = (str.length >= 8 && str.length <= 20);
  try{
    if(str.length < 8){
      throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
    }
    else if(str.length > 20){
      throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
    }
    else{
      throw new PasswordMessage("Your password is an appropriate length.");
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return valid;
  }
}


exports.containsUpper =function(str){
  let hasUpper = false;
  try{
    for(let m=0; m<str.length; m++){
      if(inRange(str[m],65,90)==true){
        hasUpper=true;
      }
    }
    if(hasUpper = true){
      throw new PasswordMessage("Password contains at least one uppercase letter");
    }
    else{
      throw new PasswordMessage("Password must contain at least one uppercase letter");
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
  }
}

exports.containsLower =function(str){
  let hasLower = false;
  try{
    for(let m=0; m<str.length; m++){
      if(inRange(str[m],97,122)==true){
        hasLower=true;
      }
    }
    if(hasLower = true){
      throw new PasswordMessage("Password contains at least one lowercase letter");
    }
    else{
      throw new PasswordMessage("Password must contain at least one lowercase letter");
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
  }
}

exports.containsNumerical =function(str){
  let hasNumber = false;
  try{
    for(let m=0; m<str.length; m++){
      if(inRange(str[m],48,57)==true){
        hasNumber=true;
      }
    }
    if(hasNumber = true){
      throw new PasswordMessage("Password contains at least one number");
    }
    else{
      throw new PasswordMessage("Password must contain at least one number");
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
  }
}

exports.containsSpecial =function(str){
  let hasSpecial = false;
  special = [33,35,36,37,38,42,64,94];
  try{
    for(let s=0; s<special.length; s++){
      for(let m=0; m<str.length; m++){
        if(str[m].charCodeAt(0)==special[s]){
          hasSpecial = true;
          throw new PasswordMessage("Password contains at least one special character");
        }
      }
    }
    if(hasSpecial == false){
      throw new PasswordMessage("Password must contain at least one special character");
    }
  }
  catch(e){
    console.log(e.name+": "+e.message);
    return hasSpecial;
  }
}
