import React from 'react';

const Submit = ({content , className , onClick }) => {
  return (
    <>
        <button type='submit' onClick={onClick} className={"flex justify-center items-center bg-gradient-to-r text-white  rounded-2xl text-[22px] from-[#5A0BA9] to-[#C003B2] hover:bg-gradient-to-l transition-all duration-300 " + className}>
            {content}
        </button>
    </>
  )
}

export default Submit