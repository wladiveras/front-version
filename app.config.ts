export default defineAppConfig({
    ui: {
        variables: {
            light: {
                background: '255 255 255',
                foreground: 'var(--color-gray-700)'
            },
            dark: {
                background: 'var(--color-gray-900)',
                foreground: 'var(--color-gray-200)'
            },
            header: {
                height: '4rem'
            },
            notifications: {
                position: 'top-0 bottom-auto'
            }
        },
        base: 'mx-auto',
        padding: 'px-34 sm:px-6 lg:px-8',
        constrained: 'max-w-7xl',
    }
})