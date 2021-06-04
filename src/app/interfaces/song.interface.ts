export interface Song {
    uuid:       string;
    band_id:    string;
    name:       string;
    url:        string;
    createdAt?:   Date;
    updatedAt?:   Date;
}