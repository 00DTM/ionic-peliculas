import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';


@NgModule({
  declarations: [SlideshowBackdropComponent,SlideshowPosterComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [SlideshowBackdropComponent,SlideshowPosterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
