
import { Component, ViewChild } from '@angular/core';
import { CadastroProfisionalDialogComponent } from '../cadastro-profisional-dialog/cadastro-profisional-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Profissional } from 'src/app/componentes/profissional/model/Profissional';
import { ProfissionalService } from '../service/ProfissionalService';

@Component({
  selector: 'app-crud-profissional',
  templateUrl: './crud-profissional.component.html',
  styleUrls: ['./crud-profissional.component.scss'],
  providers:[ProfissionalService]
})
export class CrudProfissionalComponent {
  @ViewChild(MatTable)
  idTable!: MatTable<any>
  islteracao: boolean = false;
  displayedColumns: string[] = ['nome', 'endereco', 'telefone', 'celular', 'funcao', 'acoes'];
  dataSource!: Profissional[];

  constructor(
    public dialog: MatDialog,
    public profissionalService: ProfissionalService
    ) {
      this.profissionalService.getProfissional()
        .subscribe((data: Profissional[]) => {
          console.log(data);
          this.dataSource = data;
        });
    }

  ngOnInit(): void {
  }

  openDialog(element: Profissional | null): void {
    const dialogRef = this.dialog.open(CadastroProfisionalDialogComponent, {
      width: '450px',
      data: element === null ? {
        id: null,
        nome: '',
        endereco: '',
        telefone: '',
        celular: '',
        funcao: ''
      } :  {
        id: element.id,
        nome: element.nome,
        endereco: element.endereco,
        telefone: element.telefone,
        celular: element.celular,
        funcao: element.funcao
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result);
        if (this.dataSource.map(p => p.id).includes(result.id)) {
          this.profissionalService.editProfissional(result)
            .subscribe((data: Profissional) => {
              const index = this.dataSource.findIndex(p => p.id === data.id);
              this.dataSource[index] = data;
              this.idTable.renderRows();
            });
        } else {
          this.profissionalService.createProfissional(result)
            .subscribe((data: Profissional) => {
              this.dataSource.push(data);
              this.idTable.renderRows();
            });
        }
      }
    });
  }

  deletarProfissional(id: number): void{
    this.dataSource = this.dataSource.filter(p => p.id !== id);
  }

  editarProfissional(element: Profissional): void{
    this.islteracao = true
    this.openDialog(element);
  }

}
