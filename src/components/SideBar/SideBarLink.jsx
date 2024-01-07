import React from 'react'

const SideBarLink = ({src, alt, name, customClass}) => {
  return (
    <a className='cursor-pointer gap-2 items-center flex px-3 py-2 hover:bg-gray-100 hover:rounded-xl text-[14px]'>
        <img className={`w-[24px] ${customClass}`} src={src} alt={alt} />
        {name}
    </a>
  )
}

export default SideBarLink