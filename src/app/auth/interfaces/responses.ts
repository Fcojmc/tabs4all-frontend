export interface AuthResponse {
    status:     string;
    message:    string;
    data: null | { 
        token:  string;
    }
}

