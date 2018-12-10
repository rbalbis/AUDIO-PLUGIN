import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PluginListComponent } from "./plugin-list/plugin-list.component";
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CreatePluginComponent } from "./create-plugin/create-plugin.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FirebaseFilterPipe } from "./firebase-filter.pipe";
import { PluginDetailsComponent } from "./plugin-details/plugin-details.component";
import { AuthentificationComponentComponent } from "./authentification-component/authentification-component.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "plugin-list", component: PluginListComponent },
  { path: "create-plugin", component: CreatePluginComponent },
  { path: "plugin-details/:id", component: PluginDetailsComponent }

  //{ path: '**', component: AppComponent },
];

export const config = {
  apiKey: "AIzaSyArAk9z4cmj_RL1l8GdfBdT2b2b4GDql0U",
  authDomain: "audio-plugin.firebaseapp.com",
  databaseURL: "https://audio-plugin.firebaseio.com",
  projectId: "audio-plugin",
  storageBucket: "audio-plugin.appspot.com",
  messagingSenderId: "923012411331"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PluginListComponent,
    CreatePluginComponent,
    FirebaseFilterPipe,
    PluginDetailsComponent,
    AuthentificationComponentComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
