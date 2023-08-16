import React from 'react'
import PostCard from '../Components/PostCard'
import SearchInput from '../Components/SearchInput'
import DisplayPosts from '../Components/DisplayPosts'
import CreatePost from '../Components/CreatePost'
import LeftSidebar from '../Components/LeftSidebar'
import RightSidebar from '../Components/RightSidebar'
import FormInput from '../Components/FormInput'

const UserFeed = () => {
  return (
    <div className='flex w-full justify-between'>
        {/* <Header/> */}
     <section>
        <LeftSidebar/>
        {/* <UserIdentity/> */}
    </section>
    <main>
    <CreatePost/>
    <DisplayPosts/>
    </main>
     <section>
        <FormInput/>
        <RightSidebar/>
    </section> 
       
    </div>
  )
}

export default UserFeed