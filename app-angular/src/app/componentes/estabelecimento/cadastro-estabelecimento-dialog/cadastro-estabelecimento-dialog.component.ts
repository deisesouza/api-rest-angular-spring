import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Estabelecimento } from 'src/app/componentes/estabelecimento/model/Estabelecimento';
import { CrudEstabelecimentoComponent } from '../view/crud-estabelecimento.component';


@Component({
  selector: 'app-cadastro-estabelecimento-dialog',
  templateUrl: './cadastro-estabelecimento-dialog.component.html',
  styleUrls: ['./cadastro-estabelecimento-dialog.component.scss']
})
export class CadastroEstabelecimentoDialogComponent implements OnInit{
  element!: Estabelecimento;
  isAlteracao!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Estabelecimento,
    public dialogRef: MatDialogRef<CrudEstabelecimentoComponent>,
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
