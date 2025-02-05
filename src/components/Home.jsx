import React from 'react'
import Navbar from './Navbar'

export default function Home() {
    
  return (
     <>
     <section id="home" className="min-h-screen ">

  

    <div className ="relative m-2 w-full rounded overflow-hidden mb-0 md:mb-0 sm:mt-4 ">
    <img src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600" className ="w-full rounded" alt="Coffee Flavours" />
    <div className=" flex flex-col justify-center items-center bg-opacity-50  p-4">
      <h1 className ="font-bold text-xl uppercase text-center sm:text-lg text-gray-800">Welcome To Our Aroma Coffee Roastery</h1>
      <p className ="text-center mt-2 sm:text-sm sm:text-gray-800">
        Aroma coffee roastery is a family-owned company at Lonehill shopping center. Known for its range of delicious espresso,
        coffees, teas, and pastries, the Roastery has become a popular destination for both tourists and locals alike.
        Our unique roasting process has earned us a reputation for a consistent, smooth, and delicious cup of coffee that will always impress.
        Roasted to perfection, served with love. Freshly brewed, just for you!
      </p>
     
    <button message="Welcome to the Home Page!" />
    </div>
  </div>
  </section>
  </>
  )
}
