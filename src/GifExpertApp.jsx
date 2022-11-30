import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])
    
    const onAddCategory = (value) => {
        if (!categories.includes(value)) {
            setCategories([value, ...categories])
        }
    }

  return (
    <>
        <h1>SearchGifs</h1>
        
        <AddCategory onAddCategory={onAddCategory}/>
        
        {
            categories.map((category) => 
                (
                <GifGrid key={category} category={category}/>            
                )
            )
        }
    </>
  )
}
