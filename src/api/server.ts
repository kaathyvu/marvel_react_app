let token = `a25828b9a46f38702e952d4cb2df9da63eab51e70e4a7932`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://careful-dynamic-machine.glitch.me/api/marvelchars`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':  `Bearer ${token}`
            }
        });

        if (! response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async (data:any) => {
        const response = await fetch(`https://careful-dynamic-machine.glitch.me/api/marvelchars`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (! response.ok) {
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },

    update: async (id: string, data:any) => {
        const response = await fetch(`https://careful-dynamic-machine.glitch.me/api/marvelchars/${id}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async (id: string) => {
        const response = await fetch (`https://careful-dynamic-machine.glitch.me/api/marvelchars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
    }
}