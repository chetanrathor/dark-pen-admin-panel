import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './cmp/login/login.component';
import { MainComponent } from './cmp/main/main.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
{}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
