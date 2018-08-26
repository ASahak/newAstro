import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseConfig } from '../environments/firebase.config';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import {NgPipesModule} from 'ngx-pipes';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

//Armenia Components
import { ArmeniaPageComponent } from './components/armenia-page/armenia-page.component';
import { AstronomicPageComponent } from './components/astronomic-page/astronomic-page.component';
import { CityPageComponent } from './components/armenia-page/city-page/city-page.component';
import { EditArmCityComponent } from './components/armenia-page/city-page/edit-arm-city/edit-arm-city.component';
import { EditArmProvinceComponent } from './components/armenia-page/province-page/edit-arm-province/edit-arm-province.component';
import { EditArmPoolComponent } from './components/armenia-page/pools-page/edit-arm-pool/edit-arm-pool.component';
import { EditArmRiverComponent } from './components/armenia-page/rivers-page/edit-arm-river/edit-arm-river.component';
import { ProvincePageComponent } from './components/armenia-page/province-page/province-page.component';
import { RiversPageComponent } from './components/armenia-page/rivers-page/rivers-page.component';
import { PoolsPageComponent } from './components/armenia-page/pools-page/pools-page.component';
import { EditArmMountainComponent } from './components/armenia-page/mountains-page/edit-arm-mountain/edit-arm-mountain.component';
import { MountainsPageComponent } from './components/armenia-page/mountains-page/mountains-page.component';
import { ArmeniaHomePageComponent } from './components/armenia-page/armenia-home-page/armenia-home-page.component';
//Armenia Components

//Geographic Components
import { GeographicPageComponent } from './components/geographic-page/geographic-page.component';
import { WorldComponent } from './components/geographic-page/world/world.component';
import { ContinentialPageComponent } from './components/geographic-page/world/continential-page/continential-page.component';
//Icelands Component
import { EditAllIcelandsComponent } from './components/geographic-page/world/island-page/edit-all-icelands/edit-all-icelands.component';
import { IslandPageComponent } from './components/geographic-page/world/island-page/island-page.component';
import { OceanPageComponent } from './components/geographic-page/world/ocean-page/ocean-page.component';
import { StraitPageComponent } from './components/geographic-page/world/strait-page/strait-page.component';
import { TheFirstOnePageComponent } from './components/geographic-page/world/the-first-one-page/the-first-one-page.component';
import { ResulationPageComponent } from './components/geographic-page/world/resulation-page/resulation-page.component';
// Dependent Component
import { DependentAreaPageComponent } from './components/geographic-page/world/dependent-area-page/dependent-area-page.component';
import { EditDependentsComponent } from './components/geographic-page/world/dependent-area-page/edit-dependents/edit-dependents.component';
// Dependent Component

// Aglomeration Component
import { EditAglomerationsComponent } from './components/geographic-page/world/aglomeration-page/edit-aglomerations/edit-aglomerations.component';
import { AglomerationPageComponent } from './components/geographic-page/world/aglomeration-page/aglomeration-page.component';
// Aglomeration Component

// Dictionary Component
import { DictionaryGeoPageComponent } from './components/geographic-page/world/dictionary-geo-page/dictionary-geo-page.component';
import { EditDictionaryComponent } from './components/geographic-page/world/dictionary-geo-page/edit-dictionary/edit-dictionary.component';
// Dictionary Component

// Interesing Component
import { InteresingGeoPageComponent } from './components/geographic-page/world/interesing-geo-page/interesing-geo-page.component';
import { EditInteresingComponent } from './components/geographic-page/world/interesing-geo-page/edit-interesing/edit-interesing.component';
// Interesing Component

import { GeographicHomePageComponent } from './components/geographic-page/world/geographic-home-page/geographic-home-page.component';

    //Continential Component
    import { ContinentialHomePageComponent } from './components/geographic-page/world/continential-page/continential-home-page/continential-home-page.component';
    import { ContinentialAsiaPageComponent } from './components/geographic-page/world/continential-page/continential-asia-page/continential-asia-page.component';
    import { ContinentialEuropaPageComponent } from './components/geographic-page/world/continential-page/continential-europa-page/continential-europa-page.component';
    import { ContinentialAfricaPageComponent } from './components/geographic-page/world/continential-page/continential-africa-page/continential-africa-page.component';
    import { ContinentialAustraliaPageComponent } from './components/geographic-page/world/continential-page/continential-australia-page/continential-australia-page.component';
    import { ContinentialAntarktidaPageComponent } from './components/geographic-page/world/continential-page/continential-antarktida-page/continential-antarktida-page.component';
    import { ContinentialNorthAmericaPageComponent } from './components/geographic-page/world/continential-page/continential-north-america-page/continential-north-america-page.component';
    import { ContinentialSouthAmericaPageComponent } from './components/geographic-page/world/continential-page/continential-south-america-page/continential-south-america-page.component';
    import { EditContinentsComponent } from './components/geographic-page/world/continential-page/continential-home-page/edit-continents/edit-continents.component';
    import { EditAllContinentsComponent } from './components/geographic-page/world/continential-page/edit-all-continents/edit-all-continents.component';
