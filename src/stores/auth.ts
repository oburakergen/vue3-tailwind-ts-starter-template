import { defineStore } from 'pinia'
import { computed, type ComputedRef, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const bearerToken = ref('')
  const getBearerToken:ComputedRef<string> = computed(() => bearerToken.value)
  const setBearerToken = (token: string) => {
    bearerToken.value = token
  }


  return { bearerToken, getBearerToken, setBearerToken }
})
