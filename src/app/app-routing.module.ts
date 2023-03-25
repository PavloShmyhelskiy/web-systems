import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { NotFoundComponent } from './notfound/notfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ItemComponent } from './item/item.component';
import { MainComponent } from './main/main.component';
import { Title } from '@angular/platform-browser';
import { NewUserComponent } from './new-user/new-user.component';

const routes:Routes = [
  {path: 'home', component: MainComponent, title: 'Home'},
  {path: 'about', component: AboutusComponent, title: 'About us'},
  {path: 'services', component: ServicesComponent, title: 'Services'},
  {path: 'contacts', component: ContactsComponent, title: 'Contacts'},
  {path: 'users/:id', component: ItemComponent, title: 'User'},
  {path: 'newuser', component: NewUserComponent, title: 'Add new User'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent, title: '404'}
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title}`)
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
