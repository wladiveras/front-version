
import { defineStore } from 'pinia'
import type { StoveT } from '~~/types/stores/stove'

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
                //toast
            }
        },
        async getOne(id: number) {
            await $fetch('/api/stove', {
                method: 'GET',
                body: { id }
            })
                .catch((e) => {
                    //toast
                })
                .then(async () => {
                    await this.getAll();
                    //toast
                });
        },
        async create(name: string) {
            await $fetch('/api/stove', {
                method: 'POST',
                body: { name }
            })
                .catch((e) => {
                    //toast
                })
                .then(async () => {
                    await this.getAll();
                    //toast
                });
        },
        async update(id: string, name: string) {
            await $fetch(`/api/stove/${id}`, {
                method: 'PUT',
                body: { name }
            })
                .catch((e) => {
                    //toast
                })
                .then(async () => {
                    await this.getAll();
                    //toast
                });
        },

        async remove(id: string) {
            await $fetch(`/api/stove/${id}`, {
                method: 'DELETE'
            })
                .catch((e) => {
                    //toast
                })
                .then(async () => {
                    await this.getAll();
                    //toast
                });
        }
    }
});