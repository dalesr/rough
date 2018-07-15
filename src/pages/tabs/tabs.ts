import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PrefPage } from '../pref/pref';
import { InfoPage } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = InfoPage;
  tab3Root = PrefPage;

  constructor() {

  }
}
