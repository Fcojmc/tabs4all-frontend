export interface Login {
    email:      string;
    password:   string;
}

export interface LoginResponse {
    status:     string;
    message:    string;
    data: null | { 
        token:  string;
    }
}
