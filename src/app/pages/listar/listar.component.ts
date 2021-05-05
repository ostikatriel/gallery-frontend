  
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Imagen } from 'src/app/models/imagen';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  imagenes: Imagen[] = [];

  constructor(
    private imageService: ImageService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
   this.cargarImagenes();
  }

  cargarImagenes(): void {
    this.imageService.list().subscribe(
      data => {
        this.imagenes = data;
      }
    );
  }

  borrar(id: number): void {
    this.spinner.show();
    this.imageService.delete(id).subscribe(
      data => {
        this.spinner.hide();
        this.cargarImagenes();
      },
      err => {
        this.spinner.hide();
        console.log(err);
      }
    );
  }

  abrirModal(i: number): void {
    const modalRef = this.modalService.open(DetalleComponent);
    modalRef.componentInstance.index = i;
  }

}
