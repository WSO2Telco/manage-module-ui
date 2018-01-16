import { Directive, Input, SimpleChanges } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthenticationService } from 'app/commons/services/authentication.service';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { ViewContainerRef } from '@angular/core/src/linker/view_container_ref';

@Directive({
  selector: '[appHasPermissions]'
})
export class HasPermissionsDirective implements OnInit, OnChanges {

  @Input('appHasPermissions') permissionPattern: string;

  constructor(private _as: AuthenticationService, private _templateRef: TemplateRef<any>, private _container: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getPermisions()
  }
  ngOnInit(): void {
  
  }

  private getPermisions(): void {
    if (this._as.hasPermissions(this.permissionPattern)) {
      this._container.createEmbeddedView(this._templateRef);
    } else {
      this._container.clear();
    }
  }
}
