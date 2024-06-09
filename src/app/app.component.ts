import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angdularapp';
  total=0;
  qty=0;
  
  foodmenu=[
    {id:1,name:"دجاج",price:30,description:"دجاج مشوي على الفحم",img:"../assets/cheken.jpg"},
    {id:2,name:"دجاج",price:30,description:"دجاج شواية ",img:"../assets/cheken.jpg"},
    {id:3,name:"ايدام",price:20,description:"ايدام خضار مشكل",img:"../assets/edam.jpg"},
    {id:4,name:"ايدام",price:20,description:"ايدام  بالدجاج على الفرن",img:"../assets/edam2.jpg"}
  ]
  searchText = '';

  get filteredFoodMenu() {
    return this.foodmenu.filter(item =>
      item.name.includes(this.searchText)
    );
  }

  sum(event: any, price: number)
   {
    const isChecked:boolean = event.target.checked;
    if(isChecked){
      this.total +=price
      this.qty +=1
    }else{
      this.total -=price
      this.qty -=1
    }
}
}
