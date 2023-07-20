import type { Drink } from "@/views/models/drink"

export const GetDrinks = () => {
    const data = localStorage.getItem('drinks')

    if(data) return JSON.parse(data) as Drink[]

    return [] as Drink[]
}