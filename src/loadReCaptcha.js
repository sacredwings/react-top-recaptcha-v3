const loadReCaptcha = ({ id, key }) => {
  if (typeof document === 'undefined') {
    return Promise.reject(
        new Error('document is undefined')
    )
  }

  return new Promise((resolve, reject) => {
    if (document.getElementById(id) !== null) {
      return resolve(id)
    }

    let script = document.createElement('script')

    script.id = id
    script.src = `https://www.google.com/recaptcha/api.js?render=${key}`
    script.async = true

    script.onload = () => {
      resolve(id)
    }

    script.onerror = e => {
      reject(e, id)
    }

    document.body.appendChild(script)
  })
}

export default loadReCaptcha
