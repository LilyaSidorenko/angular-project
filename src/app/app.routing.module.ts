import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent, ReviewComponent, AnswersComponent } from './components';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'questions',
        pathMatch: 'full'
    }, {
        path: 'questions',
        component: QuestionsComponent
    },
    {
        path: 'review',
        component: ReviewComponent
    }, {
        path: 'answers',
        component: AnswersComponent
    } ];
export let appRouterComponents = [QuestionsComponent, ReviewComponent, AnswersComponent];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutingModule {}