const verifyPassword = require('./verifyPassword.js');
const PW = '9aSSword';

test('Password has lowercase', () => {
    expect(PW).toMatch(/[a-z]/);
    expect(verifyPassword.hasLowercase(PW)).toBeTruthy();
});

test('Password length < 9', () => {
    const PWLength = PW.length;
    expect(PWLength).toBeLessThan(9);
    expect(verifyPassword.length(PW)).toBeTruthy();
});

test('Password is not null', () => {
    expect(PW).not.toBeNull();
    expect(verifyPassword.isNotNull(PW)).toBeTruthy();
});

test('Password has uppercase', () => {
    expect(PW).toMatch(/[A-Z]/);
    expect(verifyPassword.hasUppercase(PW)).toBeTruthy();
});

test('Password has numbers', () => {
    expect(PW).toMatch(/[0-9]/);
    expect(verifyPassword.hasNumbers(PW)).toBeTruthy();
});

test('Password pass 3 or more conditions', () =>{
    expect(verifyPassword.hasLowercase(PW)).toBeTruthy();
    const result = [
        verifyPassword.hasLowercase(PW),
        verifyPassword.length(PW),
        verifyPassword.isNotNull(PW),
        verifyPassword.hasUppercase(PW),
        verifyPassword.hasNumbers(PW)
    ]
    expect(result.filter(item=>item).length).toBeGreaterThanOrEqual(3);
    expect(verifyPassword.verifyPassword(PW)).toBeTruthy();
});