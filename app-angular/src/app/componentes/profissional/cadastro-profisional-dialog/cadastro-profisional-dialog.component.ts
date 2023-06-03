import { Profissional } from '../model/Profissional';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CrudProfissionalComponent } from '../view/crud-profissional.component';

@Component({
  selector: 'app-cadastro-profisional-dialog',
  templateUrl: './cadastro-profisional-dialog.component.html',
  styleUrls: ['./cadastro-profisional-dialog.component.scss']
})
export class CadastroProfisionalDialogComponent implements OnInit{
  element!: Profissional;
  isAlteracao!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Profissional,
    public dialogRef: MatDialogRef<CrudProfissionalComponent>,
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
