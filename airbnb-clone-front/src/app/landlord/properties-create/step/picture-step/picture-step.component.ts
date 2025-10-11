import { Component, EventEmitter, input, Output } from '@angular/core';
import { NewListingPicture } from '../../../model/picture.model';
import { InputTextModule } from "primeng/inputtext";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-picture-step',
  standalone: true,
  imports: [InputTextModule, FaIconComponent],
  templateUrl: './picture-step.component.html',
  styleUrl: './picture-step.component.scss'
})
export class PictureStepComponent {

  pictures = input.required<Array<NewListingPicture>>();

  @Output()
  pictureChange = new EventEmitter<Array<NewListingPicture>>();

  @Output()
  stepValidityChange = new EventEmitter<boolean>();

  onUploadNewPicture(target: EventTarget | null){
    const picturesFileList = this.extractFileFromTarget(target);
    if(picturesFileList!=null){
      for(let i=0;i<picturesFileList.length;i++){
        const picture = picturesFileList[i];
        if(picture!==null){
          const displayPicture: NewListingPicture = {
            file: picture,
            urlDisplay: URL.createObjectURL(picture)
          }
          this.pictures().push(displayPicture);
        }

      }
      this.pictureChange.emit(this.pictures());
      this.validatePictures();
    }
  }

  validatePictures() {
    if(this.pictures().length>=5){
      this.stepValidityChange.emit(true);
    } else{
      this.stepValidityChange.emit(false);
    }
  }

  extractFileFromTarget(target: EventTarget | null) {
    const htmlInputtarget = target as HTMLInputElement;
    if(target==null || htmlInputtarget.files==null){
      return null;
    }
    return htmlInputtarget.files;
  }

  onTrashPicture(pictureToDelete: NewListingPicture) {
    const indexToDelete = this.pictures().findIndex(picture => picture.file.name === pictureToDelete.file.name);
    this.pictures().splice(indexToDelete,1);
    this.validatePictures();

  }
}
