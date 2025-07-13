import { Ciudad } from '../models/ciudad.model';
export class Material {
  id?: number;
  nombre = '';
  descripcion = '';
  tipo = '';
  estado = '';
  precio = 0;
  fechaCompra?: string;
  fechaVenta?: string;
  ciudad = new Ciudad();
}