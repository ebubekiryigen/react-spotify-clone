import { Menu } from '@headlessui/react'
import { Icon } from 'components/Icons'

export default function Profile(){
    return(
    <Menu as="nav" className="relative" >
        {({open}) => (
            <>
                <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
                    <img className='w-8 h-8 rounded-full p-px mr-2 p-0.5' src='https://media.licdn.com/dms/image/C4D03AQGIEatWpVsq-Q/profile-displayphoto-shrink_400_400/0/1652880845050?e=1678924800&v=beta&t=r_2cAMB0Qoz34ETmvLWwwc_VNwLoUwDdvB3f9vAjjcs' />
                    <span className='text-sm font-semibold mr-2'>Ebubekir Yigen</span>
                    <span className={open && 'rotate-180'}>
                        <Icon size="16" name="dow" /> 
                    </span>
                </Menu.Button>
                <Menu.Items className="absolute top-full p-1 right-0 w-48 bg-active rounded translate-y-2 z-10 ">
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                        >
                        Account settings
                        <Icon name="ex" size="16" />
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                        >
                        Profile
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                        >
                        Logout
                        </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </>
        )}
    </Menu>
    )
}