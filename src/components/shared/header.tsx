import Image from 'next/image'
import logo from '../../public/Leonardo_Diffusion_XL_Generate_a_unique_and_distinctive_logo_f_3.jpg'
import { PlusIcon } from '../icons/plus_icon'
export function Header(){

    return(
        <header className='flex flex-row place-content-around items-center w-full'>
            <div>
                <Image
                    width={200}
                    height={200}
                    src={logo}
                    alt="logo"/>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col items-center px-5'>
                    <h3 className='font-bold text-5xl'>2</h3>
                    <span className='font-semibold text-xl'>Eficiencia</span>
                </div>
                <div className='flex flex-col items-center grow px-5'>
                    <h3 className='font-bold text-5xl'>2</h3>
                    <span className='font-semibold text-xl'>Eficiencia</span>
                </div>
                <div className='flex flex-col items-center px-5'>
                    <h3 className='font-bold text-5xl'>2</h3>
                    <span className='font-semibold text-xl'>Eficiencia</span>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <button className='w-12 h-12 rounded-3xl bg-black text-white items-center font-bold text-4xl text-center flex justify-center'>
                    <PlusIcon
                        fill='#fff'
                        hw='134'
                        
                    />
                    
                </button>
                <h3>Agregar</h3>
            </div>

        </header>
    )
}