import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/home/menu/menu.component';
import { MainComponent } from './componentes/home/main/main.component';
import { FooterComponent } from './componentes/home/footer/footer.component';
import { ListaVinculoComponent } from './componentes/vinculo/view/lista-vinculo.component';
import { CadastroDialogComponent } from './componentes/vinculo/cadastro-vinculo-dialog/cadastro-vinculo-dialog.component';
import { CrudProfissionalComponent } from './componentes/profissional/view/crud-profissional.component';
import { CadastroProfisionalDialogComponent } from './componentes/profissional/cadastro-profisional-dialog/cadastro-profisional-dialog.component';
import { CrudEstabelecimentoComponent } from './componentes/estabelecimento/view/crud-estabelecimento.component';
import { CadastroEstabelecimentoDialogComponent } from './componentes/estabelecimento/cadastro-estabelecimento-dialog/cadastro-estabelecimento-dialog.component';
import { UploadFotoComponent } from './componentes/profissional/upload-foto/upload-foto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    ListaVinculoComponent,
    CadastroDialogComponent,
    CrudProfissionalComponent,
    CadastroProfisionalDialogComponent,
    CrudEstabelecimentoComponent,
    CadastroEstabelecimentoDialogComponent,
    UploadFotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
