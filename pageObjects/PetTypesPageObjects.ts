import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class PetTypesPageObjects {
   
    Name: ElementFinder;
    pageTitle: ElementFinder;
    addButton: ElementFinder;
    HomeButton: ElementFinder;

    constructor() {
        this.Name = element(by.xpath("//*[@id='pettypes']/thead/tr/th[1]"));
        this.pageTitle=element(by.xpath("//*[@class='container xd-container']/h2"));
        this.addButton=element(by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[2]"));
        this.HomeButton=element(by.xpath("/html/body/app-root/app-pettype-list/div/div/div/button[1]"));
    }
}