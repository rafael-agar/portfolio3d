import React from 'react'
import { styles } from "../styles";

export const Footer = () => {
  return (
    <div className={`${styles.paddingX} w-full flex flex-col items-center py-5 bg-black mx-auto`}>
        <div className='w-full flex flex-col justify-center items-center mx-auto'>

                <div>
                  <a href='https://www.linkedin.com/in/rafael-agar-ocanto/' target={'_blank'}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB+0lEQVRoQ+1Zi03DMBBtJgAmIGzQDSgTABMQNugGlAlgA8IEsAFlAzYg3QAmCO9FMTKOk5DW7tXSnWSpsZ3ce/fxXdJslrhkieOfKQFpD6oHDtYDdV0vAO4JIxcGWUH/bZZlax+O3hACgc8DAG8wVyBwNpVALWz5P+pBwGvsIQ8ogZAeDOWBb4Ba4mElcuQYvwuMFcZRSLDeWA8UQjwNSlsBiCxx/ZAEgT43gkT0fAkSQskTQJhcg8SrE0JXuH5JIoQA8qsl0VRFRA7Bs1ozoaNKkBCyEJJIdNC2RUITiGrtmMfoMx5eOQpyXN9Yc/ceAAXmTjHeMR75DFj0o20YeT/Xz4esEsoDF25X2IJ4M8p9irCHOVO6NcQGjD0kwXzyijSBOS0+FncgscKeu5ghtJUHxoCb9bY9YYh2WhNRD1gAGe/MhQ0AEWhHQIJ15tJdECcAYOyX2DcZ6fRVXOgLI1ECbqJbJE4AjDXlV/qaQ2kCfck5mlOGmTSBEkDsWmFwJUNgDcS+QqUEpr7Uj1psoBKrB3x1Qz0woZnTENIQansZty2eY54vKUYWHktxnftcYW809rzmnlCV2OfFvcwpgb2YeUDJNh5gmxv9o+0/DcMXoHzqKcRkLDH4BiUpGygv3I8JBpD+SynpmuZ4lQawq34lsKsFd70/eQ/8ACTWnkDvfsP8AAAAAElFTkSuQmCC"/>
                  </a>
                </div>
                
                <div>
                  <p className='text-slate-400 text-[12px] text-center'>Web Development by Rafael Agar | 3D Modeling by 
                  <a className='hover:text-white' href='https://www.youtube.com/@Sati2023' target={'_blank'}>&nbsp; SatiDEV <p className='text-slate-400 text-[12px]'><span className='font-bold'>Technology apply:</span> React.js | Tailwind | Three.js | Framer Motion | Email.js</p></a></p>
                </div>

        </div>
    </div>
  )
}

export default Footer;