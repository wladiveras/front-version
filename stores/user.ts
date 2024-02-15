import { defineStore } from 'pinia'

const config = useRuntimeConfig()

export const useUserStore = defineStore('user', {
    state: () => ({ 
        id: ref(0), 
        name: ref(''),
        email: ref(''),
        users: []
    }),
    getters: {
        getId: (state) => state.id,
        getName: (state) => state.name,
        getEmail: (state) => state.email,
        setUsers: (state) => state.users,
    },
    actions: {
      async fetchAllUsers() {
         console.log(config.public.apiUrl);
        const { data: users, pending,error } =  await useLazyFetch('/api/user/all', {
          baseURL: config.public.apiUrl,
        })
    
        if(!pending && !error){
          return users
        }

        return ['error']
      },
      async fetchUser() {
        const { data: user, pending, error } = await useLazyFetch('/api/user', {
          baseURL: config.public.apiUrl,
          query: { param: 'id'}
        });

        if(!pending && !error){
          return user
        }

        return ['error']
      },
    },
})