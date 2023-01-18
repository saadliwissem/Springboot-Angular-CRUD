import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: ''
    }
  },
  {
    title: true,
    name: 'Clients'
  },
  {
    name: 'List of clients',
    url: '/clients',
    iconComponent: { name: 'cil-people' }
  },  
  {
    name: 'Add a new Client',
    url: '/clients/addClient',
    iconComponent: { name: 'cil-user-follow' },
    

  },
  {
    title: true,
    name: 'Articles'
  },
  {
    name: 'List of Articles',
    url: '/articles',
    iconComponent: { name: 'cil-user-follow' },
    badge: {
      color: 'info',
      text: ''
    }
  },
  //  {
  //    title: true,
  //    name: 'Theme'
  //  },
  //  {
  //    name: 'Colors',
  //    url: '/theme/colors',
  //    iconComponent: { name: 'cil-drop' }
  //  },
  //  {
  //    name: 'Typography',
  //    url: '/theme/typography',
  //    linkProps: { fragment: 'someAnchor' },
  //    iconComponent: { name: 'cil-pencil' }
  //  },
  //  {
  //    name: 'Components',
  //    title: true
  //  },
  //  {
  //    name: 'Base',
  //    url: '/base',
  //    iconComponent: { name: 'cil-puzzle' },
  //    children: [  
  //      {
  //        name: 'Tables',
  //        url: '/base/tables'
  //      },
  //    ]
  //  },
  //  {
  //    name: 'Buttons',
  //    url: '/buttons',
  //    iconComponent: { name: 'cil-cursor' },
    
  //  },
  //  {
  //    name: 'Forms',
  //    url: '/forms',
  //    iconComponent: { name: 'cil-notes' },
  //    children: [
      
  //      {
  //        name: 'Validation',
  //        url: '/forms/validation'
  //      }
  //    ]
  //  },
  //  {
  //    name: 'Charts',
  //    url: '/charts',
  //    iconComponent: { name: 'cil-chart-pie' }
  //  },
  
  //  {
  //    name: 'Notifications',
  //    url: '/notifications',
  //    iconComponent: { name: 'cil-bell' },
    
  //  },
  //  {
  //    name: 'Widgets',
  //    url: '/widgets',
  //    iconComponent: { name: 'cil-calculator' },
  //    badge: {
  //      color: 'info',
  //      text: 'NEW'
  //    }
  //  },
  //  {
  //    title: true,
  //    name: 'Extras'
  //  },
  //  {
  //    name: 'Pages',
  //    url: '/login',
  //    iconComponent: { name: 'cil-star' },
  //    children: [
  //      {
  //        name: 'Login',
  //        url: '/login'
  //      },
  //      {
  //        name: 'Register',
  //        url: '/register'
  //      },
  //      {
  //        name: 'Error 404',
  //        url: '/404'
  //      },
  //      {
  //        name: 'Error 500',
  //        url: '/500'
  //      }
  //    ]
  //  },
];
