import React from 'react'
import { styles } from "../styles";

export const Footer = () => {
  return (
    <div className={`${styles.paddingX} w-full flex items-center py-5 bg-black mx-auto`}>
        <div className='w-full flex justify-center items-center mx-auto'>
            <div>
                <p className='text-slate-400 text-[12px] text-center'>Web Development by Rafael Agar | 3D Modeling by 
                <a className='hover:text-white' href='https://www.youtube.com/@Sati2023' target={'_blank'}>&nbsp; SatiDEV <p className='text-slate-400 text-[12px]'><span className='font-bold'>Technology apply:</span> React.js | Tailwind | Three.js | Framer Motion | Email.js</p></a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer;