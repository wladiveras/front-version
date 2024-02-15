import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({ 
        id: ref(0), 
        name: ref(''),
        email: ref('')
    }),
    getters: {
        getId: (state) => state.id,
        getName: (state) => state.name,
        getEmail: (state) => state.email,
    },
    actions: {
      fetchUser() {
        return []
      },
    },
})