import { Component, OnInit } from '@angular/core';
import { Material } from '../../models/material.model';
import { Ciudad } from '../../models/ciudad.model';
import { MaterialService } from '../../services/material.service';
import { CiudadService } from '../../services/ciudad.service';
import Swal from 'sweetalert2';

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

  constructor(
    private service: MaterialService,
    private ciudadService: CiudadService
  ) {}

  ngOnInit() {
    this.service.getAll().subscribe(res => this.materiales = res.data);
    this.ciudadService.getAll().subscribe(res => this.ciudades = res.data);
  }

  guardar() {
    this.service.create(this.material).subscribe(res => {
      Swal.fire('Éxito', res.message, 'success');
      this.ngOnInit();
      this.material = new Material();
    });
  }
}

