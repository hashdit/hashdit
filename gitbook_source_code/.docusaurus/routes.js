import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/hashdit/blog',
    component: ComponentCreator('/hashdit/blog', '047'),
    exact: true
  },
  {
    path: '/hashdit/blog/archive',
    component: ComponentCreator('/hashdit/blog/archive', '0cc'),
    exact: true
  },
  {
    path: '/hashdit/blog/more',
    component: ComponentCreator('/hashdit/blog/more', '7f2'),
    exact: true
  },
  {
    path: '/hashdit/markdown-page',
    component: ComponentCreator('/hashdit/markdown-page', '194'),
    exact: true
  },
  {
    path: '/hashdit/docs',
    component: ComponentCreator('/hashdit/docs', '84a'),
    routes: [
      {
        path: '/hashdit/docs/category/diting-api',
        component: ComponentCreator('/hashdit/docs/category/diting-api', 'b04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hashdit/docs/diting-api/api-access',
        component: ComponentCreator('/hashdit/docs/diting-api/api-access', '126'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hashdit/docs/diting-api/api-inputs',
        component: ComponentCreator('/hashdit/docs/diting-api/api-inputs', 'e80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hashdit/docs/diting-api/api-outputs',
        component: ComponentCreator('/hashdit/docs/diting-api/api-outputs', 'fd4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hashdit/docs/diting-api/data',
        component: ComponentCreator('/hashdit/docs/diting-api/data', '54b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hashdit/docs/diting-api/parameters',
        component: ComponentCreator('/hashdit/docs/diting-api/parameters', 'ef5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hashdit/docs/intro',
        component: ComponentCreator('/hashdit/docs/intro', '53d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/hashdit/',
    component: ComponentCreator('/hashdit/', '72f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
