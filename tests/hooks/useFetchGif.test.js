import { useFecthGifs } from "../../src/hooks/useFecthGifs"
import { renderHook, waitFor } from '@testing-library/react'

describe('test on useFetchGif', () => { 
    test('should return the initial value', () => { 
        const {result} = renderHook(() => useFecthGifs('Steins Gate'))
        const {imgs, isLoading} = result.current
        expect(imgs.length).toBe(0)
        expect(isLoading).toBeTruthy()        
     })

     test('should return and array of images', async () => { 
        const {result} = renderHook(() => useFecthGifs('Steins Gate'))
        await waitFor(
            ()=> expect(result.current.imgs.length).toBeGreaterThan(0),
        )
        const {imgs, isLoading} = result.current
        expect(imgs.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()        
     })
 })