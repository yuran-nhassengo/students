import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useSearchParams } from 'react-router-dom';

export const SearchStudent = () => {

  const [searchParams,setSearchParams] = useSearchParams();


 
    const handleChange = (e) => {
        
        const searchString = e.target.value;

        setSearchParams({ search: searchString });
      };


  return (
    <form className=" flex justify-center items-center mx-2 mt-32 mr-5 mb-10  " > 
        <FaMagnifyingGlass className="mr-1"/>

    
      <input 
            type="search" name="search"  
            placeholder="    Digite o nome do Estudante"  
            value={searchParams.get('search') || ''} 
            onChange={handleChange}
            className=" border border-black/50 rounded-lg text-center text-base 
              hover:border-none w-1/3  transition-all 
              duration-1000 ease-in-out hover:rounded-xl hover:h-8 hover:duration-700 bg-white " />
     
        </form>
  )
}

