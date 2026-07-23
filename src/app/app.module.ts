import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { HomeComponent } from './component/home/home.component';
import { ArticleThumbnailComponent } from './component/article-thumbnail/article-thumbnail.component';
import { CategoryComponent } from './component/category/category.component';
import { SuggestedArticlesComponent } from './component/suggested-articles/suggested-articles.component';
import { ArticleDetailsComponent } from './component/article-details/article-details.component';
import { OpenArticleDirective } from './component/open-article.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    HomeComponent,
    ArticleThumbnailComponent,
    CategoryComponent,
    SuggestedArticlesComponent,
    ArticleDetailsComponent,
    OpenArticleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
