const hasLowercase = (PW) => {
    return /[a-z]/.test(PW);
};

const length = (PW) => {
    return PW.length < 9;
};

const isNotNull = (PW) => {
    return PW != null;
};

const hasUppercase = (PW) => {
    return /[A-Z]/.test(PW);
};

const hasNumbers = (PW) => {
    return /[0-9]/.test(PW);
};

const verifyPassword = (PW) => {
    const result = [
        hasLowercase(PW),
        length(PW),
        isNotNull(PW),
        hasUppercase(PW),
        hasNumbers(PW)
    ]
    if (!result[0]){
        return false;
    }
    else{
        return result.filter(item => item).length >= 3;
    }
};

module.exports = {
    verifyPassword,
    hasLowercase,
    length,
    isNotNull,
    hasUppercase,
    hasNumbers
};