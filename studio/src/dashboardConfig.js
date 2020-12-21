export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe0d585ea9c781b4b0ce395',
                  title: 'Sanity Studio',
                  name: 'bewerungsapp-studio',
                  apiId: '1a74044f-2961-4d52-b379-0158c049dd14'
                },
                {
                  buildHookId: '5fe0d5855687bdb1ccef3732',
                  title: 'Blog Website',
                  name: 'bewerungsapp',
                  apiId: '7966fa48-8dae-4c35-b7d5-aeb8bd1d3fa7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/UK090483/bewerungsApp',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://bewerungsapp.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
