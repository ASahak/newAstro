import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
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
import { EditArmMountainComponent } from './components/armenia-page/mountains-page/edit-arm-mountain/edit-arm-mountain.component';
import { PoolsPageComponent } from './components/armenia-page/pools-page/pools-page.component';
import { MountainsPageComponent } from './components/armenia-page/mountains-page/mountains-page.component';
import { ArmeniaHomePageComponent } from './components/armenia-page/armenia-home-page/armenia-home-page.component';
//Armenia Components

//Geographic Components
import { WorldComponent } from './components/geographic-page/world/world.component';
import { GeographicPageComponent } from './components/geographic-page/geographic-page.component';
import { ContinentialPageComponent } from './components/geographic-page/world/continential-page/continential-page.component';
//Iceland Component
import { IslandPageComponent } from './components/geographic-page/world/island-page/island-page.component';
import { EditAllIcelandsComponent } from './components/geographic-page/world/island-page/edit-all-icelands/edit-all-icelands.component';

//Strait Component
import { StraitPageComponent } from './components/geographic-page/world/strait-page/strait-page.component';
import { EdirStraitsComponent } from './components/geographic-page/world/strait-page/edir-straits/edir-straits.component';
//Strait Component
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
    // States Continent
    import { StateAllContinentsComponent } from './components/geographic-page/world/continential-page/state-all-continents/state-all-continents.component';
    import { EditAllStatesContinantsComponent } from './components/geographic-page/world/continential-page/edit-all-states-continants/edit-all-states-continants.component';
    import { MoreContinentsAllComponent } from './components/geographic-page/world/continential-page/more-continents-all/more-continents-all.component';
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
    import { OceanPageComponent } from './components/geographic-page/world/ocean-page/ocean-page.component';
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

// Astronomic Componen
    import { EarthPlanetComponent } from './components/astronomic-page/astronomic-home-page/earth-planet/earth-planet.component';   
    import { AstronomicHomePageComponent } from './components/astronomic-page/astronomic-home-page/astronomic-home-page.component';
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
// Astronomic Componen


