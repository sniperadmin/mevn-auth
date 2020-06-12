export const required = function (value) {
  return !!value || "required"
}

export const email = function (value) {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(value) || "Invalid e-mail."
}

export const ip = function (value) {
  const hasIp = /^(25[0-5]|2[0-4][0-9]|[01]?[1-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[1-9][1-9]?)$/.test(value)
  return hasIp || "Wrong IP format"
}

export const port = function (value) {
  const hasPort = /^(^[1-9]{1}$|^[0-9]{2,4}$|^[0-9]{3,4}$|^[1-5]{1}[0-9]{1}[0-9]{1}[0-9]{1}[0-9]{1}$|^[1-6]{1}[0-4]{1}[0-9]{1}[0-9]{1}[0-9]{1}$|^[1-6]{1}[0-5]{1}[0-4]{1}[0-9]{1}[0-9]{1}$|^[1-6]{1}[0-5]{1}[0-5]{1}[0-3]{1}[0-5]{1}$)/.test(value)
  return hasPort || "Port number should be between 1 and 65535"
}

export const hasLowercase = function (value) {
  const hasLowercase = /(?=.*[a-z])/.test(value)
  return hasLowercase || "password must have at least 1 lowercase character"
}

export const hasUppercase = function (value) {
  const hasUppercase = /(?=.*[A-Z])/.test(value)
  return hasUppercase || "password must have at least 1 uppercase character"
}

export const hasNumber = function (value) {
  const hasNumber = /(?=.*\d)/.test(value)
  return hasNumber || "password must have at least one number"
}

export const hasSpecial = function (value) {
  const hasSpecial = /(?=.*['"!@#$*;&:?])/.test(value)
  return hasSpecial || "pass must have one special character ('\"!@#$*;&:?)"
}

export const minchars = function (value) {
  return value.length > 5 || "password must be more than 6 chars"
}

export const intCode = function (value) {
  const code = /^([+]?[1-9][\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/
  return code.test(value) || "Wrong format (i.e 5555555555 or +45555555555)"
}