import React from 'react'

export default function Contact() {
  return (

 <>
 <section id="contact" className="min-h-screen ">
     
      <section>
          <div className="m-10">
          <h2 className="font-bold text-xl uppercase text-center">Contact Us</h2>
              <h3 className="font-semibold text-xl capitalize text-center">Swing By For A Cup Of Coffee Or Leave Us A Message:</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iste quasi consequatur atque totam voluptatum natus, rem nam accusamus delectus quibusdam error ratione blanditiis possimus? Facilis suscipit vitae odit corporis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod soluta, quibusdam libero odio nesciunt animi nam aliquam dicta temporibus nihil magni rerum quo, sit veniam amet dolores impedit minima.
              </p>
           
              <div className="row flex flex-col lg:flex-row rounded gap-4 p-4 lg:h-[600px]">
                <div className="column w-full lg:w-1/2 h-full">
                  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.6053259878263!2d28.022837174396695!3d-26.013743056242273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95714ec723a86f%3A0x6230a74e0eb78223!2sLonehill%20Shopping%20Centre!5e0!3m2!1sen!2sza!4v1719262735628!5m2!1sen!2sza"
      className="rounded-lg mr-custom w-full h-full"
        title="Google Maps showing the location of our office"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"> 
      
    </iframe>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center h-full">
                  <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
                    <form id="contact-form" action="/action_page.php" className="space-y-4">
                      <div>
                        <label for="fname" className="block text-gray-700 font-semibold mb-1">First Name</label>
                        <input type="text" id="fname" name="Firstname" placeholder="Your name.." required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                      </div>
                      
                      <div>
                        <label for="lname" className="block text-gray-700 font-semibold mb-1">Last Name</label>
                        <input type="text" id="lname" name="Lastname" placeholder="Your last name.." required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                      </div>
                      
                      <div>
                        <label for="email" className="block text-gray-700 font-semibold mb-1">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email.." required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                      </div>
                      
                      <div>
                        <div className="flex-grow">
                        <label for="subject" className="block text-gray-700 font-semibold mb-1">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something..." required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                      </div>
                      </div>
                      <div>
                        <input type="submit" value="Submit"
                          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"/>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          </div>
        {/* </div> */}
        </section>
        </section>
 </>
  )
}
