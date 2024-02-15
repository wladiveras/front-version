import { defineStore } from 'pinia'

type User = {
  id: number
  name: string
  email: string
}

type Error = string | boolean

type State = {
  auth: User | null
  user: User | null
  users: User[]
  loading: boolean
  error: Error
}
const config = useRuntimeConfig()

export const useUserStore = defineStore('user', {
  state: (): State => ({
    auth: null,
    user: null,
    users: [],
    loading: false,
    error: false,
  }),
  getters: {
    getAuth: (state) => state.auth,
    getUser: (state) => state.user,
    getUsers: (state) => state.users,
    getError: (state) => state.error,
    isLoading: (state) => state.loading,
    
  },
  actions: {
    async fetchUser(id: number) {
      this.loading = true;

      const { data: user, pending, error } = await useLazyFetch('/api/user', {
        baseURL: config.public.apiUrl,
        query: { id: id },
      })
      .finally(() => {
        this.loading = false;
      })

      if (!pending && !error) {
        this.user = user.value as User
      }
    },
    async fetchAllUsers() {
      this.loading = true;

      const { data: users, pending, error } = await useLazyFetch('/api/user/all', {
        baseURL: config.public.apiUrl,
      })
      .finally(() => {
        this.loading = false;
      })

      if (!pending && !error) {
        this.users = users.value as User[]
      }
    },
    async login(email: string, id: number) {
      
      

      const { data: user, pending, error } = await useFetch('/api/user', {
        baseURL: config.public.apiUrl,
        method: 'post',
        body: {
          id: id,
          email: email,
        },
      })
      .finally(() => {
        this.loading = false;
      })

      if (!pending && !error) {
        this.auth = user.value as User
      }
    
    },
  },
})