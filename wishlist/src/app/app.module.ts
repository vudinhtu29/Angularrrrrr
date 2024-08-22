import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from "./wish-filter/wish-filter.component";
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
@NgModule({
  declarations: [AppComponent,WishListComponent,AddWishFormComponent, WishFilterComponent,WishListItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule {}
