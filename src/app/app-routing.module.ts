import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  { path: 'categories/:category_id', loadChildren: './subjects/subjects.module#SubjectsPageModule' },
  { path: 'subject/:subject_id', loadChildren: './subjectdetail/subjectdetail.module#SubjectdetailPageModule' },
  { path: 'conversation', loadChildren: './conversation/conversation.module#ConversationPageModule' },
  { path: 'homeworks', loadChildren: './pages/homework/homework.module#HomeworkPageModule' },
  { path: 'homework/:homework_id', loadChildren: './pages/homeworkdetail/homeworkdetail.module#HomeworkdetailPageModule' },
  { path: 'subjectsall', loadChildren: './subjectsall/subjectsall.module#SubjectsallPageModule' },
  { path: 'homeworkadd/:subject_id', loadChildren: './homeworkadd/homeworkadd.module#HomeworkaddPageModule' },
  { path: 'homework/files/:homework_id', loadChildren: './filesadd/filesadd.module#FilesaddPageModule' },
  


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
