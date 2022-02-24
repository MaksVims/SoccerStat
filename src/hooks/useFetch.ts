import { useState } from 'react';

export default function useFetch(callback: any): [() => Promise<void>, boolean, Error | null] {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  const fetch = async (...args: any) => {
    try {
      setLoading(true)
      await callback(...args)
    } catch (e: any) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  return [fetch, loading, error]
}
