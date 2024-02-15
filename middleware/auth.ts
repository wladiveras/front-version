function isAuthenticated(): boolean { return false }

export default defineNuxtRouteMiddleware((to, from) => {
  if (isAuthenticated() === false) {
    return navigateTo('/home')
  }
})