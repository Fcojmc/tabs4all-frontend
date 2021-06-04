import { Band } from './band.interface';
import { Tab } from './tab.interface';

export interface User {
    uuid?:                  string;
    name:                   string;
    email:                  string;
    password:               string;
    image?:                 string;
    is_admin?:             boolean;
    createdAt?:               Date;
    updatedAt?:               Date;
    favouriteBands:         Band[];
    favouriteTabs:           Tab[];
    tabs:                    Tab[];
}