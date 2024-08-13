import React from 'react'

export default function Footer() {
  return (
    
    <>


<footer className=" text-gray-800 dark:text-dark-text mt-5  py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">

  <a href="https://github.com/moarray28" target="_blank" rel="noopener noreferrer" className="text-5xl cursor-pointer hover:text-dark-text dark:hover:text-teal-200 transition-colors">
   
  <ion-icon name="logo-github"></ion-icon> </a>
  
  
    <a href="https://www.linkedin.com/in/ritesh-more-85ba46248/" target="_blank" rel="noopener noreferrer" className="text-5xl cursor-pointer hover:text-dark-text dark:hover:text-teal-200 transition-colors">
    <ion-icon name="logo-linkedin"></ion-icon>
    </a>   
    
    
    <a href="https://www.instagram.com/moarray/" target="_blank" rel="noopener noreferrer" className="text-5xl cursor-pointer hover:text-dark-text dark:hover:text-teal-200 transition-colors">
    <ion-icon name="logo-instagram"></ion-icon>
  </a>  </div>
        <div className="mt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Ritesh More . All rights reserved.</p>
        </div>
      </div>
    </footer>

    </> )
}
