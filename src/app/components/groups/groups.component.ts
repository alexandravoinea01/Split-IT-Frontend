import {Component, OnInit} from "@angular/core";
import {GroupsService} from "../../services/groups.service";
import {GroupsDataSource} from "../data-sources/groups.data-source";

export interface Group {
  id: string,
  name: string,
  photoUrl: string
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})

export class GroupsComponent implements OnInit{
  diplayedColumns = ['photoUrl', 'name'];
  dataSource = new GroupsDataSource(this.groupsService);
  defaultImage = "https://thumbs.dreamstime.com/b/linear-group-icon-customer-service-outline-collection-thin-line-vector-isolated-white-background-138644548.jpg";

  constructor(
    private groupsService: GroupsService
  ) {
  }

  ngOnInit() {
    this.dataSource = new GroupsDataSource(this.groupsService);
    console.log(this.dataSource)

    this.dataSource.getGroups();
    console.log(this.dataSource)

  }
}

