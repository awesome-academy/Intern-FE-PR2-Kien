import axios from "axios"
import queryString from "query-string"
import firebase from "firebase"

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser
  if (currentUser) return currentUser.getIdToken()

  const hasRememberAccount = localStorage.getItem(
    "firebaseui::rememberedAccounts"
  )
  if (!hasRememberAccount) return null

  return new Promise((resolve, reject) => {
    const waitTimer = setTimeout(() => {
      reject(null)
    }, 10000)

    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async user => {
        if (!user) {
          reject(null)
        }
        const token = await user.getIdToken()
        resolve(token)

        unregisterAuthObserver()
        clearTimeout(waitTimer)
      })
  })
}

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json"
  },
  paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(async config => {
  const token = await getFirebaseToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosClient.interceptors.response.use(
  response => {
    return response && response.data ? response.data : response
  },
  error => {
    throw error
  }
)

export default axiosClient
