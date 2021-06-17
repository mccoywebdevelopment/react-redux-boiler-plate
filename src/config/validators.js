export function passwordValidator(password,isRequired){
    var feedback = {
        isValid:true,
        errorMsg:""
    }
    if(password.length<1 && isRequired){
        feedback.errorMsg = "Password field is required\n\n";
        feedback.isValid = false;
    }else if(password.length<8){
        feedback.errorMsg = "Please enter a password with at least eight characters only recieved: "+password.length+".\n\n";
        feedback.isValid = false;
    }
    return feedback;
}

export function isTrueInput(name,checkboxValue){
    var feedback = {
        isValid:true,
        errorMsg:""
    }
    if(!checkboxValue){
        feedback.errorMsg = name +" field is required\n\n";
        feedback.isValid = false;
    }
    return feedback
}

export function firstAndLastNameValidator(name,isRequired){
    var feedback = {
        isValid:true,
        errorMsg:""
    }
    if(name.length<1 && isRequired ){
        feedback.errorMsg = "Name field is required\n\n";
        feedback.isValid = false;
    }else if(isRequired && !name.includes(' ')){
        feedback.errorMsg = "Please provide first & last name\n\n";
        feedback.isValid = false;
    }
    if(name.length>0){
        var nameList = name.split(' ');
        for(var i=0;i<nameList.length;++i){
            if(nameList[i]==''){
                nameList.splice(i,1);
            }
        }
        if(nameList.length!=2){
            feedback.errorMsg = "Please enter first & last name\n\n";
            feedback.isValid = false;
        }
        if(nameList[0].length<3){
            feedback.errorMsg = "First name must be at least 3 characters.\n\n";
            feedback.isValid = false;
        }

        if(nameList[1] && nameList[1].length<3){
            feedback.errorMsg = "Last name must be at least 3 characters.\n\n";
            feedback.isValid = false;
        }
    }

    return feedback;
}

export function emailValidator(email,isRequired){
    var feedback = {
        isValid:true,
        errorMsg:""
    }
    if(email.length<1 && isRequired){
        feedback.errorMsg = "Email field is required\n\n";
        feedback.isValid = false;
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        feedback.errorMsg = "You have entered an invalid email address\n\n";
        feedback.isValid = false;
    }
    return feedback;
}

export function textValidator(name,isRequired){
    var feedback = {
        isValid:true,
        errorMsg:""
    }
    if(name.length<1 && isRequired){
        feedback.errorMsg = "Missing a required field\n\n";
        feedback.isValid = false;
    }
    return feedback;
}