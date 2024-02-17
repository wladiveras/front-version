import { defineStore } from 'pinia'
import type { StateT, UserT } from '~~/types/stores/user'

export const useUserStore = defineStore('user', {
  state: (): StateT => ({
    auth: null,
    user: null,
    users: [],
    loading: false,
  }),
  getters: {
    getAuth: state => state.auth,
    getUser: state => state.user,
    getUsers: state => state.users,
    isLoading: state => state.loading,
    isConnect: state => Boolean(state.auth),
  },
  actions: {
    async fetchUser(id: number): Promise<void> {
      this.loading = true

      const { data: user, pending, error } = await useLazyFetch('/api/user', {
        baseURL: ApiUrl,
        query: { id },
      })
        .finally(() => {
          this.loading = false
        })

      if (!pending.value && !error.value)
        this.user = user.value as UserT
    },
    async fetchAllUsers(): Promise<void> {
      this.loading = true

      const { data: users, pending, error } = await useLazyFetch('/api/user/all', {
        baseURL: ApiUrl,
      })
        .finally(() => {
          this.loading = false
        })

      if (!pending.value && !error.value)
        this.users = users.value as UserT[]
    },
    async login(email: string, id: number): Promise<void> {
      const { data: user, pending, error } = await useFetch('/api/user', {
        baseURL: ApiUrl,
        method: 'post',
        body: {
          id,
          email,
        },
      })
        .finally(() => {
          this.loading = false
        })

      if (!pending.value && !error.value)
        this.auth = user.value as UserT
    },
  },
})
