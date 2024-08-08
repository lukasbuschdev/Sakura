import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav/nav.component";

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [
        CommonModule, 
        NavComponent
    ],
    templateUrl: './landingPage.component.html',
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent {
    
}