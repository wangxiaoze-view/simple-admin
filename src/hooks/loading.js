import { ref } from 'vue'

export default function useLoading(initVal = false) {
  const loading = ref(initVal)
  const setLoading = (value) => {
    loading.value = value
  }
  const toggleLoading = () => {
    loading.value = !loading.value
  }

  return {
    loading,
    setLoading,
    toggleLoading,
  }
}
