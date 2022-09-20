import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.css']
})
export class ShowWeatherComponent implements OnInit {

  listTarjetas: any[] = [
    {clima: "hola", ubicacion: "222", fecha:"12/12"},
    {clima: "unfo", ubicacion: "33", fecha:"12/13"}
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder,public dialogo: MatDialog) {
    this.form = this.fb.group({
      clima: ['', Validators.required],
      ubicacion: ['',[Validators.required,Validators.min(3),Validators.max(16)]],
      fecha: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarClima(){
    console.log(this.form)

    const climaTemp: any = {
      clima: this.form.get('clima')?.value,
      ubicacion: this.form.get('ubicacion')?.value,
      fecha: this.form.get('fecha')?.value,
    }
    this.listTarjetas.push(climaTemp)
    this.form.reset()
  }

  mostrarDialogo(index: number): void {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Deseas Eliminar?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.deleteWeather(index)
        }
      });
  }

  deleteWeather(index: number){
    console.log(index);

    this.listTarjetas.splice(index,1)
  }
}
