export type UserT = {
  id?: number
  name: string
  email: string
}

export type StateT = {
  auth: UserT | null
  user: UserT | null
  users: UserT[]
  loading: boolean
}
