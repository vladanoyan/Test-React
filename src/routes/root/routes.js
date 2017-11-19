import App from './App';
import HomePage from './HomePage';
import Contact from './Contact';
import Terms from './Terms';

export default [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/app',
    component: App,
    routes: [
      { path: '/app/contacts',
        component: Contact,
      },
      { path: '/app/terms',
        component: Terms,
      },
    ],
  },
];
