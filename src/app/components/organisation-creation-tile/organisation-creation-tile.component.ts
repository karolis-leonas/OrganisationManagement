import { Component, OnInit } from '@angular/core';
import { OrganisationAppConstants } from '../../constants/organisation-app-constants';

@Component({
  selector: 'app-organisation-creation-tile',
  templateUrl: './organisation-creation-tile.component.html',
  styleUrls: ['./organisation-creation-tile.component.css']
})
export class OrganisationCreationTileComponent implements OnInit {
  readonly organisationAppConstants = OrganisationAppConstants;
  constructor() { }

  ngOnInit() {
  }

}
