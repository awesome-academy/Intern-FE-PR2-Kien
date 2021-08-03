import firebase from "firebase"

const authApi = {
  getMe: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentUser = firebase.auth().currentUser
        resolve({
          id: currentUser.uid,
          name: currentUser.displayName,
          email: currentUser.email,
          urlAvatar: currentUser.photoURL
        })
      }, 500)
    })
  }
}

export default authApi
