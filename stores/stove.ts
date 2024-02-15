
import { defineStore } from 'pinia'
import type { StoveT } from '~~/types/stores/stove'

const toast = useToast()

export const useStovesStore = defineStore('author-store', {
    state: () => ({
        stoves: [] as StoveT[]
    }),
    actions: {
        async getAll() {
            try {
                const data = await $fetch<StoveT[]>('/api/stove/all');

                this.stoves = data;

                return data as StoveT[];

            } catch (e) {
                toast.add({ title: `error ${e}` })
            }
        },
        async getOne(id: number) {
            await $fetch('/api/stove', {
                method: 'GET',
                body: { id }
            })
                .catch((e) => {
                    toast.add({ title: `error ${e}` })
                })
                .then(async () => {
                    await this.getAll();
                    //alert
                });
        },
        async create(name: string) {
            await $fetch('/api/stove', {
                method: 'POST',
                body: { name }
            })
                .catch((e) => {
                    toast.add({ title: `error ${e}` })
                })
                .then(async () => {
                    await this.getAll();
                    //alert
                });
        },
        async update(id: string, name: string) {
            await $fetch(`/api/stove/${id}`, {
                method: 'PUT',
                body: { name }
            })
                .catch((e) => {
                    //alert
                })
                .then(async () => {
                    await this.getAll();
                    //alert
                });
        },

        async remove(id: string) {
            await $fetch(`/api/stove/${id}`, {
                method: 'DELETE'
            })
                .catch((e) => {
                    //alert
                })
                .then(async () => {
                    await this.getAll();
                    //alert
                });
        }
    }
});