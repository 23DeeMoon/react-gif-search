import { getGifs } from "../../src/helpers/getGifs"

describe('Test on getifs', () => { 
    test('shoud returns an array of images', async () => { 
    const gifs = await getGifs('Steins Gate')
    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
    })
     })
 })