import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

export const SidebarData =  [
    {
      title: 'Home',
      path:  '/profile',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
        title: 'Ingredient',
        path:  '/ingredient',
        icon: <BiIcons.BiFoodMenu />,
        cName: 'nav-text'
    },
    {
        title: 'Create List',
        path:  '/create-list',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'View List',
        path:  '/view-list',
        icon: <AiIcons.AiOutlineFolderView />,
        cName: 'nav-text'
    }
]


