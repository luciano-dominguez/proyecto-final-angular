import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  
})
export class UsersComponent {
  //userName ='';
    

  usuarios: User[] = [
    {
    id: 1,
    name: 'Luciano',
    lastName: 'Dominguez',
    email: 'luciano@gmail.com'
  },
];


constructor (
  private matDialog: MatDialog) {}

  openUserDialog(): void{
    this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({next:(v) => {
      console.log('VALOR: ',v);
      if (!!v) {

        this.usuarios = [
          ...this.usuarios,
          {
            ...v,
                id: new Date().getTime(),
          }
        ]
      }
    }});

  }

  onEditUser(user: User): void {
    this.matDialog.open(UsersDialogComponent,{
      data:user,
    }).afterClosed().subscribe({
      next: (v) => {
        if (!!v){
          const arrayNuevo = [...this.usuarios];

          const indicetoEdit = arrayNuevo.findIndex((u) => u.id === user.id);

          arrayNuevo[indicetoEdit] = {...arrayNuevo[indicetoEdit], ...v}

          this.usuarios = [...arrayNuevo];


        }
      }
    })
    
    ;
  }

  onDeleteUser(Userid: number): void {
    this.usuarios = this.usuarios.filter((u) => u.id !== Userid );
  }
}

