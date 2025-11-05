// avatar.component.ts
import { Component, input, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImgFallbackDirective } from './img-fallback.directive';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgClass, FontAwesomeModule, ImgFallbackDirective],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  imageUrl = input<string>();
  avatarSize = input<"avatar-sm" | "avatar-xl">();
  userName = input<string>(); // NEW: Pass user name for initials
  isAuthenticated = input<boolean>(false); // NEW: Pass authentication status

  showFallback = signal(false);

  // Computed property for user initials
  userInitials = computed(() => {
    const name = this.userName();
    if (!name) return '';

    // Get first letter of first and last name
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name[0].toUpperCase();
  });

  onImageFallback() {
    this.showFallback.set(true);
  }

  hasValidImageUrl(): boolean {
    const url = this.imageUrl();
    return url != null && url.trim() !== '';
  }
}
