
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Estabelecimento } from 'src/app/componentes/estabelecimento/model/Estabelecimento';
import { CadastroEstabelecimentoDialogComponent } from '../cadastro-estabelecimento-dialog/cadastro-estabelecimento-dialog.component';
import { EstabelecimentoService } from '../service/EstabelecimentoService';


@Component({
  selector: 'app-crud-estabelecimento',
  templateUrl: './crud-estabelecimento.component.html',
  styleUrls: ['./crud-estabelecimento.component.scss']
})
export class CrudEstabelecimentoComponent {
  @ViewChild(MatTable)
  idTable!: MatTable<any>
  islteracao: boolean = false;
  displayedColumns: string[] = ['nome', 'endereco', 'telefone', 'acoes'];
  dataSource!: Estabelecimento[];

  constructor(
    public dialog: MatDialog,
    public estabelecimentoService: EstabelecimentoService
    ) {
      this.estabelecimentoService.getEstabelecimento()
        .subscribe((data: Estabelecimento[]) => {
          console.log(data);
          this.dataSource = data;
        });
    }

  ngOnInit(): void {
  }

  openDialog(element: Estabelecimento | null): void {
    const dialogRef = this.dialog.open(CadastroEstabelecimentoDialogComponent, {
      width: '450px',
      data: element === null ? {
        id: null,
        nome: '',
        endereco: '',
        telefone: ''
      } :  {
        id: element.id,
        nome: element.nome,
        endereco: element.endereco,
        telefone: element.telefone
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.dataSource.push(result);
        this.idTable.renderRows();
      }
    });
  }

  deletarEstabelecimento(id: number): void{
    this.dataSource = this.dataSource.filter(p => p.id !== id);
  }

  editarEstabelecimento(element: Estabelecimento): void{
    this.islteracao = true
    this.openDialog(element);
  }

}
