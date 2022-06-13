import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {Group} from "../groups/groups.component";
import {BehaviorSubject, finalize, Observable} from "rxjs";
import {GroupsService} from "../../services/groups.service";

export class GroupsDataSource implements DataSource<Group> {
  private groupSubject = new BehaviorSubject<Group[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(
    private groupService: GroupsService
  ) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Group[]> {
    return this.groupSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.groupSubject.complete();
    this.loadingSubject.complete();
  }

  getGroups() {
    this.loadingSubject.next(true);
    this.groupService.getGroups()
      .pipe(
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(
        (groups: any) => this.groupSubject.next(groups)
      );
  }

}
