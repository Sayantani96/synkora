import React from 'react'
import PrimaryButton from './PrimaryButton'
import {BsImageFill,BsEmojiSmile} from 'react-icons/bs'
import {AiOutlineFileGif} from 'react-icons/ai'

const CreatePost = () => {
  return (
    <div className='bg-[#FFB6C1] text-center px-5 py-8'>
    <div className='flex flex-col w-96 ml-96'>
     
       <div className="flex items-center mb-8">
       <img
          src="https://avatars.githubusercontent.com/u/123456789?v=4"
          alt="Avatar"
          className="rounded-full w-10 h-10"
        />
        </div> 
        <div className="mb-8">
          <textarea 
          placeholder="Tell Us What's on your mind"
          className='
          w-full border-2 border-gray-300 rounded-lg p-4
          '
          />
        </div>
        <div className="flex justify-between mb-8">
      <div className='flex'>
          <BsImageFill size={25}/>
          <AiOutlineFileGif size={25}/>
          <BsEmojiSmile size={25}/>
      </div>
        <PrimaryButton>Post</PrimaryButton>
      </div>
      </div>   
    </div>
  )
}

export default CreatePost