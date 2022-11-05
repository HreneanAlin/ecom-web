import create from "zustand"
import { showNotification } from "@mantine/notifications"
import { persist } from "zustand/middleware"
import { Field } from "../types/Field"

interface UseShoppingCartStore {
  fields: Map<string, Field>
  addItemToCart: (field: Field) => void
  hasItem: (id: string) => boolean
}

export const useShoppingCartStore = create<UseShoppingCartStore>()(
  (set, get) => ({
    fields: new Map(),
    addItemToCart: field => {
      const fields = get().fields
      if (field.quantity > 0) {
        let message = `Added ${field.quantity} copies of ${field.name} to cart `
        if (fields.has(field.movieId)) {
          const oldQuantity = fields.get(field.movieId)?.quantity || 0
          if (oldQuantity === field.quantity) return
          if (oldQuantity > field.quantity) {
            message = `Removed ${oldQuantity - field.quantity} copies of ${
              field.name
            } from your cart`
          } else {
            message = `Added ${field.quantity - oldQuantity} copies of ${
              field.name
            } to your cart`
          }
        }
        showNotification({
          message,
        })
        fields.set(field.movieId, field)
      } else {
        showNotification({
          message: `Removed ${field.name} from cart`,
        })
        fields.delete(field.movieId)
      }
      set(() => ({ fields }))
    },
    hasItem: id => get().fields.has(id),
  })
)

const hellStore = create<{ hell: string }>()(
  persist(
    state => ({
      hell: "sadad",
    }),
    {
      name: "hell-store",
    }
  )
)
