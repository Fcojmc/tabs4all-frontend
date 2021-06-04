import { Song } from "./song.interface";

export interface Band {
    uuid?:      string;
    name:       string;
    image?:        any;
    url_yt:     string;
    songs?:     Song[];
    createdAt?:   Date;
    updatedAt?:   Date;
}