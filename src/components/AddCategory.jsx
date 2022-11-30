import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {

    const [value, setValue] = useState('')

    const onInputChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (value.trim().length <= 1) return
        onAddCategory(value)
        setValue('')
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Search Gifs"
            value={value}
            onChange={onInputChange}
        />
    </form>
  )
}
