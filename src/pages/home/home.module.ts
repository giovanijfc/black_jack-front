import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage), LottieAnimationViewModule]
})
export class HomeModule{   
}     
