import { Component, Input, OnInit, Output } from "@angular/core";
import { links } from "../links";

@Component({
  selector: "app-button-link",
  templateUrl: "./button-link.component.html",
  styleUrls: ["./button-link.component.css"]
})
export class ButtonLinkComponent implements OnInit {
  @Input() links;
  @Output() SendChildNotification;

  constructor() {}

  onNavigation() {
    window.location.href = this.links.url;
  }

  ngOnInit() {}

  onNotifyChild() {
    this.SendChildNotification.emit(this.links);
  }
}
