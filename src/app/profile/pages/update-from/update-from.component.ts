import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from '../../../auth/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-update-from',
  templateUrl: './update-from.component.html',
  styleUrls: ['./update-from.component.css']
})
export class UpdateFromComponent implements OnInit {

  userInfo!: User;

  imageName!: string;

  imageFile!: File;

  userData: FormData = new FormData();

  constructor(private userService: UserService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.userService.getUserInfo()
      .subscribe(res => this.userInfo = res.data);
  }

  getImage(event: any) {
    this.imageName = event.target.files[0].name;
    this.imageFile = event.target.files[0];
  }

  updateInfo() {
    if (this.imageFile) {
      this.userData.append('image', this.imageFile);
    }
    this.userData.append('data', JSON.stringify(this.userInfo));
    this.userService.updateUserInfo(this.userData, this.userInfo.uuid!)
      .subscribe( res => {
        this.showSnackBar('Your info has been updated');
        setTimeout(() => {
          window.location.reload();
        }, 1100);
      }
    );
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1000
    });
  }
}
