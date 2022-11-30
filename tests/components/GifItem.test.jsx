
import { render, screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"

describe('Test GifItem', () => { 

    const title = 'Title'
    const url = 'https://google.com/title.jpg'
    test('should match the snapshot', () => { 
       const {container} = render(<GifItem url={url} title={title} />)
        expect(container).toMatchSnapshot()
     })

     test('should show the image and the url with the alt', () => { 
        const {container} = render(<GifItem url={url} title={title} />)
         const {src, alt} = screen.getByRole('img')
         expect(src).toBe(url)
         expect(alt).toBe(title)

      })

      test('should show the title of the img', () => { 
         render(<GifItem url={url} title={title} />)
         expect(screen.getByText(title)).toBeTruthy()
       

      })
 })