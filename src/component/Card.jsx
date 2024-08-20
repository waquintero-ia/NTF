const Card = () => {
  return(
    <>
      <div className="card-container">
        <div className="card-content w-327 h-543 rounded-[15px] bg-very-dark-blue-card p-6 flex flex-col gap-6 xl:w-350 xl:h-596 xl:pb-8">
          <div className="content-image relative w-278 h-278 overflow-hidden rounded-[8px] xl:w-302 xl:h-302">
            <img className="w-full h-full hover:bg-cyan hover:cursor-pointer" src="./images/image-equilibrium.jpg" loading="lazy" decoding="async" alt="image equilibrium"/>
            <div className="text-white flex justify-center items-center background-image absolute inset-0 bg-cyan opacity-0 hover:opacity-70 focus:opacity-70 active:opacity-70 hover:cursor-pointer transition-opacity" tabIndex={0}>
              <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h48v48H0z"/>
                  <path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="currentColor" fillRule="nonzero"/>
                </g>
              </svg>
            </div>
          </div>
          <div className="content-main flex flex-col gap-4 xl:gap-6">
            <div className="main-description flex flex-col gap-3">
              <h1 className="text-white text-22 leading-28 font-semibold hover:text-cyan focus:text-cyan active:text-cyan hover:cursor-pointer" tabIndex={0}>
                Equilibrium #3429
              </h1>
              <p className="text-soft-blue text-18 leading-26 font-light">
                Our Equilibrium collection promotes balance and calm.
              </p>
            </div>
            <div className="main-value flex justify-between">
              <div className="value text-cyan flex items-center">
                <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="currentColor"/>
                </svg>
                <h2 className="text-15 font-semibold leading-19 ml-[6.48px] xl:text-16 xl:leading-20">
                  0.041 ETH
                </h2>
              </div>
              <div className="date text-soft-blue flex items-center">
                <svg className="w-[16px] h-[16px]" width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="currentColor"/>
                </svg>
                <span className="ml-[7.7px] text-15 leading-19 xl:text-16 xl:leading-20">
                  3 days left
                </span>
              </div>
            </div>
            <hr className="border-very-dark-blue"/>
            <div className="main-avatar flex gap-4">
              <div className="avatar-container w-33 h-33 rounded-full border-[1px] border-white overflow-hidden">
                <img className="w-full h-full" src="./images/image-avatar.png" loading="lazy" decoding="async" alt="image profile"/>
              </div>
              <div className="main-autor flex items-center gap-[5px]">
                <p className="text-soft-blue text-15 leading-19 xl:text-16 xl:leading-20">
                  Creation of 
                </p>
                <span className="text-white text-15 leading-19 xl:text-16 xl:leading-20 hover:text-cyan focus:text-cyan active:text-cyan hover:cursor-pointer" tabIndex={0}>
                    Jules Wyvern
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card