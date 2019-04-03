import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { pizzadbService } from 'src/app/service/pizzadb.service';




@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 
  pizza: [];
  Cardapio: [];
  param:string;

  constructor(private mDBServices: pizzadbService, private loadingController: LoadingController){}

  ngOnInit() {
    this.consultaPizzas();
  }

  async consultaPizzas(){
  const loading = await this.loadingController.create({
    message: 'Carregando ...'
  });
  // exibier caixa de dialogo
  await loading.present();
  

  await this.mDBServices.getPizzas().subscribe(
    data=>{
      this.Cardapio = data;
      loading.dismiss();
      console.log(this.Cardapio);
      console.log(this.param);
    }
  ).add();

  }

  

}

