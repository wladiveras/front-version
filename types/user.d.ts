export interface UserT {
  id?: number
  name: string
  email: string
  address: addressT
}

export interface addressT {
  id?: number
  city_id: number
  number: number
  street: string
  neighbourhood: string | null
  country: string
  complement: string
  postal_code: string
}

export interface StateT {
  auth: UserT | null
  user: UserT | null
  users: UserT[]
  loading: boolean
}
