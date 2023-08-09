export const register = (body, users) => {
    console.log(body)
    const { username, pass } = body
    let i = 0
    while (i < users.length) {
        if (username === users[i].username) return false
        i++
    }
    users.push({username: username, pass: pass})
    console.log(users)
    return true
}