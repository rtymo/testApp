import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { PagerService } from "../../shared/services/index";
import { Router } from "@angular/router";
import { SharedService } from "../../shared/services/index";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MainComponent implements OnInit {
  allItems: any;
  pager: any = {};
  pagedItems: any[];

  constructor(
    private pagerService: PagerService,
    private router: Router,
    private service: SharedService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadPage()
  }

  loadPage(): void {
    this.service.getRecipes().subscribe(data => {
      this.allItems = data;
      this.setPage(1);
      localStorage.setItem("recipes", JSON.stringify(this.allItems));
      this.cdr.detectChanges()
    });
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    this.pagedItems = this.allItems.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }

  onClickDetails(id: string) {
    this.router.navigate(["details"], { queryParams: { id: id } });
  }
}
