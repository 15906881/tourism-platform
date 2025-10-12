export var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["PROJECT_MANAGER"] = "PROJECT_MANAGER";
    Role["MEMBER"] = "MEMBER";
    Role["VIEWER"] = "VIEWER";
})(Role || (Role = {}));
export function hasRole(payload, role) {
    return payload.roles.includes(role);
}
export function hasAnyRole(payload, roles) {
    return roles.some(role => payload.roles.includes(role));
}
export function isAdmin(payload) {
    return hasRole(payload, Role.ADMIN);
}
//# sourceMappingURL=guards.js.map