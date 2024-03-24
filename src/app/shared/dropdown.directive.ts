import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isDropdownOpen:boolean = false;

    constructor(private elRef:ElementRef, private renderer:Renderer2){}

    @HostListener('click')
    toggleOpen(eventData:Event){
        this.isDropdownOpen = !this.isDropdownOpen;
    }

}