import { Injectable, Injector, NgModuleFactoryLoader, NgModuleRef, NgModuleFactory, Compiler, Optional } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LazyDashboardTileService  {

    constructor(
        // tslint:disable-next-line: deprecation
        private loader: NgModuleFactoryLoader,
        private injector: Injector,
        @Optional() private compiler: Compiler
    ) {
    }

    private moduleRef: NgModuleRef<any>;

    load(): Promise<void> {
        
        if (this.moduleRef) {
            return Promise.resolve();
        }

        return import('apps/dashboard/src/app/lazy-dashboard-tile/lazy-dashboard-tile.module')
            .then(m => m.LazyDashboardTileModule)
            .then(moduleOrFactory => {
                if (moduleOrFactory instanceof NgModuleFactory) {
                    return moduleOrFactory;
                } else {
                    return this.compiler.compileModuleAsync(moduleOrFactory);
                }
            })
            .then(moduleFactory => {
                    this.moduleRef = (moduleFactory as any).create(this.injector);
                    console.debug('moduleRef', this.moduleRef);
            })
            .catch(err => {
                console.error('error loading module', err); 
            });


        // return this
        //     .loader
        //     .load(path)
        //     .then(moduleFactory => {
        //         this.moduleRef = moduleFactory.create(this.injector).instance;
        //         console.debug('moduleRef', this.moduleRef);
        //     })
        //     .catch(err => {
        //         console.error('error loading module', err); 
        //     });
        
    }
}
 