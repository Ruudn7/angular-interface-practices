import { Directive, Input, OnInit, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appPostTpl]'
})
export class PostTplDirective {

  @Input('appPostTplType') type = 'regular';

  constructor(
    public template: TemplateRef<any>
  ) { }

}