import { AdminComponent } from './components/admin/admin.component';
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
    {path: "", redirectTo: '', pathMatch: 'full', component:HomePageComponent },
    {path: "astronomic", component:AstronomicPageComponent,
        children : [
            {path: "", component:AstronomicHomePageComponent},
            {path: "earth-planet", component:EarthPlanetComponent},
            {path: "earth-planet/edit/:id", component:EditEarthPlanetComponent},
            {path: "sun", component:SunPageComponent},
            {path: "sun/edit/:id", component:EditSunPageComponent},
            {path: "milky-way", component:MilkyWayPageComponent},
            {path: "milky-way/edit/:id", component:EditMilkyWayPageComponent},
            {path: "planets", component:PlanetsPageComponent},
            {path: "planets/:name/:id", component:PlanetsPageComponent},
            {path: "planets/:name/edit/:id", component:EditPlanetsPageComponent},
            {path: "far-zone", component:FarZonePageComponent},
            {path: "far-zone/more/:id", component:MoreFarZonePageComponent},
            {path: "far-zone/edit/:id", component:EditFarZonePageComponent},
            {path: "far-zone/more/:id/edit/:id", component:EditFarZoneMorePageComponent},
            {path: "useful-references", component:UsefulHrefPageComponent},
            {path: "useful-references/edit/:id", component:UsefulPageEditComponent},
            
        ]
    },
    {path: "geographic", component:GeographicPageComponent},
    {path: "admin", component:AdminComponent},
    {path:"geographic/armenia", component:ArmeniaPageComponent,
        children:[
            {path:"", component:ArmeniaHomePageComponent},
            {path:"city", component:CityPageComponent},
            {path:"city/edit/:id", component:EditArmCityComponent, canActivate: [AuthGuard]},
            {path:"province", component:ProvincePageComponent},
            {path:"province/edit/:id", component:EditArmProvinceComponent, canActivate: [AuthGuard]},
            {path:"rivers", component:RiversPageComponent},
            {path:"rivers/edit/:id", component:EditArmRiverComponent, canActivate: [AuthGuard]},
            {path:"pools", component:PoolsPageComponent},
            {path:"pools/edit/:id", component:EditArmPoolComponent, canActivate: [AuthGuard]},
            {path:"mountains", component:MountainsPageComponent},
            {path:"mountains/edit/:id", component:EditArmMountainComponent, canActivate: [AuthGuard]},

        ]
    },
    {path:"geographic/world", component:WorldComponent,
        children : [
            {path: "", component:GeographicHomePageComponent},
            {path: "continential/edit/:id", component:EditContinentsComponent, canActivate: [AuthGuard]},
            {path: "continential/asia/state/more/:id", component:MoreContinentsAllComponent},
            {path: "continential/europa/state/more/:id", component:MoreContinentsAllComponent},
            {path: "continential/north-america/state/more/:id", component:MoreContinentsAllComponent},
            {path: "continential/south-america/state/more/:id", component:MoreContinentsAllComponent},
            {path: "continential/africa/state/more/:id", component:MoreContinentsAllComponent},
            {path: "continential/australia/state/more/:id", component:MoreContinentsAllComponent},

            {path: "continential/asia/pools/more/:id", component:MorePoolsContinentComponent},
            {path: "continential/europa/pools/more/:id", component:MorePoolsContinentComponent},
            {path: "continential/north-america/pools/more/:id", component:MorePoolsContinentComponent},
            {path: "continential/south-america/pools/more/:id", component:MorePoolsContinentComponent},
            {path: "continential/africa/pools/more/:id", component:MorePoolsContinentComponent},
            {path: "continential/australia/pools/more/:id", component:MorePoolsContinentComponent},

            {path: "continential/asia/mountains/more/:id", component:MoreAllMountainsComponent},
            {path: "continential/europa/mountains/more/:id", component:MoreAllMountainsComponent},
            {path: "continential/north-america/mountains/more/:id", component:MoreAllMountainsComponent},
            {path: "continential/south-america/mountains/more/:id", component:MoreAllMountainsComponent},
            {path: "continential/antarktida/mountains/more/:id", component:MoreAllMountainsComponent},
            {path: "continential/africa/mountains/more/:id", component:MoreAllMountainsComponent},
            {path: "continential/australia/mountains/more/:id", component:MoreAllMountainsComponent},

            {path: "continential/asia/rivers/more/:id", component:MoreAllRiversContinentsComponent},
            {path: "continential/europa/rivers/more/:id", component:MoreAllRiversContinentsComponent},
            {path: "continential/north-america/rivers/more/:id", component:MoreAllRiversContinentsComponent},
            {path: "continential/south-america/rivers/more/:id", component:MoreAllRiversContinentsComponent},
            {path: "continential/africa/rivers/more/:id", component:MoreAllRiversContinentsComponent},
            {path: "continential/australia/rivers/more/:id", component:MoreAllRiversContinentsComponent},
            {path: "continential", component:ContinentialPageComponent,
                children:[
                    {path:"", component:ContinentialHomePageComponent},
                    {path:"asia", component:ContinentialAsiaPageComponent},
                    {path:"asia/edit/:id", component:EditAllContinentsComponent, canActivate: [AuthGuard]},
                    {path:"asia/pools", component:PoolsAllContinentsComponent},
                    {path:"asia/pools/edit/:id", component:EditAllPoolsContinantsComponent, canActivate: [AuthGuard]},
                    {path:"asia/rivers", component:RiversAllContinentsComponent},
                    {path:"asia/rivers/edit/:id", component:EditAllRiversContinentsComponent, canActivate: [AuthGuard]},
                    {path:"asia/mountains", component:MountainsAllContinentsComponent},
                    {path:"asia/mountains/edit/:id", component:EditAllMountainsComponent, canActivate: [AuthGuard]},
                    {path:"asia/state", component:StateAllContinentsComponent},
                    {path:"asia/state/edit/:id", component:EditAllStatesContinantsComponent, canActivate: [AuthGuard]},

                    {path:"europa", component:ContinentialEuropaPageComponent},
                    {path:"europa/edit/:id", component:EditAllContinentsComponent, canActivate: [AuthGuard]},
                    {path:"europa/rivers", component:RiversAllContinentsComponent},
                    {path:"europa/rivers/edit/:id", component:EditAllRiversContinentsComponent, canActivate: [AuthGuard]},
                    {path:"europa/pools", component:PoolsAllContinentsComponent},
                    {path:"europa/pools/edit/:id", component:EditAllPoolsContinantsComponent, canActivate: [AuthGuard]},
                    {path:"europa/mountains", component:MountainsAllContinentsComponent},
                    {path:"europa/mountains/edit/:id", component:EditAllMountainsComponent, canActivate: [AuthGuard]},
                    {path:"europa/state", component:StateAllContinentsComponent},
                    {path:"europa/state/edit/:id", component:EditAllStatesContinantsComponent, canActivate: [AuthGuard]},

                    {path:"africa", component:ContinentialAfricaPageComponent},
                    {path:"africa/edit/:id", component:EditAllContinentsComponent, canActivate: [AuthGuard]},
                    {path:"africa/pools", component:PoolsAllContinentsComponent},
                    {path:"africa/pools/edit/:id", component:EditAllPoolsContinantsComponent, canActivate: [AuthGuard]},
                    {path:"africa/mountains", component:MountainsAllContinentsComponent},
                    {path:"africa/mountains/edit/:id", component:EditAllMountainsComponent, canActivate: [AuthGuard]},
                    {path:"africa/state", component:StateAllContinentsComponent},
                    {path:"africa/state/edit/:id", component:EditAllStatesContinantsComponent, canActivate: [AuthGuard]},
                    {path:"africa/rivers", component:RiversAllContinentsComponent},
                    {path:"africa/rivers/edit/:id", component:EditAllRiversContinentsComponent, canActivate: [AuthGuard]},

                    {path:"australia", component:ContinentialAustraliaPageComponent},
                    {path:"australia/edit/:id", component:EditAllContinentsComponent, canActivate: [AuthGuard]},
                    {path:"australia/pools", component:PoolsAllContinentsComponent},
                    {path:"australia/pools/edit/:id", component:EditAllPoolsContinantsComponent, canActivate: [AuthGuard]},
                    {path:"australia/mountains", component:MountainsAllContinentsComponent},
                    {path:"australia/mountains/edit/:id", component:EditAllMountainsComponent, canActivate: [AuthGuard]},
                    {path:"australia/state", component:StateAllContinentsComponent},
                    {path:"australia/state/edit/:id", component:EditAllStatesContinantsComponent, canActivate: [AuthGuard]},
                    {path:"australia/rivers", component:RiversAllContinentsComponent},
                    {path:"australia/rivers/edit/:id", component:EditAllRiversContinentsComponent, canActivate: [AuthGuard]},

                    {path:"antarktida", component:ContinentialAntarktidaPageComponent},
                    {path:"antarktida/edit/:id", component:EditAllContinentsComponent, canActivate: [AuthGuard]},
                    {path:"antarktida/mountains", component:MountainsAllContinentsComponent},
                    {path:"antarktida/mountains/edit/:id", component:EditAllMountainsComponent, canActivate: [AuthGuard]},

                    {path:"north-america", component:ContinentialNorthAmericaPageComponent},
                    {path:"north-america/edit/:id", component:EditAllContinentsComponent, canActivate: [AuthGuard]},
                    {path:"north-america/pools", component:PoolsAllContinentsComponent},
                    {path:"north-america/pools/edit/:id", component:EditAllPoolsContinantsComponent, canActivate: [AuthGuard]},
                    {path:"north-america/mountains", component:MountainsAllContinentsComponent},
                    {path:"north-america/mountains/edit/:id", component:EditAllMountainsComponent, canActivate: [AuthGuard]},
                    {path:"north-america/state", component:StateAllContinentsComponent},
                    {path:"north-america/state/edit/:id", component:EditAllStatesContinantsComponent, canActivate: [AuthGuard]},
                    {path:"north-america/rivers", component:RiversAllContinentsComponent},
                    {path:"north-america/rivers/edit/:id", component:EditAllRiversContinentsComponent, canActivate: [AuthGuard]},

                    {path:"south-america", component:ContinentialSouthAmericaPageComponent},
                    {path:"south-america/edit/:id", component:EditAllContinentsComponent, canActivate: [AuthGuard]},
                    {path:"south-america/pools", component:PoolsAllContinentsComponent},
                    {path:"south-america/pools/edit/:id", component:EditAllPoolsContinantsComponent, canActivate: [AuthGuard]},
                    {path:"south-america/mountains", component:MountainsAllContinentsComponent},
                    {path:"south-america/mountains/edit/:id", component:EditAllMountainsComponent, canActivate: [AuthGuard]},
                    {path:"south-america/state", component:StateAllContinentsComponent},
                    {path:"south-america/state/edit/:id", component:EditAllStatesContinantsComponent, canActivate: [AuthGuard]},
                    {path:"south-america/rivers", component:RiversAllContinentsComponent},
                    {path:"south-america/rivers/edit/:id", component:EditAllRiversContinentsComponent, canActivate: [AuthGuard]},

                ]
            },
            {path: "island", component:IslandPageComponent},
            {path: "island/edit/:id", component:EditAllIcelandsComponent},
            {path: "ocean/edit/:id", component:EditOceanHomePageComponent, canActivate: [AuthGuard]},
            {path: "ocean", component:OceanPageComponent,
              children:[
                  {path:"", component:OceanHomePageComponent },
                  {path:"Խաղաղ/ծովեր/more/:id", component:MoreAllSeeComponent},
                  {path:"Խաղաղ/ծովեր/edit/:id", component:EditAllSeeComponent},
                  {path:"Խաղաղ/ծովածոցեր/more/:id", component:MoreAllCovacocComponent},
                  {path:"Խաղաղ/ծովածոցեր/edit/:id", component:EditAllCovacocComponent},
                  {path:"Խաղաղ/ծովածոցեր", component:CovacocAllOceanComponent},
                  {path:"Խաղաղ/ծովեր", component:SeeAllOceanComponent},
                  {path:"Խաղաղ/:id", component:XaxaxPageComponent},
                  {path:"Ատլանտյան/ծովեր/more/:id", component:MoreAllSeeComponent},
                  {path:"Ատլանտյան/ծովեր/edit/:id", component:EditAllSeeComponent},
                  {path:"Ատլանտյան/ծովեր", component:SeeAllOceanComponent},
                  {path:"Ատլանտյան/ծովածոցեր/more/:id", component:MoreAllCovacocComponent},
                  {path:"Ատլանտյան/ծովածոցեր/edit/:id", component:EditAllCovacocComponent},
                  {path:"Ատլանտյան/ծովածոցեր", component:CovacocAllOceanComponent},
                  {path:"Ատլանտյան/:id", component:AtlanticPageComponent},
                  {path:"Հս-Սառուցյալ/ծովեր/more/:id", component:MoreAllSeeComponent},
                  {path:"Հս-Սառուցյալ/ծովեր/edit/:id", component:EditAllSeeComponent},
                  {path:"Հս-Սառուցյալ/ծովեր", component:SeeAllOceanComponent},
                  {path:"Հս-Սառուցյալ/ծովածոցեր/more/:id", component:MoreAllCovacocComponent},
                  {path:"Հս-Սառուցյալ/ծովածոցեր/edit/:id", component:EditAllCovacocComponent},
                  {path:"Հս-Սառուցյալ/ծովածոցեր", component:CovacocAllOceanComponent},
                  {path:"Հս-Սառուցյալ/:id", component:NorthIcePageComponent},
                  {path:"Հնդկական/ծովեր/more/:id", component:MoreAllSeeComponent},
                  {path:"Հնդկական/ծովեր/edit/:id", component:EditAllSeeComponent},
                  {path:"Հնդկական/ծովեր", component:SeeAllOceanComponent},
                  {path:"Հնդկական/ծովածոցեր/more/:id", component:MoreAllCovacocComponent},
                  {path:"Հնդկական/ծովածոցեր/edit/:id", component:EditAllCovacocComponent},
                  {path:"Հնդկական/ծովածոցեր", component:CovacocAllOceanComponent},
                  {path:"Հնդկական/:id", component:IndiaPageComponent},
                  {path:"Հարավային/:id", component:SouthOceanPageComponent},
                ]
            },
            {path: "strait", component:StraitPageComponent},
            {path: "strait/edit/:id", component:EdirStraitsComponent},
            {path: "the-first-one", component:TheFirstOnePageComponent,
              children:[
                {path:"country/population", component:PopulationFirstComponent },
                {path:"country/population/edit/:id", component:EditPopulationFirstComponent },
                {path:"country/area", component:AreaFirstComponent },
                {path:"country/area/edit/:id", component:EditAreaFirstComponent },
                {path:"mountains/edit/:id", component:EditMountainsFirstComponent },
                {path:"mountains", component:MountainsFirstComponent },
              ]
            },
            {path: "dependent-areas/edit/:id", component:EditDependentsComponent},
            {path: "dependent-areas", component:DependentAreaPageComponent},
            {path: "aglomeration/edit/:id", component:EditAglomerationsComponent},
            {path: "aglomeration", component:AglomerationPageComponent},
            {path: "resulation", component:ResulationPageComponent},
            {path: "dictionary", component:DictionaryGeoPageComponent},
            {path: "dictionary/edit/:id", component:EditDictionaryComponent},
            {path: "interesing", component:InteresingGeoPageComponent},
            {path: "interesing/edit/:id", component:EditInteresingComponent},
            {path: "citys", component:WorldCityPageComponent},
            {path: "citys/more/:id", component:MoreCityComponent},
            {path: "citys/edit/:id", component:EditCityComponent},

        ]
    },
    

    {path: "**", component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
