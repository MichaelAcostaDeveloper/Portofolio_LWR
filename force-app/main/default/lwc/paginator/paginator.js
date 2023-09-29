// paginator.js
import { LightningElement } from "lwc";

export default class Paginator extends LightningElement {
  previousHandler() {
    this.dispatchEvent(new CustomEvent("previous"));
    console.log(new CustomEvent("previous"));
  }

  nextHandler() {
    this.dispatchEvent(new CustomEvent("next"));
    console.log(new CustomEvent("next"));
  }
}

