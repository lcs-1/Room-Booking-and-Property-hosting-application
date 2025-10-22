import { Component, EventEmitter, input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import type { Step } from '../../landlord/properties-create/step.model';

@Component({
  selector: 'app-footer-step',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer-step.component.html',
  styleUrl: './footer-step.component.scss'
})
export class FooterStepComponent {
  currentStep = input.required<Step>();
  loading = input<boolean>(false);
  isAllStepsValid = input<boolean>(false);
  labelFinishedBtn = input<string>("Finish");

  @Output()
  finish = new EventEmitter<boolean>();
  @Output()
  previous = new EventEmitter<boolean>();
  @Output()
  next = new EventEmitter<boolean>();

  onFinish(): void {
    this.finish.emit(true);
  }

  onPrevious(): void {
    this.previous.emit(true);
  }

  onNext(): void {
    this.next.emit(true);
  }

}
