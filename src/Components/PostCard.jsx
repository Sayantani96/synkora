import React from 'react'
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import PrimaryButton from './PrimaryButton';

const PostCard = () => {
  return (
       <div className="
       flex 
       flex-col 
       w-auto
       h-96
       p-12 
       mt-6
       border-2 border-gray-300 rounded-lg
       ">
      <div className="bg-light-pink">
        <div className="flex items-center mb-8">
          <img
            src="https://avatars.githubusercontent.com/u/123456789?v=4"
            alt="Avatar"
            className="rounded-full w-10 h-10"
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold">Tanay Pratap</h3>
            <p className="text-gray-500">1 min</p>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-gray-800">
            I'm thinking of coming up with a program for business roles as well. After placing 100+ programmers in top Indian startups, I am thinking of coming up with a program for business roles as well. I'm excited to see what the future holds!
          </p>
          <a
            className="text-blue-500 hover:text-blue-700 underline"
            href="https://twitter.com/tanaypratap"
          >
            Twitter
          </a>
        </div>
        <div className="flex justify-between mb-8">
          <div className='flex'>
            <FaHeart/> 123
            <FaComment /> 45
            <FaShare /> 21
          </div>
          <PrimaryButton
          >
            Post
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}

export default PostCard