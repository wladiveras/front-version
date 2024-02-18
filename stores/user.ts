import { defineStore } from 'pinia'
import type { StateT } from '~~/types/stores/user'

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
    setAuth(data: object | null): void {
      this.auth = data
    },
    setUser(data: object | null): void {
      this.user = data
    },
    setUsers(data: object | null): void {
      this.users = data
    },
  },
})