// Image Upload
    import { FileUploadAsiaComponent } from './components/geographic-page/world/continential-page/continential-asia-page/file-upload/file-upload.component';
    import { FileUploadEuropaComponent } from './components/geographic-page/world/continential-page/continential-europa-page/file-upload/file-upload.component';
    import { FileUploadAfricaComponent } from './components/geographic-page/world/continential-page/continential-africa-page/file-upload/file-upload.component';
    import { FileUploadAustraliaComponent } from './components/geographic-page/world/continential-page/continential-australia-page/file-upload/file-upload.component';
    import { FileUploadAntarktidaComponent } from './components/geographic-page/world/continential-page/continential-antarktida-page/file-upload/file-upload.component';
    import { FileUploadNorthAmericaComponent } from './components/geographic-page/world/continential-page/continential-north-america-page/file-upload/file-upload.component';
    import { FileUploadSouthAmericaComponent } from './components/geographic-page/world/continential-page/continential-south-america-page/file-upload/file-upload.component';
    import { FileUploadStateAll } from './components/geographic-page/world/continential-page/state-all-continents/file-upload/file-upload.component';
    // Image Upload
    // States Continent
    import { StateAllContinentsComponent } from './components/geographic-page/world/continential-page/state-all-continents/state-all-continents.component';
    import { EditAllStatesContinantsComponent } from './components/geographic-page/world/continential-page/edit-all-states-continants/edit-all-states-continants.component';
    import { MoreContinentsAllComponent } from './components/geographic-page/world/continential-page/more-continents-all/more-continents-all.component';
    // States Continent
    // Pools Continent
    import { EditAllPoolsContinantsComponent } from './components/geographic-page/world/continential-page/edit-all-pools-continants/edit-all-pools-continants.component';
    import { MorePoolsContinentComponent } from './components/geographic-page/world/continential-page/more-pools-continent/more-pools-continent.component';
    import { PoolsAllContinentsComponent } from './components/geographic-page/world/continential-page/pools-all-continents/pools-all-continents.component';
    // Mountains Continent
    import { MountainsAllContinentsComponent } from './components/geographic-page/world/continential-page/mountains-all-continents/mountains-all-continents.component';
    import { EditAllMountainsComponent } from './components/geographic-page/world/continential-page/edit-all-mountains/edit-all-mountains.component';
    import { MoreAllMountainsComponent } from './components/geographic-page/world/continential-page/more-all-mountains/more-all-mountains.component';
    // Rivers Continent
    import { RiversAllContinentsComponent } from './components/geographic-page/world/continential-page/rivers-all-continents/rivers-all-continents.component';
    import { EditAllRiversContinentsComponent } from './components/geographic-page/world/continential-page/edit-all-rivers-continents/edit-all-rivers-continents.component';
    import { MoreAllRiversContinentsComponent } from './components/geographic-page/world/continential-page/more-all-rivers-continents/more-all-rivers-continents.component';
    //Continential Component

    // Ocean Components
    import { OceanHomePageComponent } from './components/geographic-page/world/ocean-page/ocean-home-page/ocean-home-page.component';
    import { EditOceanHomePageComponent } from './components/geographic-page/world/ocean-page/ocean-home-page/edit-ocean-home-page/edit-ocean-home-page.component';
    import { XaxaxPageComponent } from './components/geographic-page/world/ocean-page/xaxax-page/xaxax-page.component';
    import { AtlanticPageComponent } from './components/geographic-page/world/ocean-page/atlantic-page/atlantic-page.component';
    import { IndiaPageComponent } from './components/geographic-page/world/ocean-page/india-page/india-page.component';
    import { NorthIcePageComponent } from './components/geographic-page/world/ocean-page/north-ice-page/north-ice-page.component';
    import { SouthOceanPageComponent } from './components/geographic-page/world/ocean-page/south-ocean-page/south-ocean-page.component';
    import { SeeAllOceanComponent } from './components/geographic-page/world/ocean-page/see-all-ocean/see-all-ocean.component';
    import { EditAllSeeComponent } from './components/geographic-page/world/ocean-page/edit-all-see/edit-all-see.component';
    import { MoreAllSeeComponent } from './components/geographic-page/world/ocean-page/more-all-see/more-all-see.component';
    import { CovacocAllOceanComponent } from './components/geographic-page/world/ocean-page/covacoc-all-ocean/covacoc-all-ocean.component';
    import { EditAllCovacocComponent } from './components/geographic-page/world/ocean-page/edit-all-covacoc/edit-all-covacoc.component';
    import { MoreAllCovacocComponent } from './components/geographic-page/world/ocean-page/more-all-covacoc/more-all-covacoc.component';
    // Ocean Components
    // Strait Components
    import { EdirStraitsComponent } from './components/geographic-page/world/strait-page/edir-straits/edir-straits.component';
    // Strait Components

    // First_one Components
    import { PopulationFirstComponent } from './components/geographic-page/world/the-first-one-page/population-first/population-first.component';
    import { AreaFirstComponent } from './components/geographic-page/world/the-first-one-page/area-first/area-first.component';
    import { MountainsFirstComponent } from './components/geographic-page/world/the-first-one-page/mountains-first/mountains-first.component';
    import { EditPopulationFirstComponent } from './components/geographic-page/world/the-first-one-page/edit-population-first/edit-population-first.component';
    import { EditAreaFirstComponent } from './components/geographic-page/world/the-first-one-page/edit-area-first/edit-area-first.component';
    import { EditMountainsFirstComponent } from './components/geographic-page/world/the-first-one-page/edit-mountains-first/edit-mountains-first.component';
    // First_one Components
    
    // World City
    import { WorldCityPageComponent } from './components/geographic-page/world/world-city-page/world-city-page.component';
    import { EditCityComponent } from './components/geographic-page/world/world-city-page/edit-city/edit-city.component';
    import { MoreCityComponent } from './components/geographic-page/world/world-city-page/more-city/more-city.component';
    // World City
