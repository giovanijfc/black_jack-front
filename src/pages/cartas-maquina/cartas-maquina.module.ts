import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartasMaquinaPage } from './cartas-maquina';

@NgModule({
  declarations: [
    CartasMaquinaPage,
  ],
  imports: [
    IonicPageModule.forChild(CartasMaquinaPage),
  ],
})
export class CartasMaquinaPageModule {}
