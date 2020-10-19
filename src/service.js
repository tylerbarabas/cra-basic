const DOMAIN = 'https://api.billgodfrey.com/v1'
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
