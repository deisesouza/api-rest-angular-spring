import { Component, Inject, OnInit } from '@angular/core';
import { Vinculo } from '../model/Vinculo';
import { ListaVinculoComponent } from '../view/lista-vinculo.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-dialog',
  templateUrl: './cadastro-vinculo-dialog.component.html',
  styleUrls: ['./cadastro-vinculo-dialog.component.scss']
})
export class CadastroDialogComponent implements OnInit{
    element!: Vinculo;
    isAlteracao!: boolean;

    constructor(
      @Inject(MAT_DIALOG_DATA)
      public data: Vinculo,
      public dialogRef: MatDialogRef<ListaVinculoComponent>,
    ) {}

    ngOnInit(): void {
      if (this.data.id != null) {
        this.isAlteracao = true;
      } else {
        this.isAlteracao = false;
      }
    }

    onCancel(): void {
      this.dialogRef.close();
    }

  }
