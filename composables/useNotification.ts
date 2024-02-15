import { ref, computed } from 'vue'
import type { NotificationT } from '~~/types/components/notification'

export function useNotification() {

    const show = ref(false)

    const notification = computed({
        get: () => ({
            show: show.value,
            icon: '',
            color: '',
            variant: '',
            title: '',
            description: '',
        }),
        set: (value: NotificationT) => {
            show.value = value.show || false
            notification.value.icon = value.icon || ''
            notification.value.color = value.color || ''
            notification.value.variant = value.variant || ''
            notification.value.title = value.title || ''
            notification.value.description = value.description || ''
        },
    })

    function showNotification(options: NotificationT) {
        notification.value = {
            show: true,
            icon: options.icon,
            color: options.color,
            variant: options.variant,
            title: options.title,
            description: options.description,
        }
    }

    function hideNotification() {
        show.value = false
    }

    return {
        notification,
        showNotification,
        hideNotification,
    }
}