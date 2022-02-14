import React from 'react'
import Empty from '../Create/empty.svg'
import CreateRecipe from '../../components/CreateRecipeModal/CreateRecipe'

const Browse = () => {
  return (
    <div className='browse p-4'>
      
      <div className='flex justify-center'>

        <div className='blog w-[600px] space-y-4'>

          <CreateRecipe />

          <div className='card w-full border border-gray-300 rounded-md'>
            <div className='title m-3 text-left text-lg'>
              <h4>Title</h4>
            </div>
            <div className='body m-3 text-left text-lg'>
              <h4>Body</h4>
            </div>
            <div className='image mb-6'>
              <img className='w-full h-[400px]' src={Empty} alt="" />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Browse
