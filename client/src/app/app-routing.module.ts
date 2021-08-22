import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { MemberDetailComponent } from './components/members/member-detail/member-detail.component';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},

  // These are the authenticated routes that a user must be logged
  // in to view them.
  {
    path: '',
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      {path: "members", component: MemberListComponent},
      {path: "members/:id", component: MemberDetailComponent},
      {path: "lists", component: ListsComponent},
      {path: "messages", component: MessagesComponent}
    ]
  },
  {path: "**", component: HomeComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
