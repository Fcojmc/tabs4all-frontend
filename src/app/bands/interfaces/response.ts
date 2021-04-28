import { Band } from './band.interface';

export interface BandCreateResponse {
    data:   null | any;
    message:    string;
    code:       number;
}

export interface BandErrorResponse {
    name?:     string[];
}

export interface GetBandsResponse {
    status:     string;
    message:    string;
    data: {
        bands:  Band[];
    }
}