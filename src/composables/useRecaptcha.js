const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY

let scriptPromise = null

export function loadRecaptcha() {
  if (!SITE_KEY) return Promise.reject(new Error('Falta VITE_RECAPTCHA_SITE_KEY en el archivo .env'))
  if (window.grecaptcha) return Promise.resolve()

  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
      script.async = true
      script.onload = resolve
      script.onerror = () => {
        scriptPromise = null
        reject(new Error('No se pudo cargar reCAPTCHA'))
      }
      document.head.appendChild(script)
    })
  }
  return scriptPromise
}

export async function getRecaptchaToken(action) {
  await loadRecaptcha()
  return new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(SITE_KEY, { action }).then(resolve, reject)
    })
  })
}
