const isProduction = window.location.host === 'billgodfrey.com'
const DOMAIN = (isProduction) ? 'https://api.billgodfrey.com/v1' : 'http://localhost:5000/v1'
const _getUri = route => `${DOMAIN}${route}`

const uri_blog = _getUri(`/blog`)

const serviceMethods = {
  getBlog: async () => {
    const res = await fetch(uri_blog)
    return res
  },
}

export default {
  ...serviceMethods,
}
