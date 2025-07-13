import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento.model';
import { DepartamentoService } from '../../services/departamento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departamentos',
  standalone: false,
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {
  departamento = new Departamento();
  departamentos: Departamento[] = [];

  constructor(private service: DepartamentoService) {}

  ngOnInit() {
    this.service.getAll().subscribe(res => this.departamentos = res.data);
    console.log(this.service.getAll)
  }

  guardar() {
    this.service.create(this.departamento).subscribe(res => {
      Swal.fire('Éxito', res.message, 'success');
      this.ngOnInit();
      this.departamento = new Departamento();
      console.log("apto",this.departamento)
    });
  }
}
