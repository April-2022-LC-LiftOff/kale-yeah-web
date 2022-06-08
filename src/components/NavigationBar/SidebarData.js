import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

import * as MdIconName  from "react-icons/md";

export const SidebarData =  [
    // {
    //   title: 'Home',
    //   path:  '/profile',
    //   icon: <AiIcons.AiFillHome />,
    //   cName: 'nav-text'
    // },
    {
        title: 'Ingredient',
        path:  '/ingredient',
        icon: <BiIcons.BiFoodMenu />,
        cName: 'nav-text'
    },
    {
        title: 'Create list',
        path:  '/create-list',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'View list',
        path:  '/view-list',
        icon: <AiIcons.AiOutlineFolderView />,
        cName: 'nav-text'
    },
    {
        title: 'Log out',
        path:  '/',
        icon: <MdIconName.MdLogout/>,
        cName: 'nav-text'
    },
]


