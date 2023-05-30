import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  buscando = false;
  ideas: string[] = ['Spiderman', 'Vengadores', 'La vida es bella']
  peliculas: Pelicula[] = [];
  constructor(private moviesService: MoviesService, private modalController: ModalController) { }

  buscar(event: any) {
    //console.log(event);
    const valor = event.detail.value;

    if (valor.lenght === 0){
      this.buscando = false;
      this.peliculas = [];
      return;
    }
    this.buscando = true;
    this.moviesService.buscarPeliculas(valor)
      .subscribe(resp => {
        console.log(resp);
        this.peliculas = resp.results;
        this.buscando = false;
      });
  }

  async verDetalle(id: number){
    const modal = await this.modalController.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }
}
