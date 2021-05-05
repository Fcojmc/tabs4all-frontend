import { Song } from "./song.interface";

export interface Band {
    id?:        string;
    name:       string;
    image?:        any;
    url_yt:     string;
    songs?:     Song[];
    created_at?:  Date;
    updated_at?:  Date;
}