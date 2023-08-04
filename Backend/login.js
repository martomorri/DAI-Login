export const login = (body, user) => {
    console.log(body)
    const { username, pass } = body
    if (username === user.username && pass === user.pass) return true
    return false
}