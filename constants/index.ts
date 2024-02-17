/* eslint-disable node/prefer-global/process */

export const appName = process.env.NUXT_PROJECT_NAME || 'Nuxt 3'
export const appDescription = process.env.NUXT_PROJECT_DESCRIPTION || 'Nuxt App Application'
export const AppUrl = process.env.NUXT_PUBLIC_APP_BASE
export const ApiUrl = process.env.NUXT_PUBLIC_API_BASE
