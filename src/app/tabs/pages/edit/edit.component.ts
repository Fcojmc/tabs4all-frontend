import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces/tab.interface';
import { TabsService } from '../../services/tabs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  tab!: Tab;
  
  constructor(private activatedRoute: ActivatedRoute,
              private tabsService: TabsService,
              private router: Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
          switchMap( ({ id }) => this.tabsService.getTabById(id) )
      )
      .subscribe( res => {
        this.tab = res.data;
      } 
    );
  }


  updateTab() {
    this.tabsService.updateTab(this.tab)
      .subscribe(res => this.showSnackBar('Tab updated!'));
  }

  deleteTab() {
    const dialog =  this.dialog.open( DialogComponent, {
      width: '350px',
      data: this.tab
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.tabsService.deleteTab(this.tab.id!)
            .subscribe(res => {
              this.router.navigate(['/tabs/list']);
            }, err => console.log(err)
          );
        }
      }
    );
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2500
    });
  }
}
