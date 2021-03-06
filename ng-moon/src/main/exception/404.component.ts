import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleReuseStrategy } from '../simple-reuse-srategy';

/**
 * 404异常页面
 * 
 * @export
 * @class Exception404Component
 */
@Component({
    selector: 'exception-404',
    template: `404 抱歉，你访问的页面不存在!`
})
export class Exception404Component {
    constructor(private router: Router) {
        SimpleReuseStrategy.deleteRouteSnapshot(this.router.url);
    }
}
