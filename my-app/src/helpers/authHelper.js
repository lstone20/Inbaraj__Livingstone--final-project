export const parseJwt = token => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return false;
    }
}

const isAuthenticated = () => {
    try {
        return parseJwt(sessionStorage.getItem('token'))
    } catch (error) {
        console.error(error)
        return false
    }
}

export default isAuthenticated