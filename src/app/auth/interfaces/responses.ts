export interface LoginResponse {
    status:     string;
    message:    string;
    data: null | { 
        token:  string;
    }
}

export interface RegisterResponse {
    status:     string;
    message:    string;
    data: null | any;
}

export interface RegisterErrors {
    email?:     string[];
    password?:  string[];
    name?:      string[];
}