import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// 引入element UI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular/release/element-angular.module';
// 引入路由模块
import { AppRoutingModule } from './app.router';
// 引入全局方法
import { MyToolsService, MyHttpService } from '../shared/services';
// 引入自定义管道
import { SliceStrPipe } from '../shared/pipe';
// 引入页面 
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';

const pipe = [
  SliceStrPipe
]
@NgModule({
  declarations: [
    ...pipe,
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    MainLayoutComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ElModule.forRoot(),
    HttpModule
  ],
  providers: [
    MyToolsService,
    MyHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }