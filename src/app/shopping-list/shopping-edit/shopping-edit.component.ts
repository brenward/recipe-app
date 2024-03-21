import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput',{static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static: true}) amountInputRef: ElementRef;

  onAddItem(){
    this.ingredientAdded.emit(
      new Ingredient(
        this.nameInputRef.nativeElement.value, 
        this.amountInputRef.nativeElement.value));
  }
}