//Geographic Components

// Astronomic Component
    import { AstronomicHomePageComponent } from './components/astronomic-page/astronomic-home-page/astronomic-home-page.component';
    import { EarthPlanetComponent } from './components/astronomic-page/astronomic-home-page/earth-planet/earth-planet.component';
    import { EditEarthPlanetComponent } from './components/astronomic-page/astronomic-home-page/earth-planet/edit-earth-planet/edit-earth-planet.component';
    import { SunPageComponent } from './components/astronomic-page/astronomic-home-page/sun-page/sun-page.component';
    import { EditSunPageComponent } from './components/astronomic-page/astronomic-home-page/sun-page/edit-sun-page/edit-sun-page.component';
    import { MilkyWayPageComponent } from './components/astronomic-page/astronomic-home-page/milky-way-page/milky-way-page.component';
    import { EditMilkyWayPageComponent } from './components/astronomic-page/astronomic-home-page/milky-way-page/edit-milky-way-page/edit-milky-way-page.component';
    import { PlanetsPageComponent } from './components/astronomic-page/astronomic-home-page/planets-page/planets-page.component';
    import { EditPlanetsPageComponent } from './components/astronomic-page/astronomic-home-page/planets-page/edit-planets-page/edit-planets-page.component';
    import { FarZonePageComponent } from './components/astronomic-page/astronomic-home-page/far-zone-page/far-zone-page.component';
    import { EditFarZonePageComponent } from './components/astronomic-page/astronomic-home-page/far-zone-page/edit-far-zone-page/edit-far-zone-page.component';
    import { MoreFarZonePageComponent } from './components/astronomic-page/astronomic-home-page/far-zone-page/more-far-zone-page/more-far-zone-page.component';
    import { EditFarZoneMorePageComponent } from './components/astronomic-page/astronomic-home-page/far-zone-page/more-far-zone-page/edit-far-zone-more-page/edit-far-zone-more-page.component';
    import { UsefulHrefPageComponent } from './components/astronomic-page/astronomic-home-page/useful-href-page/useful-href-page.component';
    import { UsefulPageEditComponent } from './components/astronomic-page/astronomic-home-page/useful-href-page/useful-page-edit/useful-page-edit.component';
// Astronomic Component

import { AdminComponent } from './components/admin/admin.component';
import {AuthGuard} from "./guards/auth.guard";
import {AuthService} from "./services/auth.service";
import {RecetService} from "./services/recet.service";
import {ContinetsResetService} from "./services/continets-reset.service";
import {ContinentsStatesService} from "./services/continents-states.service";
import {OceanResetService} from "./services/ocean-reset.service";
import { GeoMixResetService } from "./services/geo-mix-reset.service";
import { AstronomicMixService } from "./services/astronomic-mix.service";
import { ApprecitedResetService } from "./services/apprecited-reset.service";
import { AngularFireStorageModule } from 'angularfire2/storage';

