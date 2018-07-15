import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { SettingsPage } from '../settings/settings';
import { MainPage } from '../main/main';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MainPage;
  tab2Root = MapPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
