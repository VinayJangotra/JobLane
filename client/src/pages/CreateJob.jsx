import React, { useState, useEffect } from 'react'
import { MetaData } from '../components/MetaData'
import { Sidebar } from '../components/Sidebar'
import { AiOutlineMail } from 'react-icons/ai'
import { MdPermIdentity, MdOutlineFeaturedPlayList } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { TbLoader2 } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'





export const CreateJob = () => {

    const loading = false ;

    const dispatch = useDispatch()


  const [title, setTitle] = useState("") ;
  const [description, setDescription] = useState("") ;
  const [companyName, setCompanyName] = useState("") ;
  const [location, setLocation] = useState("") ;
  const [skillsRequired, setSkillsRequired] = useState("") ;
  const [salary, setSalary] = useState("") ;
  const [category, setCategory] = useState("") ;
  const [employmentType, setEmploymentType] = useState("") ;

  const [logo, setLogo] = useState("") ;
  const [logoName, setLogoName] = useState("") ;


  
//   title, description, companyName, location, logo, skillsRequired, salary, category, employmentType
    


    const logoChange = (e) => {
        if (e.target.name === "logo") {
          const reader = new FileReader();
          reader.onload = () => {
            if (reader.readyState === 2) {
                setLogo(reader.result);
                setLogoName(e.target.files[0].name)
            }
          };
    
          reader.readAsDataURL(e.target.files[0]);
        }
      }
    
      const postHandler = (e) => {
        e.preventDefault()

    }


    return (
        <>

            <MetaData title="Post Job" />
            <div className='bg-gray-950 min-h-screen pt-14  md:px-20 px-3  text-white'>

                <Sidebar />


                <div className=' flex justify-center w-full items-start pt-6'>
          <form onSubmit={postHandler} className='flex flex-col md:w-1/3 shadow-gray-700  w-full md:mx-0 mx-8' action="">

            <div className='md:px-10 px-2 pt-4 pb-20 w-full flex flex-col gap-4'>
              <div className='text-center'>
                <p className='text-4xl  font-medium'>Post Job</p>
              </div>

              {/* Job Title */}
              <div className='bg-white flex justify-center items-center'>
                <div className='text-gray-600 px-2'>
                  <MdPermIdentity size={20} />
                </div>
                <input 
                value={title} onChange={(e) => setTitle(e.target.value)} 
                required placeholder='Job Title' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
              </div>



              {/* Job Description */}
               <div className='bg-white flex justify-center items-center'>
                <div className='text-gray-600 md:pb-12 pb-8 px-2'>
                  <MdOutlineFeaturedPlayList size={20} />
                </div>
                <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder='Job Description' type="text" className='outline-none w-full text-black bold-placeholder px-1 pr-3 py-2' />
              </div>


              
              {/* Company Name */}
              <div className='bg-white flex justify-center items-center'>
                <div className='text-gray-600 px-2'>
                  <AiOutlineMail size={20} />
                </div>
                <input
                  value={companyName} onChange={(e) => setCompanyName(e.target.value)} 
                 required placeholder='Company Name' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
              </div>



              {/* Company Logo */}
              <div>
                <div className='bg-white flex justify-center items-center'>
                  <div className='text-gray-600 px-2'>
                    <CgProfile size={20} />
                  </div>
                  <label htmlFor='logo' className='outline-none w-full cursor-pointer text-black px-1 pr-3 py-2 '>
                    {logoName.length === 0 ? <span className='text-gray-500 font-medium'>Select Profile Pic...</span>
                      : logoName}
                  </label>
                  <input id='logo' name='logo' required
                    onChange={logoChange}
                    placeholder='Logo' accept="image/*" type="file" className='outline-none  w-full hidden text-black px-1 pr-3 py-2' />


                </div>
                <p className='bg-gray-950 text-white text-xs'>Please select Image file</p>
              </div>



              {/* Location */}
              <div className='bg-white flex justify-center items-center'>
                <div className='text-gray-600 px-2'>
                  <AiOutlineMail size={20} />
                </div>
                <input
                 value={location} onChange={(e) => setLocation(e.target.value)} 
                 required placeholder='Location' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
              </div>

              {/* Skills Required */}
              <div className='bg-white flex justify-center items-center'>
                <div className='text-gray-600 md:pb-12 pb-8 px-2'>
                  <MdOutlineFeaturedPlayList size={20} />
                </div>
                <textarea 
                 value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)} 
                placeholder='Required Skills' type="text" className='outline-none w-full text-black bold-placeholder px-1 pr-3 py-2' />
              </div>


              {/* Category */}
              <div className='bg-white flex justify-center items-center'>
                <div className='text-gray-600 px-2'>
                  <AiOutlineMail size={20} />
                </div>
                <input
                 value={category} onChange={(e) => setCategory(e.target.value)} 
                 required placeholder='Category' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
              </div>


              {/* Salary */}
              <div className='bg-white flex justify-center items-center'>
                <div className='text-gray-600 px-2'>
                  <AiOutlineMail size={20} />
                </div>
                <input
                 value={salary} onChange={(e) => setSalary(e.target.value)} 
                 required placeholder='Salary' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
              </div>


              {/* Employment Type */}
              <div className='bg-white flex justify-center items-center'>
                <div className='text-gray-600 px-2'>
                  <AiOutlineMail size={20} />
                </div>
                <input
                 value={employmentType} onChange={(e) => setEmploymentType(e.target.value)} 
                 required placeholder='Employment Type' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
              </div>


            

             


              <div>
                <button disabled={loading} className='blueCol flex justify-center items-center px-8 w-full py-2 font-semibold' >
                  {loading ? <TbLoader2 className='animate-spin' size={24} /> : "Post"}</button>
              </div>

            </div>



          </form>
        </div>


            </div>


        </>
    )
}
