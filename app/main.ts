import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import { AppModule} from "./app.module";

const palatform = platformBrowserDynamic();
palatform.bootstrapModule(AppModule);