import { render, screen, fireEvent } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFecthGifs } from "../../src/hooks/useFecthGifs"

jest.mock('../../src/hooks/useFecthGifs')
describe('test on gifGrid', () => {
    const category = 'Steins Gate'
    test('should show loading at the start', () => {
        useFecthGifs.mockReturnValue({
            isLoading: true,
            imgs: []
        })
        render(<GifGrid category={category}/>)
        expect(screen.getByText('Loading...')).toBeTruthy()
        expect(screen.getByText(category)).toBeTruthy()

     })

     test('should show images', () => {
        useFecthGifs.mockReturnValue({
            imgs: [{url: "Steins.com", title: "Steins", id: 1}, {url: "gate.com", title: "Gate", id: 2}],
            isLoading: false
        })
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)
     })
 })