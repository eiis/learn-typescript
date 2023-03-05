var user = {
    name: 'coder',
    age: 18,
    isLock: false
};
function isLock(user) {
    user.isLock = true;
    return user;
}
isLock(user);
