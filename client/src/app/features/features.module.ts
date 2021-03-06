import { ClipboardModule } from 'ngx-clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin/admin.service';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarService } from './calendar/calendar.service';
import { DialogComponent } from './calendar/dialog/dialog.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureComponent } from './feature/feature.component';
import { FeatureService } from './feature/feature.service';
import { MemberComponent } from './member/member.component';
import { MemberService } from './member/member.service';
import { NoteComponent } from './note/note.component';
import { NoteService } from './note/note.service';
import { PostComponent } from './post/post.component';
import { PostService } from './post/post.service';

@NgModule({
  declarations: [
    AdminComponent,
    CalendarComponent,
    DialogComponent,
    FeatureComponent,
    MemberComponent,
    NoteComponent,
    PostComponent,
  ],
  imports: [
    ClipboardModule,
    CommonModule,
    FeaturesRoutingModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [
    AdminService,
    CalendarService,
    FeatureService,
    MemberService,
    NoteService,
    PostService,
  ],
  entryComponents: [
    DialogComponent,
  ],
})
export class FeaturesModule { }
