import { Component, EventEmitter, input, Output, ViewChild } from '@angular/core';
import { FormsModule, type NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import type { Description } from '../../../model/listing.model';
import type { NgForOfContext } from '@angular/common';

@Component({
  selector: 'app-description-step',
  standalone: true,
  imports: [InputTextModule,FormsModule,InputTextModule],
  templateUrl: './description-step.component.html',
  styleUrl: './description-step.component.scss'
})
export class DescriptionStepComponent {
  description = input.required<Description>();

  @Output()
  descriptionChange = new EventEmitter<Description>();

  @Output()
  stepValidityChange = new EventEmitter<boolean>();

  @ViewChild("formDescription")
  formDescription: NgForm | undefined;

  onTitleChange(newTitle: string){
    this.description().title = {value: newTitle};
    this.descriptionChange.emit(this.description());
    this.stepValidityChange.emit(this.validateForm());
  }

  onDescriptionChange(newDescription: string){
    this.description().description = {value: newDescription};
    this.descriptionChange.emit(this.description());
    this.stepValidityChange.emit(this.validateForm());
  }

  private validateForm(): boolean{
    if(this.formDescription){
      return this.formDescription?.valid!;
    }
    else{
      return false;
    }
  }
}
