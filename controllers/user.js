export const register = (_req, res, _next) => {
    res.json("User registered");
}

export const login = (_req, res, _next) => {
    res.json("User logged in");
}

export const logout = (_req, res, _next) => {
    res.json("User logged out");
}