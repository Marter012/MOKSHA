import React from 'react'
import { NavButton, NavProductsContainer } from './NavProductsStyles'
import {useDispatch, useSelector} from 'react-redux'
import { selectCategory } from '../../redux/categories/categoriesSlice';
const NavProducts = ({selectedCategory}) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  return (
    <NavProductsContainer >
      {categories.map(({title,id,category})=> {
        const valid = category?.toLowerCase() === selectedCategory?.toLowerCase()

      return <NavButton key={id} active={valid} onClick={()=>dispatch(selectCategory(category))}>{title}</NavButton>       
      })}      
    </NavProductsContainer>
  )
}

export default NavProducts
