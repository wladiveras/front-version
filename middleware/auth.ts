const store = useUserStore()

function isAuthenticated(): boolean { return store.isConnect }

export default defineNuxtRouteMiddleware(() => {
  if (isAuthenticated() === false)
    return navigateTo('/')
})
