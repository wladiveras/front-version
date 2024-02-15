import colors from '#ui-colors'
import type { NotificationColor } from '~~/types/components/notification'

const toast = useToast()

export const useNotification = () => {


    const createToast = (type: 'error' | 'warn' | 'info' | 'success', title: string, description: string, timeout?: number) => {
        const icon = {
            error: 'i-heroicons-solid-x-circle',
            warn: 'i-heroicons-solid-exclamation-circle',
            info: 'i-heroicons-solid-information-circle',
            success: 'i-heroicons-solid-check-circle',
        }[type]

        const color: NotificationColor = {
            error: colors[0],
            warn: colors[3],
            info: colors[17],
            success: colors[5],
        }[type]

        toast.add({ icon, color, title, description, timeout })
    }

    const error = (title: string, description: string, timeout?: number) => createToast('error', title, description, timeout)
    const warn = (title: string, description: string, timeout?: number) => createToast('warn', title, description, timeout)
    const info = (title: string, description: string, timeout?: number) => createToast('info', title, description, timeout)
    const success = (title: string, description: string, timeout?: number) => createToast('success', title, description, timeout)

    return { error, warn, info, success }
}