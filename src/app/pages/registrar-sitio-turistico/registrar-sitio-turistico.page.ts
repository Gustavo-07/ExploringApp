import { Component, OnInit } from '@angular/core';
import { SitioTuristico } from 'src/models/sitioTuristico/sitioTuristico';
import { SitioturisticoService} from 'src/services/sitioTuristico/sitioturistico.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-sitio-turistico',
  templateUrl: './registrar-sitio-turistico.page.html',
  styleUrls: ['./registrar-sitio-turistico.page.scss'],
})
export class RegistrarSitioTuristicoPage implements OnInit {

  imagenUrl: string = "./assets/add-image.jpeg";
  imagenSubida: File = null;
  sitioTuristico: SitioTuristico = {
    nombre: '',
    tipo: '',
    descripcion: '',
    personalCargo: '',
    imagen: 'no esta todavia',
    ubicacion: ''
  };



  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private sitioTuristicoService: SitioturisticoService,
    private loadingcontroller: LoadingController
    ) { }

  ngOnInit() {
  }

  async onGuardar() {
    const loading = await this.loadingcontroller.create({message: 'Guardando....'});
    this.sitioTuristicoService.addSitioTuristico(this.sitioTuristico).then(() => {
      loading.dismiss();
      this.nav.navigateForward('/');
    });
  }

  entradaDeArchivo(file: FileList) {
    this.imagenSubida = file.item(0);

    // vista de imagen previa
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagenUrl = event.target.result;
    }
    reader.readAsDataURL(this.imagenSubida);
  }

}
