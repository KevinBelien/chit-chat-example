import { provideHttpClient } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
	BrowserModule,
	bootstrapApplication,
} from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			RouterModule.forRoot(routes, {
				useHash: true,
				preloadingStrategy: PreloadAllModules,
			})
		),
		importProvidersFrom(IonicModule.forRoot()),
		importProvidersFrom(BrowserModule, BrowserAnimationsModule),
		provideHttpClient(),
	],
}).catch((err) => console.error(err));
