import { Component, OnInit } from '@angular/core';
import { Material } from '../../models/material.model';
import { Ciudad } from '../../models/ciudad.model';
import { MaterialService } from '../../services/material.service';
import { CiudadService } from '../../services/ciudad.service';
import Swal from 'sweetalert2';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-materiales',
  standalone: false,
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.scss']
})
export class MaterialesComponent implements OnInit {
  material = new Material();
  materiales: Material[] = [];
  ciudades: Ciudad[] = [];
  estados: string[] = ['activo', 'disponible', 'asignado'];
  tiposMaterial: string[] = ['eléctrico', 'electrónico', 'mecánico', 'industrial', 'herramienta'];
  tipoSeleccionado: string = '';
  ciudadSeleccionada: string = '';
  fechaSeleccionada: string = '';
  modalBusquedaRef: any;

  modalRef: any;


  constructor(
    private service: MaterialService,
    private ciudadService: CiudadService
  ) {}

  ngOnInit() {
    this.service.getAll().subscribe(res => this.materiales = res.data);
    this.ciudadService.getAll().subscribe(res => this.ciudades = res.data);
  }

abrirModalNuevo() {
    this.material = new Material();
    this.abrirModal();
  }

  editar(m: Material) {
    this.material = JSON.parse(JSON.stringify(m));
    this.abrirModal();
  }

  abrirModal() {
    const modalElement = document.getElementById('modalMaterial');
    if (modalElement) {
      this.modalRef = new bootstrap.Modal(modalElement);
      this.modalRef.show();
    }
  }

  guardar() {
    const operacion = this.material.id
      ? this.service.update(this.material.id, this.material)
      : this.service.create(this.material);

   operacion.subscribe(res => {
      Swal.fire({
        title: 'Éxito',
        text: res.message,
        icon: 'success',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        background: '#f4f6fb',
        color: '#333',
      });
      
      this.ngOnInit();
      this.material = new Material();
      if (this.modalRef) this.modalRef.hide();
    });

  }

  filtrarPorTipo() {
  if (this.tipoSeleccionado) {
    this.service.getByTipo(this.tipoSeleccionado).subscribe(res => {
      this.materiales = res.data;
    });
  } else {
    this.ngOnInit(); 
  }
}

filtrarPorCiudad() {
  if (this.ciudadSeleccionada) {
    this.service.getByCiudad(this.ciudadSeleccionada).subscribe(res => {
      this.materiales = res.data;
    });
  } else {
    this.ngOnInit(); 
  }
}

filtrarPorFecha() {
  if (this.fechaSeleccionada) {
    this.service.getByFecha(this.fechaSeleccionada).subscribe(res => {
      this.materiales = res.data;
    });
  } else {
    this.ngOnInit(); 
  }
}

abrirModalBusqueda() {
  const modalElement = document.getElementById('modalBusqueda');
  if (modalElement) {
    this.modalBusquedaRef = new bootstrap.Modal(modalElement);
    this.modalBusquedaRef.show();
  }
}

filtrarAvanzado() {
  this.service.getByFiltros(
    this.tipoSeleccionado || undefined,
    this.ciudadSeleccionada || undefined,
    this.fechaSeleccionada || undefined
  ).subscribe(res => {
    this.materiales = res.data;
    if (this.modalBusquedaRef) {
      this.modalBusquedaRef.hide(); 
    }
  });
}




}

