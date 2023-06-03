import { Vinculo } from './../model/Vinculo';
import { VinculoService } from './../service/VinculoService';
import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CadastroDialogComponent } from '../cadastro-vinculo-dialog/cadastro-vinculo-dialog.component';

@Component({
  selector: 'app-lista-vinculo',
  templateUrl: './lista-vinculo.component.html',
  styleUrls: ['./lista-vinculo.component.scss']
})
export class ListaVinculoComponent {
  @ViewChild(MatTable)
  idTable!: MatTable<any>
  islteracao: boolean = false;
  displayedColumns: string[] = ['nome_profissional', 'nome_estabelecimento'];
  dataSource!: Vinculo[];

  constructor(
    public dialog: MatDialog,
    public vinculoService: VinculoService
    ) {
      this.vinculoService.getVinculo()
        .subscribe((data: Vinculo[]) => {
          console.log(data);
          this.dataSource = data;
        });
    }

  ngOnInit(): void {
  }

  openDialog(element: Vinculo | null): void {
    const dialogRef = this.dialog.open(CadastroDialogComponent, {
      width: '450px',
      data: element === null ? {
        id: null,
        nome_profissional: '',
        nome_estabelecimento: ''
      } :  {
        id: element.id,
        nome_profissional: element.nome_profissional,
        nome_estabelecimento: element.nome_estabelecimento
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.dataSource.push(result);
        this.idTable.renderRows();
      }
    });
  }

}
