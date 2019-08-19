const config = {
  apiKey: 'AIzaSyBD7KICUOmuD7YkRKnAyovUxLQ68_wMYuI',
  authDomain: 'are-you-science-guru.firebaseapp.com',
  databaseURL: 'https://are-you-science-guru.firebaseio.com',
  projectId: 'are-you-science-guru',
  storageBucket: '',
  messagingSenderId: '740296993140',
  appId: '1:740296993140:web:60e2ce209112b785'
}

const baseUrl = 'https://are-you-science-guru.firebaseio.com/'

const getOptions = () => ({
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const handleJsonResponse = res => res.json()

class Data {
  static get (url) {
    let options = getOptions()
    options.method = 'GET'

    return window.fetch(`${baseUrl}${url}/.json`, options)
      .then(handleJsonResponse)
  }
}

export default Data
