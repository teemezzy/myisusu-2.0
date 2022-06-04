import { BsChevronDown } from 'react-icons/bs'

export const navList = [
  {
    id: 1,
    name: 'Products',
    path: '/products',
    icons: <BsChevronDown />,
    dropMenu: [
      {
        link1: 'Cluster',
        link2: 'Thrift Service',
        link3: 'Careers',
      },
    ],
  },
  {
    id: 2,
    name: 'Learn',
    path: '/learn',
    icons: <BsChevronDown />,
  },
  {
    id: 3,
    name: 'Support',
    path: '/support',
  },
  {
    id: 4,
    name: 'FAQs',
    path: '/faqs',
  },
]

export const sideList = [{
  
}]
