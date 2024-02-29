import { useEffect, useState } from 'react';

import customAxios from '../../core/services/interceptor';
import ItemLandingNews from '../landing/news/ItemLandingNews'

import {blogs} from "../../static-data/blogs"

const ItemNewsMap = ({newValue}) => {
  
  const [blogsItem, setBlogsItem] = useState([])

  const getBlogs = async () => {
    if(newValue == true) {
      let result = await customAxios.get(`/News?PageNumber=3&RowsOfPage=3&SortType=DESC`);
      setBlogsItem(result.news)
    }
    else {
      let result = await customAxios.get(`/News?PageNumber=1&RowsOfPage=3&SortType=DESC`);
      setBlogsItem(result.news)
    }
  }
  useEffect(() => {
    getBlogs()
  }, [])
  

  return (
    <>
      {
        blogs.slice(15,18).map((element,index) => {
            return <ItemLandingNews key={index} element={element} />
        })
      }
    </>
  );
};

export default ItemNewsMap;
