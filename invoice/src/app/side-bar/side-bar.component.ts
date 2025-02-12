import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  output,
} from '@angular/core';
import { DataSharingServiceService } from '../data-sharing-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  @Input() businessName!: string;
  @Input() meanValue: boolean = false;
  @Output() closeSideBarEvent = new EventEmitter<boolean>();
  profile: boolean = true;

  private dataSharingService = inject(DataSharingServiceService);

  onPofileClick() {
    return (this.profile = !this.profile);
  }

  name = '';
  ngOnInit(): void {
    this.name = this.dataSharingService.getBusinessName();
  }

  closeSidebar() {
    this.closeSideBarEvent.emit();
  }
}
