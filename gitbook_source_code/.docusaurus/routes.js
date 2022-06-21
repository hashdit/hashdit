import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '09f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '0f7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9ca'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '1a6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5c8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'c3a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'edf'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c13'),
    exact: true
  },
  {
    path: '/blog/more',
    component: ComponentCreator('/blog/more', '0f1'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a46'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3c6'),
    routes: [
      {
        path: '/docs/category/diting-api',
        component: ComponentCreator('/docs/category/diting-api', 'ad2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/diting-api/api-access',
        component: ComponentCreator('/docs/diting-api/api-access', '74e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/diting-api/api-inputs',
        component: ComponentCreator('/docs/diting-api/api-inputs', 'c84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/diting-api/api-outputs',
        component: ComponentCreator('/docs/diting-api/api-outputs', '7f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/diting-api/data',
        component: ComponentCreator('/docs/diting-api/data', '43e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/diting-api/parameters',
        component: ComponentCreator('/docs/diting-api/parameters', 'ff0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '9aa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
