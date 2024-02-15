import { defineStore } from 'pinia'
import type { UserT, StateT } from '~~/types/stores/user';

const config = useRuntimeConfig()

export const useUserStore = defineStore('user', {
  state: (): StateT => ({
    auth: null,
    user: null,
    users: [],
    loading: false
  }),
  getters: {
    getAuth: (state) => state.auth,
    getUser: (state) => state.user,
    getUsers: (state) => state.users,
    isLoading: (state) => state.loading,
    isConnect: (state) => true, //Boolean(state.auth),
  },
  actions: {
    async fetchUser(id: number): Promise<void> {
      this.loading = true;

      const { data: user, pending, error } = await useLazyFetch('/api/user', {
        baseURL: config.api.baseURL,
        query: { id: id },
      })
        .finally(() => {
          this.loading = false;
        })

      if (!pending.value && !error.value) {
        this.user = user.value as UserT
      }
    },
    async fetchAllUsers(): Promise<void> {
      this.loading = true;

      const { data: users, pending, error } = await useLazyFetch('/api/user/all', {
        baseURL: config.api.baseURL,
      })
        .finally(() => {
          this.loading = false;
        })

      if (!pending.value && !error.value) {
        this.users = users.value as UserT[]
      }
    },
    async login(email: string, id: number): Promise<void> {

      const { data: user, pending, error } = await useFetch('/api/user', {
        baseURL: config.api.baseURL,
        method: 'post',
        body: {
          id: id,
          email: email,
        },
      })
        .finally(() => {
          this.loading = false;
        })

      if (!pending.value && !error.value) {
        this.auth = user.value as UserT
      }

    },
  },
})