import {FormsModule} from "@angular/forms";
import { DropZoneDirective } from './uploadImage/drop-zone.directive';
import { FileSizePipe } from './uploadImage/file-size.pipe';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HttpModule } from '@angular/http';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HomePageComponent,
    ArmeniaPageComponent,
    AstronomicPageComponent,
    NotFoundPageComponent,
    GeographicPageComponent,
    WorldComponent,
    CityPageComponent,
    ProvincePageComponent,
    RiversPageComponent,
    PoolsPageComponent,
    MountainsPageComponent,
    AdminComponent,
    EditArmCityComponent,
    EditArmProvinceComponent,
    EditArmRiverComponent,
    EditArmPoolComponent,
    EditArmMountainComponent,
    ContinentialPageComponent,
    IslandPageComponent,
    OceanPageComponent,
    StraitPageComponent,
    TheFirstOnePageComponent,
    ResulationPageComponent,
    DependentAreaPageComponent,
    AglomerationPageComponent,
    DictionaryGeoPageComponent,
    InteresingGeoPageComponent,
    GeographicHomePageComponent,
    ArmeniaHomePageComponent,
    ContinentialHomePageComponent,
    ContinentialAsiaPageComponent,
    ContinentialEuropaPageComponent,
    ContinentialAfricaPageComponent,
    ContinentialAustraliaPageComponent,
    ContinentialAntarktidaPageComponent,
    ContinentialNorthAmericaPageComponent,
    ContinentialSouthAmericaPageComponent,
    EditContinentsComponent,
    FileUploadAsiaComponent,
    FileUploadEuropaComponent,
    FileUploadAfricaComponent,
    FileUploadAustraliaComponent,
    FileUploadAntarktidaComponent,
    FileUploadNorthAmericaComponent,
    FileUploadSouthAmericaComponent,
    FileUploadStateAll,
    DropZoneDirective,
    FileSizePipe,
    EditAllContinentsComponent,
    StateAllContinentsComponent,
    EditAllStatesContinantsComponent,
    MoreContinentsAllComponent,
    EditAllPoolsContinantsComponent,
    MorePoolsContinentComponent,
    PoolsAllContinentsComponent,
    MountainsAllContinentsComponent,
    EditAllMountainsComponent,
    MoreAllMountainsComponent,
    RiversAllContinentsComponent,
    EditAllRiversContinentsComponent,
    MoreAllRiversContinentsComponent,
    EditAllIcelandsComponent,
    OceanHomePageComponent,
    XaxaxPageComponent,
    AtlanticPageComponent,
    IndiaPageComponent,
    NorthIcePageComponent,
    SouthOceanPageComponent,
    SeeAllOceanComponent,
    EditAllSeeComponent,
    MoreAllSeeComponent,
    CovacocAllOceanComponent,
    EditAllCovacocComponent,
    MoreAllCovacocComponent,
    EditOceanHomePageComponent,
    EdirStraitsComponent,
    PopulationFirstComponent,
    AreaFirstComponent,
    MountainsFirstComponent,
    EditPopulationFirstComponent,
    EditAreaFirstComponent,
    EditMountainsFirstComponent,
    EditDependentsComponent,
    EditAglomerationsComponent,
    WorldCityPageComponent,
    EditCityComponent,
    MoreCityComponent,
    EditDictionaryComponent,
    EditInteresingComponent,
    AstronomicHomePageComponent,
    EarthPlanetComponent,
    EditEarthPlanetComponent,
    SunPageComponent,
    EditSunPageComponent,
    MilkyWayPageComponent,
    EditMilkyWayPageComponent,
    PlanetsPageComponent,
    EditPlanetsPageComponent,
    FarZonePageComponent,
    EditFarZonePageComponent,
    MoreFarZonePageComponent,
    EditFarZoneMorePageComponent,
    UsefulHrefPageComponent,
    UsefulPageEditComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireStorageModule,
    NgPipesModule,
    HttpModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    RecetService, 
    ContinetsResetService, 
    ContinentsStatesService, 
    OceanResetService, 
    GeoMixResetService, 
    AstronomicMixService, 
    ApprecitedResetService,
    FlashMessagesService
  ],
  bootstrap: [AppComponent, HomeComponentComponent]
})
export class AppModule { }
