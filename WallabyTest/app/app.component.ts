import { Component }          from '@angular/core';

import './rxjs-extensions';

@Component({
    selector: 'my-app',

    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [
    ]
})
export class AppComponent {
    title = 'Line of Business';
}