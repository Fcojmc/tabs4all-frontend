export interface Login {
    email:      string;
    password:   string;
}

export interface LoginResponse {
    success:     boolean;
    message:      string;
    data:  null | string;
}