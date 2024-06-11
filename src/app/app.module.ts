import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './books/book.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [AppComponent, BookListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ book: bookReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
