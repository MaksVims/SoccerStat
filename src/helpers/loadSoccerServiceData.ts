const API_TOKEN = 'cd8e46983e6b4b559f8e9b1f427d53b3'

export default async function loadSoccerServiceData(url: string) {
  const resp = await fetch(url, {
    headers: {
      'X-Auth-Token': API_TOKEN,
    },
  })

  return resp.json()
}
