import { useState } from 'react';

export default function useFetch(callback: any): [() => Promise<void>, boolean] {
  const [loading, setLoading] = useState<boolean>(false)

  const fetch = async (...args: any) => {
    try {
      setLoading(true)
      await callback(...args)
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return [fetch, loading]
}
