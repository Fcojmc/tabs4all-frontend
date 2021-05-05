export interface Song {
    id:        string;
    band_id:    string;
    name:       string;
    url:        string;
    created_at?:  Date;
    updated_at?:  Date;
}