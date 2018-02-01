import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { InterviewSettingService } from './interview-setting.service';
import { SettingListComponent } from './setting-list/setting-list.component';
import { SettingDetailComponent } from './setting-detail/setting-detail.component';
import { SettingFilterComponent } from './setting-filter/setting-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    
    SettingListComponent,
    SettingDetailComponent,
    SettingFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [InterviewSettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
