import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-messages',
  templateUrl: './recipe-messages.component.html',
  styleUrls: ['./recipe-messages.component.css']
})
export class RecipeMessagesComponent implements OnInit {

  message: string = '';
  sub!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {

    this.sub = this.route.data.subscribe(data => {
      this.message = this.ChosenMessage(data);
    });

    setTimeout(() => {
      this.ngOnDestroy();
      this.router.navigate(['../../recipe/recipe-list']);
    }, 2000);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ChosenMessage(msg: any): string {
    if(msg['add'] == 'add'){
      this.message = 'Recipe added successfully';
    }
    if(msg['delete'] == 'delete'){
      this.message = 'Recipe removed successfully';
    }
    return this.message;
  }
}
