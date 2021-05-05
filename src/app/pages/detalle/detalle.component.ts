  
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {  SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Imagen } from 'src/app/models/imagen';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() index;

  imagenes: Imagen[] = [];

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  constructor(
    public activeModal: NgbActiveModal,
    private imagenService: ImageService
  ) { }

  ngOnInit() {
    this.config.initialSlide = this.index;
    this.imagenService.list().subscribe(
      data => {
        this.imagenes = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
