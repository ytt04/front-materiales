import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../models/ciudad.model';
import { CiudadService } from '../../services/ciudad.service';
import { DepartamentoService } from '../../services/departamento.service';
import { Departamento } from '../../models/departamento.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ciudades',
  standalone:false,
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {
  ciudad = new Ciudad();
  ciudades: Ciudad[] = [];
  departamentos: Departamento[] = [];

  constructor(
    private ciudadService: CiudadService,
    private depService: DepartamentoService
  ) {}

  ngOnInit() {
    this.ciudadService.getAll().subscribe(res => this.ciudades = res.data);
    this.depService.getAll().subscribe(res => this.departamentos = res.data);
  }

  guardar() {
    this.ciudadService.create(this.ciudad).subscribe(res => {
      Swal.fire('Éxito', res.message, 'success');
      this.ngOnInit();
      this.ciudad = new Ciudad();
    });
  }
}
