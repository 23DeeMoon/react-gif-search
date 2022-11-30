import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('AddCategory test', () => { 
    const value = 'Steins Gate'

    test('should change the input text', () => { 
        render(<AddCategory onAddCategory={ ()=>{} }/>)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: {value}})
        expect(input.value).toBe(value)
     })

     test('should call onAddCatyegory if has a value', () => { 
        const onAddCategory = jest.fn()
        render(<AddCategory onAddCategory={ onAddCategory }/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value}})
        expect(input.value).toBe(value)
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(onAddCategory).toHaveBeenCalledTimes(1)
        expect(onAddCategory).toHaveBeenCalledWith(value)

     })

     test('should not call onAddCatyegory if value is empty', () => { 
        const value = ''
        const onAddCategory = jest.fn()
        render(<AddCategory onAddCategory={ onAddCategory }/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, {target: {value}})
        expect(input.value).toBe(value)
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(onAddCategory).toHaveBeenCalledTimes(0)
     })
 })