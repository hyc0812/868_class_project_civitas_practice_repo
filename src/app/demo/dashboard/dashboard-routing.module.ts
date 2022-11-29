import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        loadChildren: () => import('./default/default.module').then((m) => m.DefaultModule)
      },
      {
        path: 'blogs',
        loadChildren: () => import('./blogs/blogs.module').then((m) => m.BlogsModule)
      },
      // {
      //   path: 'show-blog',
      //   loadChildren: () => import('./show-blog/show-blog.module').then((m) => m.ShowBlogModule)
      // },

      {
        path: 'create-post',
        loadChildren: () => import('./create-post/create-post.module').then((m) => m.CreatePostModule)
      },
      {
        path: 'active-members',
        loadChildren: () => import('./active-members/active-members.module').then((m) => m.ActiveMembersModule)
      },
      {
        path: 'faqs',
        loadChildren: () => import('./faqs/faqs.module').then((m) => m.FaqsModule)
      },
      {
        path: 'help',
        loadChildren: () => import('./help/help.module').then((m) => m.HelpModule)
      },
      {
        path: 'more',
        loadChildren: () => import('./more/more.module').then((m) => m.MoreModule)
      },
      // {
      //   path: 'search-result',
      //   loadChildren: () => import('./search-result/search-result.module').then((m) => m.SearchResultModule)
      // },
      {
        path: 'e-commerce',
        loadChildren: () => import('./ecommerce/ecommerce.module').then((m) => m.EcommerceModule)
      },
      {
        path: 'crm',
        loadChildren: () => import('./dash-crm/dash-crm.module').then((m) => m.DashCrmModule)
      },
      {
        path: 'analytics',
        loadChildren: () => import('./dash-analytics/dash-analytics.module').then((m) => m.DashAnalyticsModule)
      },
      {
        path: 'crypto',
        loadChildren: () => import('./dash-crypto/dash-crypto.module').then((m) => m.DashCryptoModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./dash-project/dash-project.module').then((m) => m.DashProjectModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
