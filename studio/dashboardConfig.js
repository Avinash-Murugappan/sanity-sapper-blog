export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6144cec78051b67d3d5cefbc',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-4oqxgyqq',
                  apiId: 'e40cebd6-ce6c-4f50-acc1-14aa443318d7'
                },
                {
                  buildHookId: '6144cec88f7fc680cb93fe1b',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-vajgtbkq',
                  apiId: 'cfa84af0-1328-4d93-8e0b-764d0aed9377'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Avinash-Murugappan/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-vajgtbkq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
