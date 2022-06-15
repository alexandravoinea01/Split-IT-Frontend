import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../components/groups/groups.component";

@Injectable({
  providedIn: "root"
})

export class GroupsService {
  private readonly baseUrl = 'https://localhost:5001/api/Group';

  constructor(
    private http: HttpClient
  ) {
  }

  getGroups(): Observable<Group[]> {
    // @ts-ignore
    return this.http.get(`${this.baseUrl}`);
  }
}
