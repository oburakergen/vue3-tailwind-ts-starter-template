import { ref } from 'vue'
import AxiosService from '@/utils/api.ts'

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref('')
  const loading = ref(false)
  const api = AxiosService.apiClient()

  const fetchData = async () => {
    loading.value = true
    try {
      data.value = await api.post(url)

    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      }
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, fetchData }
}
