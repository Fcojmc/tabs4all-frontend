export interface User {
    id?:                    string;
    name:                   string;
    email:                  string;
    password:               string;
    password_confirmation?: string;
    image?:                 string;
    is_admin?:              boolean
}