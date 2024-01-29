package com.example.demo.services;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class LoginResponse {
    private String message;
    private boolean status;

    public LoginResponse(String message, boolean status) {
        this.message = message;
        this.status = status;
    }
}
